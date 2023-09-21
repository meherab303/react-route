import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const navigate=useNavigate()
    const error = useRouteError();
    const goback=()=>{
        navigate(-1)
    }
  console.error( error);
    return (
        <div className="flex flex-col justify-center items-center mt-40 space-y-5">
           <div className="text-3xl"><i>Oppps! Page Not found</i></div>
           <div> {
                error.status===404 && <div  onClick={goback}><button className="p-4 bg-emerald-400 text-white rounded-lg" >Go Back</button></div>

            }</div>
            
        </div>
    );
};

export default Error;