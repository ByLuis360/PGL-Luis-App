export type Product = {
  id: string;
  name: string;
  category: string;
  quantity: string;
  price: string;
  isInCart: boolean;
};

export const getDefaultProduct = () => {
  return {
    id: "",
    category: "",
    isInCart: false,
    name: "",
    price: "",
    quantity: "",
  };
};
