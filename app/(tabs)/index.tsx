// Normal Imports
import { View, Text, SafeAreaView } from "react-native";
import { useState, useContext } from "react";

// Expo Imports
import * as ImagePicker from "expo-image-picker";

// Custom Modules Imports
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { ThemeContext } from "@/app/context/ThemeContext";
import { getThemeColors } from "@/constants/Colors";
import { TodoProvider } from "@/app/context/TodoContext";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { styles } from "@/constants/Style";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function App() {
  const { theme } = useContext(ThemeContext);
  const colors = getThemeColors(theme);
  return (
    <TodoProvider>
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <AddTodo />
        <TodoList />
      </SafeAreaView>
    </TodoProvider>
  );
}
