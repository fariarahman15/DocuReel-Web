export function Cinematography() {
  return (
    <div className="flex items-center ">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto lg:pl-20">
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Cinematography
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
         {` Don't let your uses guess by attaching tooltips and popoves to any
          element. Just make sure you enable them first via JavaScript.`}
        </p>
      </div>
      <div class="container mx-auto lg:px-20 py-2 lg:pr-20 lg:py-16 ">
        <video
          src={"/resources/videos/video_3.mp4"}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
}
