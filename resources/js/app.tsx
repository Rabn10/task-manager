import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Index";
import { MantineProvider } from "@mantine/core";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://127.0.0.1:8000/graphql',
        credentials: 'include',
    }),
    cache: new InMemoryCache(),
})

function App() {
    return (
        <MantineProvider>
            <ApolloProvider client={client}>
                <MainRoutes />
            </ApolloProvider>
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