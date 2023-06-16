import { Divider } from "antd";
import Banner from "./banner/Banner";
import About from "./about/About"
import Pricing from "./pricing/Pricing";
import Discount from "./discount/Discount";
import Chief from "./ourchief/Chief";
import Super from "./super/super";
import Fotter from "./fotter/Fotter";
function Home(){
return(
    <div>
        <Banner/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <About/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <Pricing/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
       <Discount/>
       <Divider className="hidden" style={{ marginTop: 80 }} /> 
       <Chief/>
       <Divider className="hidden" style={{ marginTop: 60 }} /> 
       <Super/>
       <Divider className="hidden" style={{ marginTop: 80 }} /> 
       <Fotter/>
    </div>
)
}
export default Home;