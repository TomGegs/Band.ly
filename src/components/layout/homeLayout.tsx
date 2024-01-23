import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <main className="flex h-[100lvh] min-h-screen bg-black ">
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;
