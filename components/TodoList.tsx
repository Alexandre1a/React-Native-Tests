import React, { useContext } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { TodoContext } from "@/app/context/TodoContext";
import TodoItem from "@/components/TodoItem";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  if (!todos.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Aucune tâche</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={(_, i) => String(i)}
      renderItem={({ item, index }) => <TodoItem text={item} index={index} />}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
