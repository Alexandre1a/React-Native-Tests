import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { TodoContext } from "@/app/context/TodoContext";

export default function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nouvelle tâche"
        value={text}
        onChangeText={setText}
      />
      <Button title="Ajouter" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 16 },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});
