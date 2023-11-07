import {RouterProvider, createBrowserRouter,} from "react-router-dom";
import Layout from "../Layout/Layout";

import Adduser from "../AddUser/Adduser";
import UpdateUser from "../UpdateUser/UpdateUser";
import Home from "../Home/Home";


const Router = () => {
const router=createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        
        children: [
          {
            path: "/",
            element: <Home />,
            loader:()=>fetch("http://localhost:3001/users")
           
           
          },
          {
            path: "/adduser",
            element: <Adduser />,
            
           
          },
          
          {
            path: "/updateuser/:id",
            element: <UpdateUser />,
            loader:({params})=>fetch(`http://localhost:3001/users/${params.id}`)
           
          },
          
        ],
      },
])


  return (
    <div>
     <RouterProvider router={router} />

    </div>
  );
}

export default Router;
