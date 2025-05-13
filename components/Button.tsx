import { View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
import { styles } from "@/constants/Style";

type Props = {
  label: string;
  button_theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, button_theme, onPress }: Props) {
  const { theme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);
  if (button_theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: colors.accent,
            borderRadius: 18,
          },
        ]}
      >
        <Pressable
          style={[
            styles.button,
            { backgroundColor: colors.background_inverted },
          ]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            style={[styles.buttonIcon, { color: colors.primary }]}
          />
          <Text style={[styles.buttonLabel, { color: colors.label_inverted }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonLabel, { color: colors.label }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}
