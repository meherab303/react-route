import { useLoaderData,NavLink, useNavigate } from "react-router-dom";


const ShowDetails = () => {
    const details=useLoaderData()
    const navigate=useNavigate()
    const{images,rating,price,title,discountPercentage
        ,stock}=details
    console.log(details)
    const handleGoBack=()=>{
navigate(-1)
    }
   
    return (
        <div className="flex justify-center items-center mt-32">
            <div className="bg-white border border-gray-200 rounded-lg shadow w-full h-96 max-w-sm  ">
           <div><img className="h-52 w-full p-8 rounded-t-lg " src={images[0]}></img></div>
           <div className="p-5 font-bold text-lg">{title}</div>
           <div className="flex justify-around text-lg mb-4"><p className="text-violet-500"> Stock:{stock}</p> <p className="text-cyan-400">  Rating: {rating}</p><p className="text-fuchsia-500">Discount:{discountPercentage}</p></div>
           
           <div className="flex justify-around text-xl font-bold">
            <div className="text-4xl">{price} $</div>
            <div><NavLink><button className="bg-blue-600 p-2 rounded-lg text-white">Add To Cart</button></NavLink></div>
            <div><NavLink onClick={handleGoBack}><button className="bg-emerald-500 p-2 rounded-lg text-white">Go Back</button></NavLink></div>
           </div>
           </div>
            
            
        </div>
    );
};

export default ShowDetails;