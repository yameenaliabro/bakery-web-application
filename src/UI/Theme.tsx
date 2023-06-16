import {ConfigProvider} from "antd"
import theme from "./thems.json"
import "antd/dist/reset.css";
import  "./main.css"
function Theme({children}  :{children: any} ){
return<ConfigProvider theme={theme}>{children}</ConfigProvider>
}
export default Theme;