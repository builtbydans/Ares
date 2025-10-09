import { useState } from "react";

const Hero = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <section
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden text-white transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background video */}
      <video
        src="/videos/ares_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale brightness-110"
      />

      {/* Logo in same place as navbar */}
      <h1 className="absolute top-12 left-1/2 -translate-x-1/2 text-3xl tracking-tighter font-bold z-20">
        ares
      </h1>

      {/* Centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white text-center">
        <p>// AW Collection 25/26</p>
        <button
          onClick={handleClick}
          className="mt-6 px-5 transition-transform hover:scale-105"
        >
          enter
        </button>
      </div>
    </section>
  );
};

export default Hero;
