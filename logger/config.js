require("dotenv").config();

module.exports = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  baseURL: "http://4.224.186.213/evaluation-service"
};