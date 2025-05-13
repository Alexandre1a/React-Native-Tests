import { View, Text } from "react-native";
import { useContext, React } from "react";
import Button from "@/components/Button";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
import { styles } from "@/constants/Style";

export type Todo = {
  id: string;
  title: string;
};

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoElement({ todo, onDelete }: Props) {
  const { theme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);
  return (
    <View style={styles.row}>
      <Text style={[styles.title, { color: colors.label }]}>{todo.title}</Text>
      <Button label="Delete" onPress={() => onDelete(todo.id)} />
    </View>
  );
}
