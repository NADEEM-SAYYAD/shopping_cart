import React, { useMemo } from "react";
import { useCartContext } from "../context/Cartcontext";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import NoItemsfound from "./NoItemsfound";

const Home = () => {
  const {
    cartState: { products },
    productState: { price, stockStatus, deliveryStatus, searchQuery }
  } = useCartContext();

  console.log("My Products items", products);
  const getFilersProductData = useMemo(() => {
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
  }, [products, price, stockStatus, deliveryStatus, searchQuery])

  console.log(getFilersProductData)
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
          getFilersProductData.length ? getFilersProductData.map((product) => (
            <SingleProduct key={product.id} product={product} />
          )) : <NoItemsfound />
        }
      </div>
    </div>
  );
};
export default Home;