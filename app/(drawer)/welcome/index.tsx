import { Link } from "expo-router";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { LIGHT_COLOR } from "../../../components/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { asyncStorageService } from "../../../service/async-storage-service";

export const welcomePage = () => {
  const handleLogOut = async () => {
    await asyncStorageService.remove(asyncStorageService.KEYS.userToken);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}> Bienvenido a mi app </Text>
        <Link
          href={"/user/login"}
          style={styles.buttonHeader}
          onPress={() => handleLogOut()}
        >
          Cerrar sesión
        </Link>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/dragonBallZ.jpg")}
          style={styles.images}
        />
      </View>
      {/* <View style={styles.containerButton}>
        <Link href={"/profile"} style={styles.button}>
          Navegar
        </Link>
        <Link href={"/todo"} style={styles.button}>
          Store
        </Link>
        <Link href={"/dogs"} style={styles.button}>
          Dogs
        </Link>
      </View> */}
    </>
  );
};

export default welcomePage;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: LIGHT_COLOR.titleWelcome,
    justifyContent: "space-around",
  },
  buttonHeader: {
    padding: 10,
    alignSelf: "center",
    backgroundColor: "lightblue",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 0,
    padding: 20,
  },
  images: {
    borderRadius: 500,
    width: 300,
    height: 300,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 300,
    paddingTop: 15,
    height: 50,
    marginBottom: 80,
    backgroundColor: LIGHT_COLOR.buttonWelcome,
    textAlign: "center",
    marginTop: 20,
  },
  containerButton: {
    alignItems: "center",
  },
});
