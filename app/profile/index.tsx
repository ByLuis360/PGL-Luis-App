import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export const profilePage = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default profilePage;

const styles = StyleSheet.create({});
