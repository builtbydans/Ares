import { useState } from "react";

const Hero = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <section
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden text-white transition-all duration-700 ${
        isExiting ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <video
        src="/videos/ares_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale brightness-110"
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl">aresu</h1>
        <p>// AW Collection 25/26</p>
        <button onClick={handleClick} className="mt-6 px-5 transition-all">
          enter
        </button>
      </div>
    </section>
  );
};

export default Hero;
