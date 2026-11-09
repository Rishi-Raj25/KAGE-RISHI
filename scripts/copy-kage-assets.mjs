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
  await access(customKage);
  await access(bookshelfSource);
} catch {
  console.error("Required KAGE or BOOKSHELF assets are missing.");
  process.exit(1);
}

await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
// Restore the repository-owned KAGE page after package assets are copied.
await cp(customKage, path.join(destination, "kage.html"));
console.log("Copied ThreeUI assets, restored KAGE, and retained BOOKSHELF-CN assets.");
