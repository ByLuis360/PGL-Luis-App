import { Text, ScrollView, Image } from "react-native";
import { Product } from "../types/Product";

export type ProductProp = {
  product: Product;
};

const ProductComponent = ({ product }: ProductProp) => {
  const getImageFromCategory = () => {
    switch (product.category) {
      case "carnicería":
        return require("../assets/images/carne.jpeg");
      case "frutería":
        return require("../assets/images/fruta.jpeg");
      case "panadería":
        return require("../assets/images/pan.jpeg");
      case "bebidas":
        return require("../assets/images/bebidas.jpeg");
      case "pescadería":
        return require("../assets/images/pescado.jpeg");
      case "enlatados":
        return require("../assets/images/enlatados.jpeg");
      case "otros":
        return require("../assets/images/otros.jpeg");

      default:
        console.log("no elegiste la correcta");
        break;
    }
  };
  return (
    <ScrollView>
      <Image source={getImageFromCategory()}></Image>
      <Text>{product.name}</Text>
      <Text>{product.category}</Text>
      <Text>{product.quantity}</Text>
      <Text>{product.price}</Text>
      <Text>{product.isInCart}</Text>
    </ScrollView>
  );
};

export default ProductComponent;
