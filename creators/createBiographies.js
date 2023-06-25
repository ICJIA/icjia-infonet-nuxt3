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
const API = "https://agency.icjia-api.cloud";

axios
  .create({ baseURL: API })
  .get("/biographies", {
    validateStatus: (status) => status === 200,
    headers: {
      "Accept-Encoding": "application/json",
    },
  })
  .then((res) => {
    jsonfile.writeFileSync(
      `./public/biographies.json`,
      res.data,
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );

    jsonfile.writeFileSync(
      `./assets/json/biographies.json`,
      res.data,
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );
    console.log("Biographies created");
  });
