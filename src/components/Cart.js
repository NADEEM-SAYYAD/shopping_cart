import React from "react";
import { useCartContext } from "../context/Cartcontext";
import { Col, Image, ListGroup, Row ,Button} from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import ItemsQantity from "./ItemsQantity";

const Cart = () => {
  const {
    cartState: { cart },
    cartDispatch: dispatch,
  } = useCartContext();

  const deleteCartItemHandler = (delItem) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: delItem
    })
  }

  const total = cart.reduce((acc,cur)=> acc + Number(cur.price) * cur.qty ,0);
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
                <Col md={2}><Rating rating={prod.ratings} /></Col>
                <Col md={2}><ItemsQantity qty={prod.inStock} pid={prod.id}/></Col>

                <Col md={2}>
                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                    onClick={e => deleteCartItemHandler(prod)}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};
export default Cart;