import React from "react";
import { useCartContext } from "../context/Cartcontext";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";

const Cart = () => {
  const {
    cartState: { cart },
  } = useCartContext();
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>

                <Col md={2}>
                  <Button type="button" variant="light"></Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
export default Cart;