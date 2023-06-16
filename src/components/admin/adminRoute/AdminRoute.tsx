import { Outlet, Route, Routes } from "react-router";
import AdminHeader from "../adminpage/adminHeader/AdminHeader";
import AdminAllproduct from "../adminpage/adminproduct/AdminProduct";

function AdminRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminHeader />}>
                    <Route index element={<AdminAllproduct />} />
                    <Route path="/add/product/" element={<AdminAllproduct/>}/>
                </Route>
            </Routes>
            <Outlet />
        </div>
    )
}
export default AdminRoute;