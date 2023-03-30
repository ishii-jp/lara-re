import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleView from '../views/ExampleView';
import HomeView from '../views/HomeView';
import NotFoundView from '../views/NotFoundView';

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeView />
        },
        {
            path: '/example',
            element: <ExampleView />
        },
        {
            path: '*',
            element: <NotFoundView />
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
