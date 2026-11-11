import { cp, mkdir, access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const source = path.resolve(
  "node_modules/@designcodeio/threeui/lib-dist/assets/landing-pages"
);
const destination = path.resolve("public/landing-pages");
const customKage = path.resolve("custom/kage.html");
const customJourney = path.join(destination, "inner-green-3d.html");
const bookshelfSource = path.resolve("public/bookshelf/complete-shelf-v2.html");

try {
  await access(path.join(source, "kage.html"));
  await access(path.join(source, "inner-green-3d.html"));
  await access(customKage);
  await access(customJourney);
  await access(bookshelfSource);
} catch {
  console.error("Required KAGE, Sylva, or BOOKSHELF assets are missing.");
  process.exit(1);
}

// Keep the customized Journey scene (original Sylva environment + five decks)
// while refreshing all supporting package assets on every deployment.
const journeyHtml = await readFile(customJourney);

await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
await cp(customKage, path.join(destination, "kage.html"));
await writeFile(customJourney, journeyHtml);
console.log("Copied ThreeUI assets and restored the five-deck Sylva Journey scene.");
