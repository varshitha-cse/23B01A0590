import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationList from "../components/NotificationList";
import { Typography } from "@mui/material";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <NotificationList notifications={notifications} />
    </div>
  );
}

export default AllNotifications;