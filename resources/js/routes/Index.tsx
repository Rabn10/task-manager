import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../modules/auth/AuthLayout";
import React from "react";
// import Dashboard from "../modules/dashboard/Dashboard";
import Main from "../modules/Main";

const MainRoutes = () => {

    const token = sessionStorage.getItem("token");
    const isLogin = token !== null;
    return (
        <Routes>
            <Route path="/*"
                element={!isLogin ? <AuthLayout /> : <Navigate to="/dashboard" replace />} />

            <Route
                path="dashboard/*"
                element={isLogin ? <Main /> : <Navigate to="/dashboard" replace />} />
        </Routes>
    );
};

export default MainRoutes;