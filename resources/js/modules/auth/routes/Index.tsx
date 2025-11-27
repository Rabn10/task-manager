import Login from "../pages/login";
import React from "react";
import Register from "../pages/register";

export const AuthRoutes = [
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
]