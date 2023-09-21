import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <section>
                <Footer></Footer>
            </section>
            
        </div>
    );
};

export default MainLayout;