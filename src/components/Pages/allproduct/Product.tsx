import "./product.css";
import { Col, Empty, Result, Row, Spin, Typography, } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import api from "../../../api/Api";
import { addItem } from "../../store/reducer/cartreducer";
import Container from "../../Container/Container";
import ProductCard from "./Setproduct";
const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token")
    const getProducts = async () => {
        try {
            setIsLoading(true);
            const response = await api.get('/food/allproduct/', {
                headers: {
                    Authorization: 'Bearer  ${token}'
                }
            });
            setProducts(response.data);
        } catch (error: any) {
            setError(error.message);
            console.log(error)

        } finally {
            setIsLoading(false);
            console.log(false)
        }
    };
    useEffect(() => {
        (async () => {
            await getProducts();
        })();
    }, []);
    const { Title } = Typography;
    const cartClickHandler = (id: string) => {
        const product = products.find((product: any) => product._id === id);
        if (product) {
            dispatch(addItem(product));
        }
    }
    const getJsx = () => {
        if (products.length > 0) {
            return (
                <Row gutter={[20, 30]}>
                    {products.map(
                        ({ _id, title, description, thumbnail, price, rating }) => (
                            <Col xs={24} sm={12} md={8} lg={6} key={_id}>
                                <ProductCard
                                    id={_id}
                                    title={title}
                                    imageUrl={thumbnail}
                                    price={price}
                                    toppings={description}
                                    rate={rating}
                                    loading={isLoading}
                                    onAddToCartClick={cartClickHandler}
                                />
                            </Col>
                        )

                    )}
                </Row>
            );
        } else if (!products.length) {
            <Empty />;
        } else {
            return <Result status="warning" title={error} />;
        }
    }
    return (
        <Container>
            <Row justify="center">
                <Col span={24}>
                    <Title level={2}>Products</Title>
                </Col>
                <Col span={24}>
                    <Spin style={{ position: "absolute" }} spinning={isLoading}>
                        {getJsx()}
                    </Spin>
                </Col>
            </Row>
            <Outlet />
        </Container>
    );
};
export default ProductGrid;