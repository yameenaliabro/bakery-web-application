import { Button, Col, Divider, Row, Tabs } from "antd"
import TabPane from "antd/es/tabs/TabPane"
import "./pricing.css"
import Birthday from "./brithday/brithday"
import Wedding from "./pricing/wedding/Wedding"
import Custom from "./custom/Custom"
function Pricing(){
return(
    <div>
        <Col className="heading"> 
      <h3>Menu & Pricing</h3>
      <h1>EXPLORE OUR CAKES</h1>
      </Col>
        <Row className="main-pricing-main">
           <Tabs className="main-pricing">
            <TabPane tab={<Button type="primary">Birtday</Button>} key="1">
                <Birthday/>
            </TabPane>
            <TabPane tab={<Button type="primary">Weeding</Button>}>
                <Wedding/>
            </TabPane>
            <TabPane tab={<Button type="primary">Custom</Button>} key="3">
                <Custom/>
            </TabPane>
            </Tabs>
        </Row>
    </div>
)
}
export default Pricing