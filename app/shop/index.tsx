import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import { Redirect } from "expo-router";

export const ShopPage = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [taskValue, setTaskValue] = useState<string /* TaskItem */>("");
  const addNewItem = () => {
    setIsModalVisible(false);
    // const newTaskItem: TaskItem = {
    // id: uuid.v4,
    // task: taskValue
    // }
    setToDoList([...toDoList, taskValue]);
    setTaskValue("");
  };

  const deleteItme = (id: string) => {
    const newToDoList = toDoList.filter((item) => item.id != id)
    setToDoList(newToDoList)
    console.log(id)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {toDoList.map((item) => (
          <View>
          <Text key={item.id}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <Button
        title="abrir modal"
        onPress={() => setIsModalVisible(true)}
      ></Button>
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <Text> Introduce una nueva tarea: </Text>
          <TextInput />
          <Button
            title="close"
            onPress={() => setIsModalVisible(false)}
          ></Button>
        </View>
      </Modal>
    </View>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modalContainer: {
    justifyContent: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    backgroundColor: "purple",
    width: "50%",
    height: "50%",
  },
});
