import React from 'react'
import { Image, StyleSheet ,Text, View } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Image
        style={styles.avatar}
        source={require("../assets/images/Luis.jpg")}
      ></Image>
      <View style={styles.paragraphContainer}>
        <Text style={styles.title}>Descripción sobre mí!</Text>
        <Text>
          Soy un alumno un poco bastante vago pero que le gusta lo que hace y sobretodo y
          más importante, soy del Barça xddd
        </Text>
      </View>
    </View>
  );
  }

export default Header

const styles = StyleSheet.create({
  avatar: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  paragraphContainer: {
    margin: 10,
    marginBottom: 60,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
