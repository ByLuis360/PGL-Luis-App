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
      const token = await LoginService.registerUser(currentUser);
      console.log(token);
      if (token != null) {
        router.navigate("/user/login");
      } else {
        Toast.error("The user exist");
      }
    }
  };

  return (
    <>
      <View>
        <View>
          <ToastManager position="bottom" />
          <Text>Inicia Sesión</Text>
          <Text>User</Text>
          <TextInput
            value={currentUser.fullname}
            onChangeText={(text) => inputChange("fullname", text)}
          />
          <Text>Email</Text>
          <TextInput
            value={currentUser.email}
            onChangeText={(text) => inputChange("email", text)}
          />
          <Text>password</Text>
          <TextInput
            value={currentUser.pswd}
            secureTextEntry={true}
            onChangeText={(text) => inputChange("pswd", text)}
          />
          <Button title="Registrarse" onPress={() => handleLogin()} />
        </View>
      </View>
    </>
  );
};

export default registerPage;

const styles = StyleSheet.create({});
