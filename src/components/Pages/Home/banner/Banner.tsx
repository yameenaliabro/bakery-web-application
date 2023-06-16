import { Button, Carousel, Col, Row } from "antd";
import Container from "../../../Container/Container";
import "./banner.css"
function Banner() {
    return (
        <section>
        <Carousel autoplay>
          <div className="banner banner-slide-1">
            <Container>
              <Row>
                <Col span={24} className="content">
                <h5 className="food-title">Cake</h5>
                  <h1 className="food-detail">
                    This is a very  
                    <br /> Choclate Cake
                  </h1>
                </Col>
                <Col span={24}>
                  <Button type="primary" size="large">
                    Shop Now
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="banner banner-slide-2">
            <Container>
              <Row>
                <Col span={24} className="content">
                  <h5 className="food-title">Cake</h5>
                  <h1 className="food-detail">
                    This is a very  
                    <br /> Choclate Cake
                  </h1>
                </Col>
                <Col span={24}>
                  <Button type="primary" size="large">
                    Shop Now
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="banner banner-slide-2">
            <Container>
              <Row>
                <Col span={24} className="content">
                <h5 className="food-title">Cake</h5>
                  <h1 className="food-detail">
                    This is a very  
                    <br /> Choclate Cake
                  </h1>
                </Col>
                <Col span={24}>
                  <Button type="primary" size="large">
                    Shop Now
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel>
      </section>
    )
}
export default Banner;