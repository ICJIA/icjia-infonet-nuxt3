import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { v4: uuidv4 } = require("uuid");
const jsonfile = require("jsonfile");
const pages = require("../public/pages.json");
// const meetings = require("../public/meetings.json");
// const posts = require("../public/posts.json");
// const publications = require("../public/publications.json");
// const site = [...pages, ...posts];

//TODO: Add dynamic pages to search index

// const site = [...pages, ...meetings, ...posts, ...publications];

const site = [...pages];

const searchIndex = site.map((item) => {
  // console.log(item.attributes);
  if (!item.attributes.hideFromSearch) {
    const obj = { ...item.attributes };
    obj.id = item.id;
    obj.uuid = uuidv4();
    return obj;
  } else {
    return {};
  }
});

const siteMeta = site.map((item) => {
  // console.log(item.attributes);
  const obj = { ...item.attributes };
  obj.id = item.id;
  obj.idUnique = uuidv4();
  return obj;
});

jsonfile.writeFileSync(
  `./assets/json/searchIndex.json`,
  searchIndex,
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);
jsonfile.writeFileSync(`public/siteMeta.json`, siteMeta, function (err) {
  if (err) {
    console.error(err);
  }
});

console.log("searchIndex.json created in /assets/json/");
console.log("siteMeta.json created in ../public/siteMeta.json");
