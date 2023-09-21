import { NavLink } from "react-router-dom";


const DashBoard = () => {
    return (
        <div>
          <div className="flex flex-col justify-center  h-80 text-center text-2xl space-y-4 rounded-lg shadow-md">
          <NavLink to='/dashboard/profile'>Profile</NavLink>
           <NavLink to='/dashboard/bio'>Bio</NavLink>
           <NavLink to='/dashboard/cart'>Your Cart Item</NavLink>
          
            
          </div>
        </div>
    );
};

export default DashBoard;