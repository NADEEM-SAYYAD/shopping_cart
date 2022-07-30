import React, { useMemo } from "react";
import { useCartContext } from "../context/Cartcontext";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    cartState: { products },
    productState: { price, stockStatus, deliveryStatus, rating, searchQuery }
  } = useCartContext();

  const getFilersProductData = useMemo(() => {
    console.log("Searched value", searchQuery)
    let filterdData = products;
    if (deliveryStatus) {
      filterdData = filterdData.filter(prod => prod.fastDelivery)
    }
    if (stockStatus) {
      filterdData = filterdData.filter(prod => prod.inStock)
    }
    if (price) {
      filterdData = filterdData.sort((a, b) => a.price - b.price);
    }
    if (!price) {
      filterdData = filterdData.sort((a, b) => b.price - a.price);
    }
    if (searchQuery) {
      filterdData = filterdData.filter(prod => prod.name.includes(searchQuery))
    }
    return filterdData
  })


  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {getFilersProductData.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;