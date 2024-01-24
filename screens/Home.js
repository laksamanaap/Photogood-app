import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Button,
} from "react-native";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Detail");
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="goto detail page" onPress={pressHandler} />
    </View>
  );
};

export default Home;
