import { Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
import { styles } from "@/constants/Style";

export default function AboutScreen() {
  const { theme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.label, { color: colors.label }]}>About screen</Text>
    </View>
  );
}
