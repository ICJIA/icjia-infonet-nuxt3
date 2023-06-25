/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const moment = require("moment");
const jsonfile = require("jsonfile");
const _ = require("lodash");
const yaml = require("yaml");
const contentDir = path.join(__dirname, "../content");
const SITE_URL = process.env.NUXT_PUBLIC_BASE_URL;
const API = process.env.NUXT_PUBLIC_API_BASE_URL;

const query = `query {
   tabs {
    data {
      id
      attributes {
        title
        slug
        agency
        summary
        body
        sectionID
        page {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
        images {
          data {
            id
            attributes {
              name
              alternativeText
              caption
              width
              height
              formats
              hash
              ext
              url
              previewUrl
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
  }`;

function formatMarkdown(content) {
  const { body } = content;
  delete content.body;
  return `---\n${yaml.stringify(content)}---\n\n${body}\n`;
}

axios
  .create({ baseURL: API })
  .post("/graphql", {
    query,
    validateStatus: (status) => status === 200,
    headers: {
      "Accept-Encoding": "application/json",
    },
  })
  .then((res) => {
    const tabs = res.data.data.tabs.data;
    let section;
    const site = tabs.map((tab) => {
      let obj = { ...tab };

      obj.attributes.path = `/tabs/${obj.attributes.sectionID}/${obj.attributes.slug}`;
      //console.log("Markdown tabs content created: ", obj.attributes.path);
      return obj;
    });
    jsonfile.writeFileSync(`./public/tabs.json`, site, function (err) {
      if (err) {
        console.error(err);
      }
    });

    jsonfile.writeFileSync(`./assets/json/tabs.json`, site, function (err) {
      if (err) {
        console.error(err);
      }
    });
    console.log("tabs.json created in /assets/json/");
  });
