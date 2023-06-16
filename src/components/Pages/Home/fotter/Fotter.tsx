import { Card, Col, Input, Row } from "antd";
import "./fotter.css"
function Fotter() {
    return (
        <div>
            <Row className="main-row-fotter">
                <Card className="fotter-card" hoverable bordered={false}>
                    <Col className="fotter-text">
                        <h1>CAKEZONE</h1>
                        <p>
                            Lorem diam sit erat dolor elitr et, diam lorem<br />
                            justo labore amet clita labore stet eos magna <br />
                            sit. Elitr dolor eirmod duo tempor lorem, elitr <br />
                            clita ipsum sea. Nonumy rebum et takimata ea <br />
                            takimata amet gubergren, erat rebum magna<br />
                            lorem stet eos. Diam amet et kasd eos duo<br />
                            dolore no.</p>
                    </Col>
                </Card>
                <Col className="middle-fotter">
                    <h3>GET IN TOUCH</h3>
                    <p>123 Street, New York, USA</p>
                    <p>info@example.com</p>
                    <p>+012 345 67890</p>
                    <Row className="main-row-icon">
                    <i className="fab fa-twitter fw-normal"></i>
                    <i className="fab fa-facebook-f fw-normal"></i>
                    <i className="fab fa-linkedin-in fw-normal"></i>
                    </Row>
                </Col>
                <Col className="middle-fotter">
                    <h3>QUICK LINKS</h3>
                   <p>Home</p>
                    <p>About us</p>
                    <p>Our Services</p>
                    <p>Meet The Team</p>
                    <p>Latest Blog</p>
                    <p>Contact Us</p>
                </Col>
                <Col className="middle-fotter">
                    <h3>NEWSLETTER</h3>
                    <p>Amet justo diam dolor rebum <br />
                        lorem sit stet sea justo kasd</p>
                        <Input.Search enterButton="Sign Up" placeholder="enter a email address" />
                </Col>
            </Row>
        </div>
    )
}
export default Fotter;