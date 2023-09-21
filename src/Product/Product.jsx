import { NavLink } from "react-router-dom";


const Product = ({product}) => {
    const{images,title,price,id}=product
    console.log(product)
    return (
        <div >
           <div className="bg-white border border-gray-200 rounded-lg shadow w-full h-96 max-w-screen   ">
           <div><img className="h-52 w-full p-8 rounded-t-lg " src={images[0]}></img></div>
           <div className="p-5 font-bold text-lg">{title}</div>
           <div className="flex justify-around text-xl font-bold">
            <div className="text-4xl">{price} $</div>
            <div><NavLink to={`/product/${id}`}><button className="bg-blue-600 p-2 rounded-lg text-white">View Details</button></NavLink></div>
           </div>
           </div>
            
        </div>
    );
};

export default Product;