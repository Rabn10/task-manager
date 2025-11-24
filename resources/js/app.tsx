import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Index";
import { MantineProvider } from "@mantine/core";

function App() {
    return (
        <MantineProvider>
            <MainRoutes />
        </MantineProvider>

    );
}

const appElement = document.getElementById('app');
if (appElement) {
    ReactDOM.createRoot(appElement).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}