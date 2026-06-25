const axios = require("axios");
const Log = require("../logger/logger");
const config = require("../logger/config");

const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function getNotifications() {
  try {
    await Log(
      "backend",
      "info",
      "handler",
      "Fetching notifications"
    );

    const response = await axios.get(
      `${config.baseURL}/notifications`,
      {
        headers: {
          Authorization: `Bearer ${config.accessToken}`
        }
      }
    );

    const notifications = response.data.notifications;

    notifications.sort((a, b) => {
      if (PRIORITY[b.Type] !== PRIORITY[a.Type]) {
        return PRIORITY[b.Type] - PRIORITY[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const top10 = notifications.slice(0, 10);

    console.log("\n========== TOP 10 PRIORITY NOTIFICATIONS ==========\n");

    top10.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.Type} | ${item.Message} | ${item.Timestamp}`
      );
    });

    await Log(
      "backend",
      "info",
      "handler",
      "Displayed Top 10 notifications"
    );

  } catch (error) {

    console.log(error.response?.data || error.message);

    await Log(
      "backend",
      "error",
      "handler",
      "Failed to fetch notifications"
    );
  }
}

getNotifications();