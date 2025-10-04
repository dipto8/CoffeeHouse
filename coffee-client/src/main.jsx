import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./componenets/UpdateCoffee.jsx";
import AddCoffee from "./componenets/AddCoffee.jsx";
import Signup from "./componenets/Signup.jsx";
import Login from "./componenets/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./componenets/Users.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/deleteCoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: ()=>fetch('http://localhost:5000/user')
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
