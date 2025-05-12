// Normal Imports
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

// Expo Imports
import { Link } from "expo-router";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

// Custom Modules Imports
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { styles } from "@/constants/Style";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

/*
const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
*/
