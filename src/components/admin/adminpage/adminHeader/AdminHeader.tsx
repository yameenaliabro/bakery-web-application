import { Col, Row, theme, Menu, } from "antd";
import "./adminheader.css";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";
import AdminProduct from "../adminproduct/AdminProduct";
const loggedInHeaderMenu = [
  { label:<Link to="/admin">Home</Link>, key: "/admin" },
  { label: <Link to="/add/product">AddProduct</Link>, key: "addproduct" },
  { label: <Link to="/check/status">CheckStauuts</Link>, key: "check/status" },
];
const AdminHeader = () => {
  const { token } = theme.useToken();
  return (
  <div>
    <header style={{ background: token.colorPrimary }}>
      <Container>
        <Row justify="center" align="middle">
          <Col xs={10} lg={17}>
            <Menu
              mode="horizontal"
              items={loggedInHeaderMenu}
              style={{
                backgroundColor: "transparent",
                color: "white",
                justifyContent: "flex-end",
              }}
            />
          </Col>
        </Row>
      </Container>
    </header>
    <AdminProduct/>
    </div>
  );
};
export default AdminHeader;