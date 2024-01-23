import bandlyVideoBg from '../../assets/bandlyVideoBg.mp4';

const HeroSection = () => {
    const videoBg = bandlyVideoBg;
    return (
        <div className="bg-slate-black relative flex h-full flex-col rounded-2xl border-2 border-muted-foreground">
            <video
                src={videoBg}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                className="absolute z-0 h-full w-full overflow-hidden rounded-2xl object-cover blur-[6px] brightness-50"
            ></video>
            <div className="relative flex w-full justify-start p-10 text-xl text-white ">
                <p className="transition-all hover:scale-[1.05] ">
                    ________Bandly
                </p>
            </div>
            <div className="relative z-10 mx-auto flex h-full w-full flex-col justify-end pb-10 pl-10 text-start">
                <h1 className="font-mono font-black leading-snug lg:text-[4rem]">
                    Harmonising Tours
                    <br />
                    Amplifying Savings
                </h1>
                <div className="text-lg leading-loose text-secondary">
                    Manage your band's financial data, analysis and forecasting in one place.
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
