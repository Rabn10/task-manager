import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

function App() {
    return <div>Hello React in Laravel 12!</div>;
}

const appElement = document.getElementById('app');
if (appElement) {
    ReactDOM.createRoot(appElement).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}