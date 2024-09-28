import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import App from "./App";

const routes = [
    {
        path: '/',
        element: (
            <App/>
        ),
    },
    {
        path: '/about',
        element: (
            <About/>
        ),
    },
    {
        path: '/contact',
        element: (
            <Contact/>
        ),
    },
    {
        path: '/home',
        element: (
            <Home/>
        ),
    },
];

const router = createBrowserRouter(routes);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);

