import { Stack, router } from "expo-router";
import * as Notification from "expo-notifications";
import { NotificationProvider } from "@/context/NotificationContext";
import { Tabs } from "expo-router";

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Layout() {
  return (
    <NotificationProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Optionally configure static options outside the route.*/}
      </Stack>
    </NotificationProvider>
  );
}
