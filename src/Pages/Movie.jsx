import { useLoaderData } from "react-router-dom"
import { Card } from "../Components/UI/Card";

export const Movie = () => {

    const movieData = useLoaderData();

    console.log(movieData);
    
    return (
        <>
            <ul className="container grid grid-three--cols">
                {movieData.Search.map((curElem) => {
                    return (<Card key={curElem.imdbID} data={curElem} />)
                })}
            </ul>
        </>
    )
}
