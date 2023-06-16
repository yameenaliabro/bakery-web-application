//@ts-nocheck
import { RouteObject } from "react-router-dom"
import { Outlet, useRoutes } from "react-router"
import Layout from "../commonpage/Layout/Layout"
import Home from "../Pages/Home/Home"
import NonRequirAuth from "../Pages/auth/NonRequireAuth"
import Login from "../Pages/auth/login/Login"
import SignUp from "../Pages/auth/signup/Signup"
import ProductGrid from "../Pages/allproduct/Product"
import Cart from "../Pages/cart/Cart"
import RequireAuth from "../Pages/auth/RequireAuth"
import Checkout from "../../checkout/Checkout"
import Account from "../account/Acoount"
import Historysend from "../Pages/history/history"
import AdminHeader from "../admin/adminpage/adminHeader/AdminHeader"
import SignIn from "../Pages/auth/login/Login"
import AdminRoute from "../admin/adminRoute/AdminRoute"
import AdminLayout from "../admin/adminlayout/AdminLayout"
function Routes() {
    let routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout children={<Outlet />} />,
            children: [{ index: true, element: <Home /> }]
        },
        {
            path: "/signin",
            element: <Layout children={<Outlet />} />,
            children: [
                {
                    index: true,
                    element: (
                        <NonRequirAuth>
                            <Login />
                        </NonRequirAuth>
                    )
                },
            ]
        },
        {
            path: "/signup",
            element: <Layout children={<Outlet />} />,
            children: [{
                index: true,
                element: (
                    <NonRequirAuth>
                        <SignUp />
                    </NonRequirAuth>
                )
            }]
        },
        {
            path: "/all/product",
            element: <Layout children={<Outlet />} />,
            children: [{
                index: true, element: <ProductGrid />
            }]
        },
        {
            path: "/cart",
            element: <Layout children={<Outlet />} />,
            children: [
                { index: true, element: <Cart /> }
            ]
        },
        {
            path: "/checkout",
            element: <Layout children={<Outlet />} />,
            children: [
                {
                    index: true,
                    element: (
                        <RequireAuth>
                        <Checkout />
                        </RequireAuth>
                    )
                }
            ]
        },
        {
            path: "/history",
            element: <Layout children={<Outlet />} />,
            children: [
                {
                    index: true, element: <Historysend />
                }
            ]
        },
        {
            path: '/account',
            element: <Layout children={<Outlet />} />,
            children: [
                {
                    index: true,
                    element: <Account />
                }
            ]
        },
        {
            path:'/admin',
            element:<AdminLayout children={<Outlet/>}/>,
            children:[{
                index:true,
                element:(
                        <AdminRoute/>
                )
            }]
            
        }
    ]
    let element = useRoutes(routes)
    return (
        <div>
            {element}
        </div>
    )
}
export default Routes