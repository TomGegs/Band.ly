import { Outlet } from 'react-router-dom';
import NavigationBar from '../navigationBar/NavigationBar';

const HomeLayout = () => {
    return (
        <>
            <NavigationBar />
            <main className="flex h-[100lvh]  min-h-screen bg-red-300 ">
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;
