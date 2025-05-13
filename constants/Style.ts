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
    backgroundColor: "#fff",
  },
  inputRow: {
    flexDirection: "row", // horizontal layout :contentReference[oaicite:0]{index=0}
    alignItems: "center", // vertically center children :contentReference[oaicite:1]{index=1}
    paddingHorizontal: 16, // gap from screen edges :contentReference[oaicite:2]{index=2}
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
    flex: 1, // fill inputContainer :contentReference[oaicite:8]{index=8}
    minHeight: 40, // ensure visible height :contentReference[oaicite:9]{index=9}
    borderWidth: 1,
    padding: 8, // show placeholder text properly :contentReference[oaicite:10]{index=10}
    includeFontPadding: false, // remove default Android font padding :contentReference[oaicite:11]{index=11}
    textAlignVertical: "top", // align placeholder at top on Android :contentReference[oaicite:12]{index=12}
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
