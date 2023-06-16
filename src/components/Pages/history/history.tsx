import { Col, Row, Spin, Table, Tabs, Typography,} from "antd";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import TabPane from "antd/es/tabs/TabPane";
import Container from "../../Container/Container";
import api from "../../../api/Api";
import { UserGetId } from "../auth/Auth";
const Historysend = () => {
  const [data, senddata] = useState([]);
  const [isLoading, setIsLoading] =  useState(true);
  const [error, setError] = useState(false);
  const id = UserGetId()
  console.log(id)
  const [columns,setcolums] = useState([
    { title: 'id', dataIndex: '_id', key: '_id' },
    { title: 'Firstname', dataIndex: 'firstname', key: 'firstname' },
    { title: 'Lastname', dataIndex: 'lastname', key: 'last  name' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Zipcode', dataIndex: 'zipcode', key: 'zipcode' },
    { title: 'Country', dataIndex: 'country', key: "country" },
    { title: 'Address', dataIndex: 'address', key: "address" },
  ])
  const getProducts = async () => { 
    try {
      setIsLoading(true);
      const response = await api.get(`/order/userorder/${id}/`,{
      });
     senddata(response.data)

    } catch (error:any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  const { Title } = Typography;
  return (
    <div>
        <Container>
      <Row justify="center" className="center">
        <Col span={24}>
          <Title level={2}>Order  History</Title>
        </Col>
        <Col span={24}>
          <Spin style={{ position: "absolute" }} spinning={isLoading}>
            <Tabs>
            <TabPane tabKey="Pending" tab="PendingOrder">
          <h1>Pending</h1>
          <Table columns={columns} dataSource={data.filter((item:any) => item.status === "pending")}></Table>
          </TabPane>
          <TabPane key="ProcessData" tab="ProcessOrder">
          <h1>ProcessDaata</h1>
          <Table columns={columns} dataSource={data.filter((item:any) => item.status === "process")}/>
          </TabPane>
          <TabPane tab="RejectedOrder" key="Rejected" tabKey="rejected">
            <h1>Rejected</h1>
          <Table columns={columns} dataSource={data.filter((item:any) => item.status == "reject")}/>
          </TabPane>
          </Tabs>
          </Spin>
        </Col>
      </Row>
      <Outlet/>
  
      </Container>
     
      </div>
  );
};
export default Historysend;