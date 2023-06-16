import { Button, Col, Input, Row } from "antd";

import TitleBar from "./TitleBar";
import Product from "./New";
import "./cart.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSubTotal,
  deleteItem,
  setItemQuantity,
} from"../../store/reducer/cartreducer";
import { UserLoggedin } from "../auth/Auth";
import Container from "../../Container/Container";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state:any) => state.cart);
  const dispatch = useDispatch();
  const isLoggedIn = UserLoggedin();
  const checkoutClickHandler = () => {
    isLoggedIn ? navigate("/checkout") : navigate("/signin");
  };
  const continueShoppingClickHandler = () => navigate("/");

  const cartItemMinusClickHandler = (id:string) => {
    dispatch(setItemQuantity({ id, mode: "remove" }));
  };

  const cartItemPlusClickHandler = (id:string) => {
    dispatch(setItemQuantity({ id, mode: "add" }));
  };

  const deleteItemClickHandler = (id:string) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <section className="cart__main">
        <Container>
          <Row>
            <Col span={24}>
              <TitleBar />
              <div className="products">
                {cart.map(
                  ({ _id, title, description, thumbnail, price, quantity }:any) => (
                    <Product
                      key={_id  }
                      id={_id}
                      title={title}
                      toppings={description}
                      price={price}
                      quantity={quantity}
                      totalPrice={price}
                      imageUrl={thumbnail}
                      onItemMinusClick={cartItemMinusClickHandler}
                      onItemPlusClick={cartItemPlusClickHandler}
                      onDeleteItemClick={deleteItemClickHandler}
                    />
                  )
                )}
              </div>

              <div className="actions">
                <div className="left">
                  <Button
                    type="primary"
                    onClick={continueShoppingClickHandler}
                    className="primary-btn"
                  >
                    Continue Shopping
                  </Button>

                  <p>Order special instruction</p>

                  <Input.TextArea rows={4} />
                </div>

                <div className="right">
                  <h4>
                    Subtotal <span>${dispatch<any>(cartSubTotal())}</span>
                  </h4>

                  <p>Taxes and shipping calculated at cart</p>

                  <Button
                    type="primary"
                    onClick={checkoutClickHandler}
                    className="primary-btn"
                  >
                    Check Out
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Cart;