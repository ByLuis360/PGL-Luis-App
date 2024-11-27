import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LIGHT_COLOR } from "../../components/colors";

export const welcomePage = () => {
  return (
    <>
      <View>
        <Text style={styles.title}> Bienvenido a mi app </Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/dragonBallZ.jpg")}
          style={styles.images}
        />
      </View>
      <View style={styles.containerButton}>
        <Link href={"/profile"} style={styles.button}>
          Navegar
        </Link>
        <Link href={"/todo"} style={styles.button}>
          To Do
        </Link>
      </View>
    </>
  );
};

export default welcomePage;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 0,
    padding: 20,
    backgroundColor: LIGHT_COLOR.titleWelcome,
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
