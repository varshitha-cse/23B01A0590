import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  return (
    <div>
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default NotificationList;