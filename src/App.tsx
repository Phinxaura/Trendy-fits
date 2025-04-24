import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import {
  requestNotificationPermission,
  onFirebaseMessage,
} from "./firebase"; 

const App: React.FC = () => {
  useEffect(() => {
    requestNotificationPermission();
    onFirebaseMessage();
  }, []);

  return <AppRoutes />;
};

export default App;
