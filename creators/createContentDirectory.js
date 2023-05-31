/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require("path");

const fsExtra = require("fs-extra");

const contentDir = path.join(__dirname, "../content");
fsExtra.emptyDirSync(contentDir);
console.log("Content directory cleared");

const publicDir = path.join(__dirname, "../public");
const assetsDir = path.join(__dirname, "../assets/json");

const PUBLIC_FILES_TO_REMOVE = [
  "site.json",
  "sitemap.xml",
  "siteMeta.json",
  "routesPages.json",
  "routesPosts.json",
  "routesMeetings.json",
  "routesPublications.json",
  "pages.json",
  "posts.json",
  "hub.json",
  "publications.json",
  "meetings.json",
];

PUBLIC_FILES_TO_REMOVE.forEach((fileName) => {
  fs.rmSync(`${publicDir}/${fileName}`, { force: true });
  fs.rmSync(`${assetsDir}/${fileName}`, { force: true });
});

console.log("Files removed: ", PUBLIC_FILES_TO_REMOVE);
