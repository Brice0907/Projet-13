import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";


export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}