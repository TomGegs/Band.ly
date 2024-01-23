import HeroSection from './HeroSection';
import { LoginForm } from './LoginForm';

const HomePage = () => {
    return (
        <div className="flex h-full w-full flex-row">
            <div className="mx-auto flex h-full w-full flex-col justify-center gap-y-4 rounded-r-2xl bg-black p-12 text-center text-white">
                <HeroSection />
            </div>
            <div className="mx-auto flex h-full w-full flex-col justify-center gap-y-4 rounded-r-2xl bg-black text-center text-white">
                <LoginForm />
            </div>
        </div>
    );
};

export default HomePage;
