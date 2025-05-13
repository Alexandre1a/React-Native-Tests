// Normal Imports
import { View, TextInput, FlatList } from "react-native";
import { useState, useContext, useEffect } from "react";

// Expo Imports
import * as Crypto from "expo-crypto";

// Custom Modules Imports
import Button from "@/components/Button";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
import { styles } from "@/constants/Style";
import { loadTodos, saveTodos } from "@/utils/storage";
import TodoElement, { Todo } from "@/components/TodoElement";
// import { Background } from "@react-navigation/elements";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // Load todos on launch
  useEffect(() => {
    (async () => {
      const stored = await loadTodos();
      if (stored) setTodos(stored);
    })();
  }, []);

  // Persist on change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Crypto.randomUUID(), // Expo’s built-in UUID :contentReference[oaicite:1]{index=1}
      title: input.trim(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setInput("");
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View
      style={[styles.todoContainer, { backgroundColor: colors.background }]}
    >
      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <TextInput
            //maxLength={30}
            style={styles.input}
            placeholder="New task"
            multiline
            value={input}
            onChangeText={setInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button label="Add" onPress={addTodo} />
        </View>
      </View>
      r
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoElement todo={item} onDelete={deleteTodo} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
