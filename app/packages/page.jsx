"use client";
import { Carousel } from "@material-tailwind/react";

const packages = [
  "/resources/package/1.jpg",
  "/resources/package/2.jpg",
  "/resources/package/3.jpg",
  "/resources/package/4.jpg",
];

export default function Albums() {
  return (
    <div>
      <img
        src="/resources/images/KM_05670.jpg"
        alt=""
        className="max-h-[350px] w-full object-cover"
      />

      <div className="py-20 ">
        <h1 className="text-center text-4xl font-semibold mb-10">Packages</h1>

        <div className="px-20 bg-gray-300 py-10">
          <div className="relative h-[800px] w-full">
            <Carousel
              transition={{ duration: 2 }}
              autoplay={true}
              loop={true}
              className="rounded-xl"
            >
              {packages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
