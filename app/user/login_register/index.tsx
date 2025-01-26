import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Redirect, router } from "expo-router";
import { getDefaultUser, User } from "../../../types/User";
import ToastManager, { Toast } from "toastify-react-native";
import LoginService from "../../../service/loginService";

export const registerPage = () => {
  const [currentUser, setCurrentUser] = useState<User>(getDefaultUser());

  const inputChange = (name: string, value: string) => {
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    if (
      !currentUser.email.includes("@") ||
      (!currentUser.email.endsWith(".com") &&
        !currentUser.email.endsWith(".net"))
    ) {
      Toast.error("The email format is not correct");
    } else if (currentUser.pswd.length < 8) {
      Toast.error("The password format is no correct");
    } else {
      const token = await LoginService.registerUser(currentUser); 
      if (token != null) {
        router.navigate("/user/login");
      } else {
        Toast.error("The user exist");
      }
    }
  };

  return (
    <View style={styles.container}>
      <ToastManager position="top" />
      <View style={styles.containerLoginBox}>
        <View>
          <Text style={styles.title}>Registrate</Text>
          <TextInput
            style={styles.input}
            placeholder="User"
            value={currentUser.fullname}
            onChangeText={(text) => inputChange("fullname", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={currentUser.email}
            onChangeText={(text) => inputChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            value={currentUser.pswd}
            secureTextEntry={true}
            onChangeText={(text) => inputChange("pswd", text)}
          />
          <Button title="Registrarse" onPress={() => handleRegister()} />
        </View>
      </View>
    </View>
  );
};

export default registerPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ADD8E6",
    height: "100%",
  },
  containerLoginBox: {
    margin: "auto",
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 3,
    padding: 40,
    borderRadius: 20,
    width: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 40,
    fontWeight: 600,
  },
  input: {
    backgroundColor: "#87cefa80",
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
  },
});
