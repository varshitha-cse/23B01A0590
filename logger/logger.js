const axios = require("axios");
const config = require("./config");

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      `${config.baseURL}/logs`,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${config.accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Log created successfully");
    console.log(response.data);
  } catch (error) {
    console.log("❌ Error creating log");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

module.exports = Log;