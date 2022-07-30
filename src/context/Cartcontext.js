import { createContext, useReducer, useContext } from "react";
import { cartReducer, productFilter } from "../reducers";
import faker from "faker";
faker.seed(99);

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  }));

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productFilter, {
    price: false,
    stockStatus: false,
    deliveryStatus: false,
    rating: 0,
    searchQuery: "",
  })


  return (
    <CartContext.Provider value={{ cartState, cartDispatch, productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;