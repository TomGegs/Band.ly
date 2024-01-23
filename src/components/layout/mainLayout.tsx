import React from 'react';
import { Outlet } from 'react-router-dom';

const mainLayout = () => {
    return (
        <main>
            <nav></nav>
            <Outlet />
        </main>
    );
};

export default mainLayout;
