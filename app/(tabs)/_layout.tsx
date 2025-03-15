import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "darkblue",
        // tabBarInactiveTintColor: "",
        // tabBarPosition: "left",
        // tabBarLabelStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "主頁面",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="stat"
        options={{
          title: "統計資訊",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bar-chart" color={color} />
          ),
          headerShown: false, // 不要顯示title在topbar
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "設定",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerShown: false, // 不要顯示title在topbar
        }}
      />
    </Tabs>
  );
}
