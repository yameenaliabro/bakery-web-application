import 'react-toastify/dist/ReactToastify.css';
import Meta from "antd/es/card/Meta";
import { Button, Card, Rate, theme, Typography } from "antd";
import {  toast, ToastContainer } from 'react-toastify';
import "./setproduct.css";
const ProductCard = ({
  id,
  title,
  imageUrl,
  price,
  toppings,
  rate,
  unit = "$", 
  loading,
  onAddToCartClick,
}:any) => {
   const { Text } = Typography;
  const { token } = theme.useToken()
  return (
    <Card hoverable
      className="product-card-item"
      bordered
      cover={<img alt={title} src={imageUrl} />}
      loading={loading}
    >
      <div>
        <Rate disabled defaultValue={rate} />
        <Meta title={title} description={toppings} />
      </div>
      <div className="action">
        <Button type="primary" onClick={() => {
          onAddToCartClick(id)
          toast('Product Added to Cart!', {
            position: "top-right",
            autoClose: 2300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          }} >
          Add to cart
        </Button>
        <Text style={{ color: token.colorPrimary }}>
          {unit}
          {price}
        </Text>
      </div>
      <ToastContainer/>
    </Card>
  );
};
export default ProductCard;