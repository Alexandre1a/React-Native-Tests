import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";

export default function TabLayout() {
  const { theme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
        headerTintColor: colors.label,
        tabBarStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "ToDo",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
