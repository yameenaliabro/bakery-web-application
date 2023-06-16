import { Col, Row, theme, Typography, Menu, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { UserLoggedin, UserRemoveToken } from "../auth/Auth";
import { logooutuser } from "../../store/reducer/authreducer";
import Container from "../../Container/Container";
const loggedOutHeaderMenu = [
  { label: "Home", key: "" },
  {label:"AllProduct",key:"all/product"},
  { label: "Cart", key: "cart" },
  { label: "Sign In", key: "signin" },
  { label: "History", key: "history" },
  { label: "Account", key: "account" },  
];
const loggedInHeaderMenu = [
  { label: "Home", key: "" },
  {label:"AllProduct",key:"all/product"},
  { label: "Cart", key: "cart" },
  { label: "Sign Out", key: "signout" },
  { label: "History", key: "history" },  
  { label: "Account", key: "account" },  
];
const Header = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const cart = useSelector((state:any) => state.cart);
  const dispatch = useDispatch();
  const removeToken = UserRemoveToken();
  const isLoggedIn = UserLoggedin();
  const signOutUser = () => {
    removeToken();
    dispatch<any>(logooutuser()); 
    navigate("/");
  };
  const menuClickHandler = ({ key }:{key:any}) => {
    if (key !== "signout") return navigate(`/${key}`);
    signOutUser();
  };    
  return (
    <header style={{ background: token.colorPrimary }}>
      <Container>
        <Row justify="center" align="middle">
          <Col
            xs={12}
            lg={6}
            style={{
              backgroundColor: token.colorSuccess,
              textAlign: "center",
            }}
          >
            <Link to="/">
              <Typography.Title level={3} style={{ marginTop: 10 }}>
                  CAKE ZONE
              </Typography.Title>
            </Link>
          </Col>
          <Col xs={12} lg={17}>
            <Menu
              mode="horizontal"
              items={isLoggedIn ? loggedInHeaderMenu : loggedOutHeaderMenu}
              onClick={menuClickHandler}
              style={{
                backgroundColor: "transparent",
                color: "white",
                justifyContent: "flex-end",
              }}
            />
          </Col>
          <Col xs={1} lg={1} >
            <Badge
              color={token.colorSuccess}
              style={{ borderColor: token.colorSuccess }}
              count={cart.length}
            >
              <HiOutlineShoppingBag
                style={{ color: token.colorSuccess }}
                size={30}
              />
            </Badge>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
