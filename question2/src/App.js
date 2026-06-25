import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ padding: 3 }}>
      <Tabs
        value={tab}
        onChange={(event, newValue) => setTab(newValue)}
        centered
      >
        <Tab label="All Notifications" />
        <Tab label="Priority Notifications" />
      </Tabs>

      <Box sx={{ marginTop: 3 }}>
        {tab === 0 ? (
          <AllNotifications />
        ) : (
          <PriorityNotifications />
        )}
      </Box>
    </Box>
  );
}

export default App;