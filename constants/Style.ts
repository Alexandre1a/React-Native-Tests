import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const colors = Colors.dark;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.text,
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
