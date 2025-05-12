import React, { createContext, useState, useEffect, ReactNode } from "react";
import { loadTodos, saveTodos } from "@/utils/storage";

interface TodoContextProps {
  todos: string[];
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const stored = await loadTodos();
      setTodos(stored);
    })();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => setTodos((prev) => [...prev, text]);
  const removeTodo = (i: number) =>
    setTodos((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
