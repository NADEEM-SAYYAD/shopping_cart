import React, { useMemo } from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { useCartContext } from "../context/Cartcontext";

const SingleProduct = ({ product: prod }) => {
  const {
    cartState: { cart },
    cartDispatch : dispatch,
  } = useCartContext();

  const isItemExistInCart = useMemo(() => {
    return cart.some((p) => p.id === prod.id);
  }, [cart, prod]);

  const addProductHandler = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const removeProductHandler = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
//prod.image
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <div>In Stocks : {prod.inStock}</div>
            <div><Rating rating={prod.ratings} /></div>
            {isItemExistInCart ? (
              <Button
                variant="danger"
                onClick={(e) => removeProductHandler(prod)}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button onClick={(e) => addProductHandler(prod)}>
                Add to Cart
              </Button>
            )}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};
export default SingleProduct;
