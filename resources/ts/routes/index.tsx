import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleView from '../views/ExampleView';
import HomeView from '../views/HomeView';
import NotFoundView from '../views/NotFoundView';
import { getUser } from '../features/api/getUser';

function Routes() {
    useEffect(() => {
        const init = async() => {
            const user = await getUser();
            console.log('user', user);
            // TODO 取得したユーザー情報をstateにセットし、後続処理でログイン画面へリダイレクトするか否かを決めるようにする。
            //      将来的にはReduxなどで毎回APIを叩かなくていいよ様にする必要がある。
        }
        void init();
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeView />
        },
        {
            path: '/home',
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
