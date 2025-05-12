import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}

function InnerLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme === "dark" ? "#000" : "#fff" },
          headerTintColor: theme === "dark" ? "#fff" : "#000",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </>
  );
}
