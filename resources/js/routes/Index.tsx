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
            <Route path="auth/*"
                element={!isLogin ? <AuthLayout /> : <Navigate to="/" replace />} />

            <Route
                path="/*"
                element={isLogin ? <Main /> : <Navigate to="/auth" replace />} />
        </Routes>
    );
};

export default MainRoutes;