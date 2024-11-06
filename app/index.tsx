import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";

export const index = () => {
  return <Redirect href="/welocme" />;
};

export default index;

const styles = StyleSheet.create({});
