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
import AntDesign from "@expo/vector-icons/AntDesign";
import { initialProducts } from "../../data/initial-products";
import ProductComponent, { ProductProp } from "../../components/Product";
import { getDefaultProduct, Product } from "../../types/Product";
import uuid from "react-native-uuid";

export const ShopPage = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [currentProduct, setCurrentProduct] = useState<Product>(
    getDefaultProduct()
  );

  const addNewProduct = () => {
    setIsModalVisible(false);
    // const newTaskItem: TaskItem = {
    // id: uuid.v4,
    // task: taskValue
    // }
    currentProduct.id = uuid.v4();
    setProductList([...productList, currentProduct]);
    setCurrentProduct(getDefaultProduct());
  };

  const inputChange = (name: string, value: string) => {
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };

  const deleteProduct = (id: string) => {
    setProductList(productList.filter((item) => item.id != id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Mi tienda</Text>
        <Text style={styles.text}>
          <AntDesign name="shoppingcart" size={24} color="white" />
          <Text> {totalPrice} €</Text>
        </Text>
      </View>
      <ScrollView>
        {productList.map((product: Product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </ScrollView>
      <Button
        title="añadir producto"
        onPress={() => setIsModalVisible(true)}
      ></Button>
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <Text> Introduce un nuevo producto </Text>
          <TextInput
            placeholder="nombre del producto"
            value={currentProduct.name}
            onChangeText={(text) => inputChange("name", text)}
          />
          <TextInput
            placeholder="categoria del producto"
            value={currentProduct.category}
            onChangeText={(text) => inputChange("category", text)}
          />
          <TextInput
            placeholder="cantidad del producto"
            keyboardType="numeric"
            value={currentProduct.quantity}
            onChangeText={(text) => inputChange("quantity", text)}
          />
          <TextInput
            placeholder="precio del producto"
            value={currentProduct.price}
            onChangeText={(text) => inputChange("price", text)}
          />

          <Button title="añadir" onPress={() => addNewProduct()}></Button>
        </View>
      </Modal>
    </View>
  );
};

export default ShopPage;

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
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 30,
    paddingRight: 50,
    alignContent: "center",
    gap: 200,
    backgroundColor: "red",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
