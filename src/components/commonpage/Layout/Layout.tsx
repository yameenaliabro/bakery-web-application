import Header from "../../Pages/Header/Header"
import "./layout.css"
function Layout({ children }: { children: any }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default Layout