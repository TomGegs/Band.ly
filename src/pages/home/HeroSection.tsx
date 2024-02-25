import bandlyVideoBg from '../../assets/bandlyVideoBg.mp4';
import videoOverlayLines from '../../assets/videoOverlayLines.webp';
const HeroSection = () => {
    const videoBg = bandlyVideoBg;
    const overlay = videoOverlayLines;
    return (
        <div className="bg-slate-black relative mx-auto flex h-full w-[90%] flex-col rounded-2xl border-2 border-muted-foreground">
            <video
                src={videoBg}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                className="absolute z-0 h-full w-full overflow-hidden rounded-2xl object-cover blur-[6px] brightness-50"
            ></video>
            <img
                src={overlay}
                alt=""
                className="absolute z-0 h-full w-full object-cover opacity-5"
            />
            <h1 className="relative flex h-full w-full items-center justify-center font-Alexandria text-5xl text-white transition-all  hover:scale-[1.05] ">
                BAND.IT
            </h1>
            <h2 className="relative flex w-full items-end justify-start pb-6 pl-10 text-left  font-Alexandria text-[2.6rem] italic leading-snug text-white">
                ROCK YOUR TOURS
                <br />
                NOT YOUR SAVINGS
            </h2>
        </div>
    );
};

export default HeroSection;
