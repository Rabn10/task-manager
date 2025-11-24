import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./routes/Index";
export const AuthLayout = () => {
    return (
        <main>
            <Routes>
                {AuthRoutes.map((route, index) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
                <Route path="*" element={<Navigate to="login" replace />} />
            </Routes>
        </main>
    );
}