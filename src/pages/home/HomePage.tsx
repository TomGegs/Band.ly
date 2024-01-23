import { LoginForm } from './LoginForm';

const HomePage = () => {
    return (
        <div className="grid h-full w-full grid-cols-2">
            <div className="col-span-1 flex h-full p-4">
                <div className=" h-full w-full rounded-2xl bg-white"></div>
            </div>
            <div className="col-span-1 mx-auto flex h-full flex-col justify-center gap-y-4 rounded-r-2xl bg-black text-center text-white">
                <LoginForm />
            </div>
        </div>
    );
};

export default HomePage;
