import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "@/components/TodoElement";

const STORAGE_KEY = "@my_todos";

export async function loadTodos(): Promise<Todo[] | null> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error("Load failed:", e);
    return null;
  }
}

export async function saveTodos(todos: Todo[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("Save failed:", e);
  }
}
