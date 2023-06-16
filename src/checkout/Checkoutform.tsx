import { Button, DatePicker, Form, Input, Modal, Select, message } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./checkoutform.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { cartSubTotal, emptyCart } from "../components/store/reducer/cartreducer";
import { UserGetId } from "../components/Pages/auth/Auth"
import api from "../api/Api";
const CheckoutForm = () => {
  const id = UserGetId
  let dispatch = useDispatch() 
  const navigate = useNavigate();
let price = useSelector(cartSubTotal)
  const success = () => {
    Modal.success({
      title: "Order Placed!",
      content: "Your order has been successfully placed",
      onOk() {
        dispatch(emptyCart());    
        navigate("/");
      },
    });
  };
  const formSubmitHandler = (values:any) => {
    console.log(values,id)
    let ap = api.post("/order/addorder/",{...values,id,price}).then((response:any)=>{
      console.log(response)
      success();  
    }).catch((error:any)=>{
      message.error("some thing went wrong")
      console.log(error)
    })
  };
  return (
    <Form className="checkout-form" onFinish={formSubmitHandler}>
      <div className="flex">
        <Form.Item name="firstname" rules={[
          {required:true,message:"Enter a firstname"}
        ]} >
          <Input placeholder="First name" name="firstname" />
        </Form.Item>
        <Form.Item name="lastname" rules={[
          {required:true,message:"Enter lastname"}
        ]}>
          <Input placeholder="Last name" name="lastname" />
        </Form.Item>  
      </div>
      <Form.Item name="country" rules={[
          {required:true,message:"Enter a country"}
        ]}>
        <Select placeholder="Country/Region" >
          <Select.Option value="Pakistan" >Pakistan</Select.Option>
          <Select.Option value="India">India</Select.Option>
          <Select.Option value="Bangladesh">Bangladesh</Select.Option>
          <Select.Option value="Afghanistan">Afghanistan</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="address" rules={[
          {required:true,message:"Enter a address"}
        ]}>
        <Input placeholder="Address" name="address" />
      </Form.Item>
      <div className="flex">
        <Form.Item name="city" rules={[
          {required:true,message:"Enter a city"}
        ]}>
          <Select placeholder="Enter City">
          <Select.Option value="Karachi" >Karachi</Select.Option>
          <Select.Option value="Hyderabd">Hyderabad</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="zipcode" rules={[
          {required:true,message:"Enter a zipcode"}
        ]}>
          <Input placeholder="enter a zip code" name="id" type="number"/>
        </Form.Item>
     
        <Form.Item name="date" rules={[
          {required:true,message:"Enter a date"}
        ]}>
        <DatePicker  placeholder="enter date with deleviry" name="date"/>        
        </Form.Item>
      </div>
      <div className="actions">
        <Link className="link" to="/cart">
          <LeftOutlined /> Return to cart
        </Link>
        <Button type="primary" htmlType="submit" >
          Contnue to shipping
        </Button>
      </div>
      <Form.Item name="price">
          <span>${dispatch<any>(cartSubTotal())}</span>
        </Form.Item>
    </Form>
  );
};
export default CheckoutForm;