// Normal Imports
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Expo Imports
import * as Crypto from "expo-crypto";

// Custom Modules Imports
import Button from "@/components/Button";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
// import { styles } from "@/constants/Style";
import { loadTodos, saveTodos } from "@/utils/storage";
import TodoElement, { Todo } from "@/components/TodoElement";
// import { Background } from "@react-navigation/elements";

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = async () => {
    if (!input.trim()) return;
    const id = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      Date.now().toString(),
    );
    setTodos([{ id, title: input }, ...todos]);
    setInput("");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="New task"
                value={input}
                onChangeText={setInput}
                multiline
                style={styles.input}
                placeholderTextColor="#888"
                textAlignVertical="top"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button label="Add" onPress={addTodo} />
            </View>
          </View>

          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TodoElement todo={item} onDelete={deleteTodo} />
            )}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  inputContainer: {
    flex: 7,
    marginRight: 8,
  },
  input: {
    flex: 1,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
