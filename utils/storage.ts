import AsyncStorage from "@react-native-async-storage/async-storage";

const TODO_KEY = "@todo_list";

export async function loadTodos(): Promise<string[]> {
  try {
    const json = await AsyncStorage.getItem(TODO_KEY);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}

export async function saveTodos(todos: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("Failed to save todos", e);
  }
}
