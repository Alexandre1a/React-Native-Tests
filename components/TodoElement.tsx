import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoElement({ todo, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{todo.title}</Text>
      <Button title="Delete" onPress={() => onDelete(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexWrap: "wrap",
  },
  text: { fontSize: 16 },
});
