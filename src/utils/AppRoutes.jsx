import React from "react";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard"
import Edit from "../Pages/Edit";
import AddBook from '../Pages/AddBook'
import { Navigate } from "react-router-dom";
import TopBar from "../Components/TopBar";
import FullDetails from "../Components/FullDetails";


const AppRoutes = [
  {
    path: "/",
    exact: true,
    element: <> <TopBar/> <Home /> </>,
  },
  {
    path: "/dashboard",
    exact: true,
    element: <> <TopBar/> <Dashboard/> </>,
  },
  {
    path: "/edit/:id",
    exact: true,
    element: <> <TopBar/> <Edit /> </>,
  },
  {
    path: "/add-book",
    exact: true,
    element: <> <TopBar/> <AddBook /> </>,
  },
  {
    path: "/full-details/:id",
    exact: true,
    element: <> <TopBar/> <FullDetails /> </>,
  },
  {
    path: "/*",
    exact: true,
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;