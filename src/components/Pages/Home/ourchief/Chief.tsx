import { Card, Row, Image, Col } from "antd"
import image1 from "../../../../assets/img/team-1.jpg"
import image2 from "../../../../assets/img/team-2.jpg"
import image3 from "../../../../assets/img/team-3.jpg"
import "./chief.css"
function Chief() {
    return (
        <div>
            <Col className="upper-heading">
             <h3>Team Members</h3>
                <h1>OUR MASTER CHEFS</h1>
                </Col>
            <Row className="container-chief">
                <Card hoverable className="card-main-chief" bordered={false}>
                    <Image src={image1} alt="client" preview={false} />
                    <Col className="client-col">
                        <h1>FullName</h1>
                        <p>Designation</p>
                    </Col>
                </Card>
                <Card hoverable className="card-main-chief">
                    <Image src={image2} alt="client2" preview={false} />
                    <Col  className="client-col">
                        <h1>FullName</h1>
                        <p>Designation</p>
                    </Col>
                </Card> 
                <Card hoverable className="card-main-chief">
                    <Image src={image3} alt="client3" preview={false} />
                    <Col className="client-col">
                        <h1>FullName</h1>
                        <p>Designation</p>
                    </Col>
                </Card>
            </Row>
        </div>
    )
}
export default Chief