import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Example from '../components/Example';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/example',
            element: <Example />
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]);

    return <RouterProvider router={router} />
}

export default Routes;
