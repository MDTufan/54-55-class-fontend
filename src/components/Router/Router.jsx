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
            loader:()=>fetch("https://backend-ou3o72jwq-mdtufan.vercel.app/users")
           
           
          },
          {
            path: "/adduser",
            element: <Adduser />,
            
           
          },
          
          {
            path: "/updateuser/:id",
            element: <UpdateUser />,
            loader:({params})=>fetch(`https://backend-ou3o72jwq-mdtufan.vercel.app/users/${params.id}`)
           
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
