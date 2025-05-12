import { View, Text, Switch, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
import { styles } from "@/constants/Style";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.label, { color: colors.label }]}>
        {theme === "dark" ? "Dark" : "Light"} theme
      </Text>
      <Switch
        value={theme === "dark"}
        onValueChange={toggleTheme}
        thumbColor={colors.accent}
        trackColor={{ false: "#aaa", true: "#555" }}
      />
    </View>
  );
}
