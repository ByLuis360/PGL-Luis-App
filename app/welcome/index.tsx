import { Link } from 'expo-router'
  import React from 'react'
  import {Image, Pressable, StyleSheet ,Text, View } from 'react-native'

  export const welcomePage = () => {
      return (
        <>
          <View>
          <Text> Bienvenido a mi app </Text>
          </View>
          <View style={styles.container}>
          <Image source={require("../../assets/images/dragonBallZ.jpg")} style={styles.images}/>
          </View>
          <View style={styles.containerButton}>
            <Link href={"./profile"}>Navegar</Link>
          </View>
          </>
      )
  }

  export default welcomePage

  const styles = StyleSheet.create({
  images: {
    borderRadius: 500,
    width: 300,
    height:300
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    marginBottom: 50,
    backgroundColor: "blue"
  },
  containerButton: {
    alignItems: "center"
  }
});
