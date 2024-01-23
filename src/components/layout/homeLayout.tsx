import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <main className="flex h-screen max-h-screen bg-black">
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;
