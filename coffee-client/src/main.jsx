import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./componenets/UpdateCoffee.jsx";
import AddCoffee from "./componenets/AddCoffee.jsx";
import Signup from "./componenets/Signup.jsx";
import Login from "./componenets/Login.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    loader: ()=>fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/deleteCoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
  {
    path:"/signup",
    element:<Signup></Signup>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
