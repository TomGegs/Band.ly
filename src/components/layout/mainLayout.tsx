import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <main className="flex h-screen max-h-screen flex-row bg-black">
                <div className="h-full w-full max-w-[15%] border-2 text-white ">
                    Sidebar
                </div>

                <div className="flex h-full w-full flex-col border  border-red-200">
                    <div className="h-[5%] w-full border-2 border-blue-500 text-white">
                        NAVBAR
                    </div>
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default MainLayout;
