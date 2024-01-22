import { Outlet } from 'react-router-dom';
import NavigationBar from '../navigationBar/NavigationBar';

const HomeLayout = () => {
    return (
        <>
            <main className="flex h-[100lvh]  min-h-screen ">
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;
