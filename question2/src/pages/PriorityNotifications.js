import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationList from "../components/NotificationList";
import { Typography } from "@mui/material";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadPriorityNotifications();
  }, []);

  const loadPriorityNotifications = async () => {
    try {
      const data = await getNotifications(1, 10);
      setNotifications(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      <NotificationList notifications={notifications} />
    </div>
  );
}

export default PriorityNotifications;