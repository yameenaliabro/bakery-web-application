import { Breadcrumb } from "antd";
import { RightOutlined, QuestionCircleFilled } from "@ant-design/icons";
import "./checkout.css";
import { useDispatch, useSelector } from "react-redux";
import CheckoutForm from "./Checkoutform";
import { cartSubTotal } from "../components/store/reducer/cartreducer";
import CartItem from "./CartItem";
const Checkout = () => {
  console.log("hello")
  const dispatch = useDispatch();
  const  {cart}  = useSelector((state:any) => state);
  return (
    <div className="checkout">
      <div className="checkout__left-section">

        <Breadcrumb separator={<RightOutlined className="icon" />}>
          <Breadcrumb.Item>Cart</Breadcrumb.Item>
          <Breadcrumb.Item>Information</Breadcrumb.Item>
          <Breadcrumb.Item>Shipping</Breadcrumb.Item>
          <Breadcrumb.Item>Payment</Breadcrumb.Item>
        </Breadcrumb>

        <h3>Shipping address</h3>
        <CheckoutForm />
      </div>
      <div className="checkout__right-section">
        {cart.map((cartItem:any) => (
          <CartItem {...cartItem} />
        ))}

        <div className="cart-details">
          <div>
            <span>Subtotal</span>
            <span className="price">${dispatch<any>(cartSubTotal())}</span>
          </div>

          <div>
            <span>Shipping</span>
            <span>Calculate at next step</span>
          </div>
          <div>
            <span>
              Estimated taxes <QuestionCircleFilled className="question-mark" />
            </span>
            <span className="price">$167.40</span>
          </div>
        </div>
        <div className="cart-total">
          <span>Total</span>
          <span>
            <span>USD</span> <span>$1,097.40</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
