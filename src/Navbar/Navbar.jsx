import {  NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5 p-4 shadow-md text-lg mx-10">
            <div className="font-extrabold">Amazon</div>
            <div >
                <ul  className="flex gap-4  ">
                   <li>
                   <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-teal-400 rounded-sm p-2" : ""
  } to={'/'}>Home</NavLink>
                   </li>
                   <li>
                   <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-teal-400 rounded-sm p-2" : ""
  }  to={'/products'}>Products</NavLink>
                   </li>
                   <li>
                   <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-teal-400 rounded-sm p-2" : ""
  }   to={'/dashboard'}>Dashboard</NavLink>
                   </li>
                   
                   
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;