const VideoHero = ({ videoSrc }) => {
  return (
    <section className="relative w-full h-[750px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale brightness-75 contrast-125"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">AW 25 Kagawa</h1>
      </div>
    </section>
  );
};

export default VideoHero;
