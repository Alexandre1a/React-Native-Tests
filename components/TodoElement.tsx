import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export type Todo = {
  id: string;
  title: string;
};

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoElement({ todo, onDelete }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{todo.title}</Text>
      <Button title="Delete" onPress={() => onDelete(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    marginRight: 8,
  },
});
