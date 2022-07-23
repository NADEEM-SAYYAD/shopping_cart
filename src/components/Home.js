import React from "react";
import { useCartContext } from "../context/Cartcontext";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    cartState: { products },
  } = useCartContext();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;