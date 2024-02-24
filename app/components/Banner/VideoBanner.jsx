export function VideoBanner() {
  return (
    <div className="h-[800px] relative">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-6 h-[80px] ">
        <svg
          className="absolute bottom-0 overflow-hidden "
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="0 0 2560 0 2560 100"
          ></polygon>
        </svg>
      </div>

      <video
        src={"/resources/videos/video_2.mp4"}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
}
