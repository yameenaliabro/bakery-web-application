import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { useState } from "react";
import { signinuser } from "../../../store/reducer/authreducer";
import { UseSetToken, UserSetId } from "../Auth";
const SignIn = () => {
  const [role, setrole] = useState("")
  const navigate = useNavigate();
  const { isLoading } = useSelector((state:any) => state.auth);
  const dispatch = useDispatch();
  const setToken = UseSetToken();
  const setUserId = UserSetId();
  const signInHandler = (values:{email:string,password:string}) => {
    console.log(values)
    dispatch<any>(signinuser(values))
      .unwrap()
      .then((data:any) => {
        console.log(data)
        setUserId(data.user._id)
        setToken(data.token);
        console.log(data)
        if(data.user.role ==="admin"){
         navigate("/admin")
         console.log(true)
        }
        else if (data.user.role ==="user"){
          navigate("/cart")
        }
        else{
          navigate("/signin")
          message.error("some thing went wrong")
        }
        message.success("Login successful");
      })
      .catch((err:any) => {
        message.error(err.message)
      });
  };
  return (
    <>
      <div className="signin">
        <section className="signin__main">
          <div className="signin__body">
            <h2>Login</h2>
            <Form
              wrapperCol={{
                span: 24,
              }}
              layout="horizontal"
              size="large"
              style={{
                maxWidth: 400,
                width: "100%",
              }}
              onFinish={signInHandler}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "string", message: "Please enter a valid user email address" },
                  {
                    min: 5,
                    message: "Username must be minimum 5 characters.",
                  },
                ]}
              >
                <Input placeholder="User Name" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                    whitespace: true,
                  },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item className="form-item-button">
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Sign In
                </Button>
              </Form.Item>
            </Form>
            <Button
              onClick={() => navigate("/signup")}
              type="link"
              className=""
            >
              Create Account
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
