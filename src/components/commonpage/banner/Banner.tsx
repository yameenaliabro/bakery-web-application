import { Col, Row, Space, Typography } from "antd";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";
function InnerBanner({ title }: { title: string }) {
    return (
        <section className="inner-banner">
            <Container>
                <Row>
                    <Col span={24}>
                        <Space direction="vertical">
                            <div>
                                <Link to="/">
                                    <span style={{ color: "white" }}>Home</span>
                                </Link>
                                /<span>{(title && title) || "Page Title"} </span>
                            </div>
                            <Typography.Title>
                                {(title && title) || "Page Title"}
                            </Typography.Title>
                        </Space>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default InnerBanner;