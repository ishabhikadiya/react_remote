import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./Components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { Movie } from "./Pages/Movie";
import { getMoviesData } from "./API/GetAPIData";
import { getMovieDetail} from "./API/GetAPIDetailData";
import { MovieDetailData } from "./Components/UI/MovieDetailData";
import { contactData } from "./Pages/Contact";

export const App = () => {

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/movie",
        element:<Movie/>,
        loader:getMoviesData,
      },
      {
        path:"/movie/:imdbid",
        element:<MovieDetailData/>,
        loader:getMovieDetail,
      },
      {
        path:"/contact",
        element:<Contact/>,
        action:contactData,
      },
    ]
  },
  
]);
 
  // const router = createBrowserRouter(    
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home/>} />,
  //       <Route path="/about" element={<About/>} />,
  //       <Route path="/contact" element={<Contact/>} />
  //     </>
  //   )
  // );

  return<RouterProvider router={router}/>  

}