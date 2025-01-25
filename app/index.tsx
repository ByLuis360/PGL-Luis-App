import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { asyncStorageService } from "../service/async-storage-service";

export const index = () => {
  /*   useEffect(() => {
    const checkLogin = async () => {
      const userToken = await asyncStorageService.get(
        asyncStorageService.KEYS.userToken
      );
      if (userToken == null) {
        router.navigate("/user/login");
      } else {
        router.navigate("/(drawer)/welcome");
      }
    };

    checkLogin();
  }, []); */

  return <Redirect href={"/(drawer)/welcome"} />;
  // router.navigate("/welcome/index")
  // router.navigate("/login/index")

  /*   */
};

export default index;

const styles = StyleSheet.create({});
