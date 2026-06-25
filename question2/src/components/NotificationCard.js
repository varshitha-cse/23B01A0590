import { Card, CardContent, Typography, Chip } from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography variant="body1">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          {notification.Timestamp}
        </Typography>

        <Chip
          label={notification.Type}
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </CardContent>
    </Card>
  );
}

export default NotificationCard;