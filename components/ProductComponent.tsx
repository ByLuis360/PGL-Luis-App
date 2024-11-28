import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import { Product } from "../types/Product";
import Entypo from "@expo/vector-icons/Entypo";

export type ProductProp = {
  product: Product;
  deleteProduct: Function;
  editProduct: Function;
  addInCar: Function;
};

const ProductComponent = ({
  product,
  deleteProduct,
  editProduct,
  addInCar,
}: ProductProp) => {
  const getImageFromCategory = () => {
    switch (product.category) {
      case "Carnicería":
        return require("../assets/images/carne.jpeg");
      case "Frutería":
        return require("../assets/images/fruta.jpeg");
      case "Panadería":
        return require("../assets/images/pan.jpeg");
      case "Bebidas":
        return require("../assets/images/bebidas.jpeg");
      case "Pescadería":
        return require("../assets/images/pescado.jpeg");
      case "Enlatados":
        return require("../assets/images/enlatados.jpeg");
      default:
        return require("../assets/images/otros.jpeg");
    }
  };
  return (
    <ScrollView style={styles.listProducts}>
      <View style={styles.container}>
        <Image source={getImageFromCategory()} style={styles.image}></Image>
        <Text>Nombre del producto: {product.name}</Text>
        <Text>Categoría del producto: {product.category}</Text>
        <Text>Cantidad del producto: {product.quantity}</Text>
        <Text>Precio del producto: {product.price} €</Text>
        <Text>
          Esta en el carrito:{" "}
          {product.isInCar == true ? (
            <Entypo name="check" size={24} color="green" />
          ) : (
            <Entypo name="cross" size={24} color="red" />
          )}
        </Text>
        <View style={styles.productsController}>
          <Entypo
            name="edit"
            size={40}
            color="dark"
            onPress={() => editProduct()}
          />
          <Entypo
            name="plus"
            size={40}
            color="red"
            onPress={() => addInCar()}
          />
          <Entypo
            name="minus"
            size={40}
            color="red"
            onPress={() => addInCar()}
          />
          <Entypo
            name="trash"
            size={40}
            color="grey"
            onPress={() => deleteProduct()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  listProducts: {
    display: "flex",
    paddingTop: 40,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  productsController: {
    padding: 5,
    flexDirection: "row",
    gap: 5,
  },
  container: {
    backgroundColor: "cyan",
    padding: 10,
    borderColor: "black",
    borderWidth: 2
  }
});
