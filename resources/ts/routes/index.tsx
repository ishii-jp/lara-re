import Example from '../components/Example';
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Example />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Routes;
