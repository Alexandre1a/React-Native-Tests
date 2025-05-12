import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TodoContext } from "@/app/context/TodoContext";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  const { removeTodo } = useContext(TodoContext);
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => removeTodo(index)}>
        <Ionicons name="trash-outline" size={24} color="#d11a2a" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  text: { fontSize: 16 },
});
