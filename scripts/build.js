import { build } from "esbuild";
import fs from "fs";
import path from "path";

const dist = "dist";

// -----------------
// Clean dist
// -----------------
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// -----------------
// JS: Bundle Wrapper (with CSS + font support)
// -----------------
await build({
  entryPoints: ["src/main.js"],
  outfile: "dist/taleem-player-app.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: false,
  loader: {
    ".css": "css",
    ".woff": "file",
    ".woff2": "file",
    ".ttf": "file",
    ".eot": "file",
    ".svg": "file"
  },
  assetNames: "assets/[name]"
});

// -----------------
// CSS: Copy app.css
// -----------------
fs.mkdirSync("dist/css/app", { recursive: true });

fs.copyFileSync(
  "src/css/app/app.css",
  "dist/css/app/app.css"
);

// -----------------
// CSS: Copy themes
// -----------------
const themesSrc = "src/css/themes";
const themesDest = "dist/css/themes";

fs.mkdirSync(themesDest, { recursive: true });

fs.readdirSync(themesSrc).forEach(file => {
  const srcFile = path.join(themesSrc, file);
  const destFile = path.join(themesDest, file);
  fs.copyFileSync(srcFile, destFile);
});

console.log("✔ taleem-player-app build complete");
