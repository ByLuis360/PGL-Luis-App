import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { initialProducts } from "../../data/initial-products";
import ProductComponent from "../../components/ProductComponent";
import { getDefaultProduct, Product } from "../../types/Product";
import uuid from "react-native-uuid";

export const ShopPage = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [currentProduct, setCurrentProduct] = useState<Product>(
    getDefaultProduct()
  );
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  const addNewProduct = () => {
    if (
      !currentProduct.name ||
      !currentProduct.category ||
      !currentProduct.price ||
      !currentProduct.quantity
    ) {
      Alert.alert("Faltan campos por rellenar");
      return;
    }

    if (productToEdit) {
      setProductList(
        productList.map((product) =>
          product.id == productToEdit.id
            ? { ...productToEdit, ...currentProduct }
            : product
        )
      );
    } else {
      const newProduct: Product = {
        ...currentProduct,
        id: uuid.v4().toString(),
      };
      setProductList([...productList, newProduct]);
    }

    setIsModalVisible(false);
    // const newTaskItem: TaskItem = {
    // id: uuid.v4,
    // task: taskValue
    // }
    setCurrentProduct(getDefaultProduct);
    setProductToEdit(null);
  };

  const inputChange = (name: string, value: string) => {
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };

  const addInCar = (product: Product) => {
    const totalValue = product.price * product.quantity
    setTotalPrice(totalPrice + totalValue)
    product.isInCar = true
  };

  const quitOutFromCar = (product: Product) => {
    if (product.isInCar == true) {
      const totalValue = product.price * product.quantity
      setTotalPrice(totalPrice - totalValue)
      product.isInCar = false
    }
  } 

  const deleteProduct = (id: string) => {
    setProductList(productList.filter((item) => item.id != id));
  };

  const deleteAllProducts = () => {
    setProductList([])
  }

  const editProduct = (product: Product) => {
    /*  setNewProduct({
      name: product.name,
      category: product.category,
      quantity: product.quantity,
      price: product.price,
    }); */
    setProductToEdit(product);
    setCurrentProduct({ ...product });
    setIsModalVisible(true);
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
          <ProductComponent
            key={product.id}
            product={product}
            deleteProduct={() => deleteProduct(product.id)}
            editProduct={() => editProduct(product)}
            addInCar={() => addInCar(product)}
            quitOutFromCar={() => quitOutFromCar(product)}
          />
        ))}
      </ScrollView>
      <View style={styles.buttons}>
      <Button
        title="añadir producto"
        onPress={() => setIsModalVisible(true)}
      ></Button>
      <Button
        title="Eliminar productos"
        onPress={() => deleteAllProducts()}
      ></Button>
      </View>
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <Text>
            {" "}
            {productToEdit ? "Editar producto" : "Introduce un nuevo producto"}
          </Text>
          <TextInput
            placeholder="nombre del producto"
            value={currentProduct.name}
            onChangeText={(text) => inputChange("name", text)}
          />
          <TextInput
            value={currentProduct.category}
            onChangeText={(text) => inputChange("category", text)}
            placeholder="categoría del producto"
          />
          <TextInput
            keyboardType="numeric"
            value={currentProduct.quantity.toString()}
            onChangeText={(text) => inputChange("quantity", text)}
          />
          <TextInput
            value={currentProduct.price.toString()}
            keyboardType="numeric"
            onChangeText={(text) => inputChange("price", text)}
          />

          <Button
            title={productToEdit ? "Actualizar" : "Guardar"}
            onPress={() => addNewProduct()}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ShopPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "yellow"
  },
  modalContainer: {
    justifyContent: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    backgroundColor: "#E0E0E0",
    marginTop: 200,
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
  buttons: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    gap: 20,
  }
});
