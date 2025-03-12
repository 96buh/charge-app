import "./global.css";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { Stack, router } from "expo-router";

function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true;

    function redirect(notification: Notifications.Notification) {
      const url = notification.request.content.data?.url;
      if (url) {
        router.push(url);
      }
    }

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        redirect(response.notification);
      },
    );

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}

export default function Layout() {
  useNotificationObserver();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F29B75",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{ title: "主頁面" }} />
      <Stack.Screen name="settings/index" options={{ title: "設定" }} />
    </Stack>
  );
}
