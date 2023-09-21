import { Outlet } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";



const DashBoardLayout = () => {
    return (
        <div className="flex">
           <div className="w-[20%]">
             <DashBoard></DashBoard>
             </div>
          <div className="w-[80%] text-3xl  text-center shadow-md ml-2 flex justify-center items-center">
          <Outlet></Outlet>
          </div>
            
        </div>
    );
};

export default DashBoardLayout;