import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from '../routes';
import HeaderView from '../views/HeaderView';

if (document.getElementById('app')) {
    const app = document.getElementById("app") as Element;
    const Index = ReactDOM.createRoot(app);

    Index.render(
        <React.StrictMode>
            <HeaderView />
            <Routes />
        </React.StrictMode>
    );
}
