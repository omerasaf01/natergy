import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/pages/App";
import AuthProvider from "./components/auth/authProvider";
import Login from "./components/pages/login";
import { Provider } from "react-redux";
import store from "./components/app/store";
import Logout from "./components/pages/logout";
import Discovery from "./components/pages/discovery";
import Top from "./components/pages/top";
import Vote from "./components/pages/vote";
import Add from "./components/pages/add";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider authStatu={false} element={<App />} />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
    {
        path: "/discovery",
        element: <Discovery />,
    },
    {
        path: "/top",
        element: <Top />,
    },
    {
        path: "/vote",
        element: <Vote />,
    },
    {
        path: "/add",
        element: <AuthProvider authStatu={true} element={<Add />} />,
    }
]);

root.render(
    <React.StrictMode>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: "dark",

                shadows: {
                    md: "1px 1px 3px rgba(0, 0, 0, .25)",
                    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
                },

                headings: {
                    fontFamily: "Roboto, sans-serif",
                    sizes: {
                        h1: { fontSize: "2rem" },
                    },
                },
            }}
        >
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </MantineProvider>
    </React.StrictMode>
);
