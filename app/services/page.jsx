"use client";

import Thumbnail from "@/app/components/Cards/Thumbnail";

const serviceList = [
  { image: "/resources/images/KM_05670.jpg", title: "Wedding Photography" },
  { image: "/resources/images/KM_05670.jpg", title: "Birthday Photography" },
  { image: "/resources/images/KM_05670.jpg", title: "Outdoor Photoshoot" },
  { image: "/resources/images/KM_05670.jpg", title: "Wedding Cinematography" },
  { image: "/resources/images/KM_05670.jpg", title: "Birthday Cinematography" },
  { image: "/resources/images/KM_05670.jpg", title: "Outdoor Cinematography" },
  { image: "/resources/images/KM_05670.jpg", title: "Corporate Events" },
];

export default function Services() {
  return (
    <div>
      <img
        src="/resources/images/KM_05670.jpg"
        alt=""
        className="max-h-[350px] w-full object-cover"
      />

      <div className="py-20 ">
        <h1 className=" text-center text-4xl font-semibold mb-10">
          {" "}
          Our Services
        </h1>

        <div className="px-20 bg-gray-300 py-10">
          <section className="pb-20 bg-gray-300 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center">
                {serviceList.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-4/12 px-4 text-center lg:pt-6"
                  >
                    <Thumbnail image={item.image} title={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
