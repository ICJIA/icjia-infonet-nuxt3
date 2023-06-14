/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");
const yaml = require("yaml");
const contentDir = path.join(__dirname, "../content");
const SITE_URL = process.env.NUXT_PUBLIC_BASE_URL;
const API = process.env.NUXT_PUBLIC_API_BASE_URL;

function formatMarkdown(content) {
  const { body } = content;
  delete content.body;
  return `---\n${yaml.stringify(content)}---\n\n${body}\n`;
}

axios
  .create({ baseURL: API })
  .get("/api/faqs", {
    validateStatus: (status) => status === 200,
    headers: {
      "Accept-Encoding": "application/json",
    },
  })
  .then((res) => {
    const raw = res.data.data;
    const faqs = raw.map((item) => {
      const obj = { ...item };
      let rawText;

      rawText = obj.attributes?.answer
        ?.replace(/<[^>]*>?/gm, "")
        .replace(/[^a-z0-9]/gi, " ");
      rawText = rawText.replace(/\s\s+/g, " ");
      obj.attributes.rawText = rawText.toLowerCase();
      obj.attributes.draft = false;
      obj.attributes.title = obj.attributes.question;
      obj.attributes.body = obj.attributes.answer;
      obj.attributes.path = `/faqs/${item.attributes.slug}`;
      obj.attributes.url = `${SITE_URL}${obj.attributes.path}`;

      if (item.attributes.searchMeta) {
        obj.attributes.searchMeta = "faq " + item.attributes.searchMeta;
      } else {
        obj.attributes.searchMeta = "faq  ";
      }
      console.log("Markdown faq created: ", obj.attributes.path);
      return obj;
    });

    jsonfile.writeFileSync(`./public/faqs.json`, faqs, function (err) {
      if (err) {
        console.error(err);
      }
      console.log("faqs.json created in /public/");
    });

    const faqRoutes = faqs.map((item) => {
      return `/faqs/${item.attributes.slug}`;
    });

    jsonfile.writeFileSync(
      `./public/routesFaqs.json`,
      faqRoutes,
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );
    let section;
    faqs.forEach((item) => {
      section = "faqs";

      const basename = item.attributes.slug;
      const filePath = path.join(contentDir, `${section}/${basename}.md`);
      const directoryPath = path.join(contentDir, `${section}`);
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }

      const content = formatMarkdown(item.attributes);
      // console.log(content);
      fs.writeFileSync(filePath, content);
    });

    //console.log(faqs);
  });
