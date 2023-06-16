import { Button, Card, Col, Row } from "antd"
import "./discount.css"
function Discount() {
    return (
        <div>
             <Row className="fotter-discount">
                <Col className="col-heading">
                <h2>30% DISCOUNT FOR THIS SUMMER</h2>
                <Button type="primary">Order Now</Button>
                </Col>
            </Row>
            <Row className="container-discount">
                <Card className="discount-card" hoverable bordered={false}>
                    <h1>BIRTHDAY CAKE</h1>
                    <p>BIRTHDAY CAKE
                        Ipsum ipsum clita erat amet dolor sit<br />
                        justo sea eirmod diam stet sit justo amet tempor amet <br />
                        kasd lorem dolor ipsum</p>
                        <Button type="primary">Read More</Button>
                </Card>
                <Card className="discount-card" hoverable bordered={false}>
                <h1>WEDDING CAKE</h1>
                    <p>WEDDING CAKE
                        Ipsum ipsum clita erat amet dolor sit<br />
                        justo sea eirmod diam stet sit justo amet tempor amet <br />
                        kasd lorem dolor ipsum</p>
                        <Button type="primary">Read More</Button>
                </Card>
                <Card className="discount-card" hoverable bordered={false}>
                <h1>CUSTOM CAKE</h1>
                    <p>CUSTOM CAKE
                        Ipsum ipsum clita erat amet dolor sit<br />
                        justo sea eirmod diam stet sit justo amet tempor amet <br />
                        kasd lorem dolor ipsum</p>
                        <Button type="primary">Read More</Button>
                </Card>
            </Row>
        </div>
    )
}
export default Discount