import {
  rmSync,
  mkdirSync,
  cpSync,
  readdirSync,
  copyFileSync,
  existsSync
} from "node:fs";

rmSync("dist", {
  recursive: true,
  force: true
});

mkdirSync("dist", {
  recursive: true
});

for (const dir of ["assets", "css", "js"]) {
  if (existsSync(dir)) {
    cpSync(dir, `dist/${dir}`, {
      recursive: true
    });
  }
}

for (const file of readdirSync(".")) {
  if (file.endsWith(".html")) {
    copyFileSync(file, `dist/${file}`);
  }
}

for (const file of [
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest"
]) {
  if (existsSync(file)) {
    copyFileSync(file, `dist/${file}`);
  }
}

console.log("Cloudflare Pages build completed.");
