import React from "react";
import { useCartContext } from "../context/Cartcontext";

const Home = () => {
  const {
    cartState: { products },
  } = useCartContext();
  console.log("Here is my data", products);
  return (
    <div>
      <p>Home</p>
    </div>
  );
};
export default Home;
