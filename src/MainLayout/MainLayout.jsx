import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div className="min-h-screen">
              
            {
                     
                     navigation.state === "loading"
                           ? "Loadinggggggggggggggggggg....."
                           : <Outlet></Outlet>
                      }
            </div>
           
            <section>
                <Footer></Footer>
            </section>
            
        </div>
    );
};

export default MainLayout;