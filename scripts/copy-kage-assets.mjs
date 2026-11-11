import { cp, mkdir, access } from "node:fs/promises";
import path from "node:path";

const source = path.resolve(
  "node_modules/@designcodeio/threeui/lib-dist/assets/landing-pages"
);
const destination = path.resolve("public/landing-pages");
const customKage = path.resolve("custom/kage.html");
const bookshelfSource = path.resolve("public/bookshelf/complete-shelf-v2.html");

try {
  await access(path.join(source, "kage.html"));
  await access(path.join(source, "inner-green-3d.html"));
  await access(customKage);
  await access(bookshelfSource);
} catch {
  console.error("Required KAGE, original Sylva, or BOOKSHELF assets are missing.");
  process.exit(1);
}

await mkdir(destination, { recursive: true });
// Copy the package's original landing-page assets, including the untouched
// inner-green-3d.html Sylva scene with its original environmental artwork.
await cp(source, destination, { recursive: true });
// KAGE's main homepage remains repository-owned; Journey uses the package's
// original Sylva scene rather than the previously customized replacement.
await cp(customKage, path.join(destination, "kage.html"));
console.log("Copied original ThreeUI Sylva assets and restored custom KAGE homepage.");
