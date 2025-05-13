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
  todoContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8, // small extra gap below header :contentReference[oaicite:2]{index=2}
  },
  label: {
    color: colors.label,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inputRow: {
    flexDirection: "row", // horizontal layout :contentReference[oaicite:0]{index=0}
    alignItems: "baseline", // vertically center children :contentReference[oaicite:1]{index=1}
    marginBottom: 12,
  },
  inputContainer: {
    flex: 7, // 70% width :contentReference[oaicite:3]{index=3}
    marginRight: 8, // gap before button :contentReference[oaicite:4]{index=4}
  },
  buttonContainer: {
    flex: 3, // 30% width :contentReference[oaicite:5]{index=5}
    justifyContent: "center", // vertical centering :contentReference[oaicite:6]{index=6}
    alignItems: "center", // horizontal centering :contentReference[oaicite:7]{index=7}
  },
  input: {
    flex: 7,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  list: {
    paddingTop: 8,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: colors.label,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.accent,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    marginRight: 8,
  },
});
