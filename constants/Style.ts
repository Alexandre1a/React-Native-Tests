import { StyleSheet } from "react-native";
import { getThemeColors } from "@/constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const { theme } = useContext(ThemeContext);
const colors = getThemeColors(theme);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.text,
  },
  button: {
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
