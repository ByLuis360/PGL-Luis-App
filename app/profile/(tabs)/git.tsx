import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet ,Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'


export const gitPage = () => {
    return (
        <View style={styles.qrContainer}>
              <Text style={{ backgroundColor: "white" }}>
                My repository
              </Text>
              <QRCode
                value="https://github.com/ByLuis360"
                logo={require("../../../assets/images/mondongo.jpg")}
                logoSize={10}
                logoBackgroundColor="transparent"
              />
            </View>
      )
}

export default gitPage

const styles = StyleSheet.create({
    qrContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        marginTop: 12,
      },
})