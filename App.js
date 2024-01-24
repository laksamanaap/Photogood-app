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
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AuthNavigator from "./routes/authStack";
import ClientNavigator from "./routes/indexStack";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <AuthNavigator></AuthNavigator>;
}
