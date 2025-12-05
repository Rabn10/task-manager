import Dashboard from "../dashboard/Dashboard";
import React from "react";
import Project from "../project/Project";
const NavRoutes = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/project',
        element: <Project />
    }
];

export default NavRoutes;