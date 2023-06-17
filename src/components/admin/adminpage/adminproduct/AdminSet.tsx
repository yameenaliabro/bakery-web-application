import Meta from "antd/es/card/Meta";
import { Button, Card, Rate, theme, Typography } from "antd";
import "./adminset.css";
const AdminSet= ({
  id,
  title,
  imageUrl,
  price,
  toppings,
  rate,
  unit = "$", 
  loading,
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
      </div>
    </Card>
  );
};
export default AdminSet;