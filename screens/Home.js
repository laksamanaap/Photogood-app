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
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSearchContainer}>
        <AntDesign name="search1" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.inputSearch}
          placeholder="Temukan Lebih Banyak"
        />
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.category}>
          <MaterialCommunityIcon name="file-gif-box" size={20} color="#888" />
          <Text>GIF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <MaterialIcon name="photo-camera" size={20} color="#888" />
          <Text>Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <FontAwesome name="paint-brush" size={20} color="#888" />
          <Text>Vector</Text>
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 35,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
  inputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    height: 40,
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  inputSearch: {
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
  },
  icon: {
    marginRight: 10,
  },
});

export default Home;
