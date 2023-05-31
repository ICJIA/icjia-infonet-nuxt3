const fs = require("fs");
const axios = require("axios");

// const { apiBaseURL } = require("./src/config");
// const dirpath = "./public/images";
// if (!fs.existsSync(dirpath)) {
//   fs.mkdirSync(dirpath);
// } else {
//   fs.rm("public/images", { recursive: true }, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log(`./public/images is deleted!`);
//     fs.mkdirSync(dirpath);
//     console.log(`./public/images is created!`);
//   });
// }

const query = `query {
  articles(limit: 100, where: { tags_contains: "infonet" }) {
    _id
    title
    tags
  }
 
}`;

axios
  .create({ baseURL: "https://researchhub.icjia-api.cloud" })
  .post("/graphql", { query, validateStatus: (status) => status === 200 })
  .then((res) => {
    console.log(res.data.data.articles);
  })
  .catch((err) => console.error(err));
