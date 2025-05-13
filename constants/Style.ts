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
    padding: 16,
    margin: 2,
  },
  label: {
    color: colors.label,
  },
  inputRow: {
    flexDirection: "row", // horizontal layout :contentReference[oaicite:0]{index=0}
    alignItems: "center", // vertical centering of children :contentReference[oaicite:1]{index=1}
    paddingHorizontal: 16, // gap on left and right :contentReference[oaicite:2]{index=2}
    marginBottom: 12,
  },
  inputContainer: {
    flex: 7, // takes 70% of the row :contentReference[oaicite:3]{index=3}
    marginRight: 8, // small gap between input & button :contentReference[oaicite:4]{index=4}
  },
  buttonContainer: {
    flex: 3, // takes remaining 30% :contentReference[oaicite:5]{index=5}
    justifyContent: "center", // center button vertically :contentReference[oaicite:6]{index=6}
    alignItems: "center", // center button horizontally :contentReference[oaicite:7]{index=7}
  },
  input: {
    flex: 1, // fill its container :contentReference[oaicite:8]{index=8}
    borderWidth: 1,
    padding: 8, // ensures placeholder is visible :contentReference[oaicite:9]{index=9}
    textAlignVertical: "top", // multiline placeholder alignment on Android :contentReference[oaicite:10]{index=10}
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
});
