import { useNavigate } from "react-router-dom"
import { Home } from "./Home";

export const ErrorPage = () => {
    
    // usenavigate returns a function 
    const navigate = useNavigate();

    const handleOnClick = () =>{
        navigate(-1);
        // navigate("/");
        // navigate("whereever you want to navigate like "/" "/about" ")
    }
    return(
        <>
        <h1>Errorpage</h1>
        <button className="btn" onClick={handleOnClick}>Go Back</button>
        </>
    )
}