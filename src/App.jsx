import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./Components/Layout/AppLayout";
import "./App.css";

export const App = () => {

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
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
        path:"/contact",
        element:<Contact/>,
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