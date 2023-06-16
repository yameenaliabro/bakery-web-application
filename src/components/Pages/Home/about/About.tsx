import { Col, Row, Image } from "antd"
import img from "../../../../assets/img/about.jpg"
import "./about.css"
import CountUp from "react-countup"
function About() {
    return (
        <div className="about-container">
            <Col className="heading">
                <h1>Abou Us</h1>
                <h2>WELCOME TO CAKEZONE</h2>                                    
            </Col>
            <Row className="main-row">
                <Image preview={false} src={img} />
                <Col className="middle-heading">
                    <h3>Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem <br />
                        sed stet labore lorem sit clita duo</h3>
                    <p>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita<br />
                        erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et <br />
                        tempor eirmod magna dolore erat amet magna</p>
                    <Row className="middle-icon">
                        <Col className="middle-icons1">
                            <i className="fa fa-award fa-2x text-white"></i>
                            <h1>100% HEALTHY</h1>
                            <p>Labore justo vero ipsum sit clita erat<br />
                                lorem magna clita nonumy dolor <br />
                                magna dolor vero</p>
                        </Col>
                        <Col className="middle-icons2">
                            <i className="fa fa-heartbeat fa-2x text-white"></i>
                            <h1>AWARD WINNING</h1>
                            <p>Labore justo vero ipsum sit clita erat<br />
                                lorem magna clita nonumy dolor <br />
                                magna dolor vero</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="footer-icon">
                <Col className="main">
                <Col className="footer-icons">
                    <i className="fa fa-star text-white">…</i>
                </Col>
                <p>OUR EXPERIENCE</p><br/>
                    <h1><CountUp start={0} end={350} duration={2.75 } /></h1>
                </Col>

                <Col  className="main">
                    <Col className="footer-icons">
                        <i className="fa fa-users text-white">…</i>
                    </Col>
                    <p>CakeList</p><br/>
                    <h1><CountUp start={0} end={1000} duration={2.75 }/></h1>

                </Col>
                <Col className="main">
                    <Col className="footer-icons">
                        <i className="fa fa-check text-white"></i>
                    </Col>
                    <p>COMPLETE PROJECT</p><br/>
                    <h1><CountUp start={0} end={1250} duration={2.75 }/></h1>

                </Col>
                <Col className="main">
                    <Col className="footer-icons">
                    <i className="fa fa-mug-hot text-white">…</i>
                    </Col>
                    <p>HappyCilent</p><br/>
                    <h1><CountUp start={0} end={900} duration={2.75 }/></h1>

                </Col>
            </Row>
        </div>
    )
}
export default About