import { Tabs } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const AppLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        <Drawer.Screen name="welcome/index" 
        options={{
          drawerLabel: "Home",
          title: "welcome to the page"
        }}/>
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
