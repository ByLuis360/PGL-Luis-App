import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Redirect, router } from "expo-router";
import { getDefaultUser, User } from "../../../types/User";
import ToastManager, { Toast } from "toastify-react-native";
import LoginService from "../../../service/loginService";

export const loginPage = () => {
  const [currentUser, setCurrentUser] = useState<User>(getDefaultUser());

  const inputChange = (name: string, value: string) => {
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    if (
      !currentUser.email.includes("@") ||
      (!currentUser.email.endsWith(".com") &&
        !currentUser.email.endsWith(".net"))
    ) {
      Toast.error("The email format is not correct");
    } else if (currentUser.pswd.length < 8) {
      Toast.error("The password format is no correct");
    } else {
      const token = await LoginService.loginUser(currentUser);
      console.log(token);
      if (token != null) {
        router.navigate("/(drawer)/welcome");
        setCurrentUser(getDefaultUser());
      } else {
        Toast.error("This user doesn't exist");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLoginBox}>
        <View>
          <ToastManager position="bottom" />
          <Text style={styles.title}>Inicia Sesión</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={currentUser.email}
            onChangeText={(text) => inputChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
            value={currentUser.pswd}
            onChangeText={(text) => inputChange("pswd", text)}
          />
          <Button title="Iniciar sesión" onPress={() => handleLogin()} />
        </View>
        <View style={styles.registerBox}>
          <Text>¿No te has registrado?</Text>
          <Button
            title="Registrarse"
            onPress={() => router.navigate("/user/login_register")}
          />
        </View>
      </View>
    </View>
  );
};

export default loginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ADD8E6",
    height: "100%",
  },
  containerLoginBox: {
    margin: "auto",
    backgroundColor: "lightgrey",
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
  registerBox: {
    marginTop: 30,
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingTop: 20,
  },
});
