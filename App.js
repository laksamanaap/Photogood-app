import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "cover",
            marginBottom: 45,
          }}
          source={require("./assets/icon/logo2.png")}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            Daftar
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.OAuthDesc}>Atau masuk menggunakan</Text>
        </View>
        <View style={styles.OAuthContainer}>
          <TouchableOpacity style={styles.OAuthButton}>
            <AntDesign
              name="google"
              style={{ color: "#A9329D", fontSize: 20 }}
            />
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.OAuthContainer}>
          <TouchableOpacity style={styles.OAuthButton}>
            <AntDesign
              name="facebook-square"
              style={{ color: "#A9329D", fontSize: 20 }}
            />
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.OAuthDesc}>Sudah punya akun? Login</Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    marginBottom: 10,
    color: "#333",
  },
  input: {
    backgroundColor: "#D9D9D9",
    height: 40,
    width: "100%",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    marginBottom: 25,
    padding: 10,
    borderRadius: 50,
  },
  button: {
    width: "100%",
    backgroundColor: "#A9329D",
    padding: 10,
    borderRadius: 50,
  },
  OAuthContainer: {
    width: "100%",
    marginBottom: 18,
  },
  OAuthDesc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    color: "#6B6B6B",
  },
  OAuthButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#F9F9F9",
    gap: 8,
    padding: 10,
    borderRadius: 50,
  },
});
