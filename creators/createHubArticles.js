const fs = require("fs");
const axios = require("axios");

const query = `query {
  articles(limit: 200, sort: "date:desc", where: { tags_contains: "infonet" }) {
    _id
    title
    date
    tags
    authors
    abstract
    slug
  }
 
}`;

axios
  .create({ baseURL: "https://researchhub.icjia-api.cloud" })
  .post("/graphql", { query, validateStatus: (status) => status === 200 })
  .then((res) => {
    console.log(res.data.data.articles);
  })
  .catch((err) => console.error(err));
