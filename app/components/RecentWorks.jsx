"use client";

import Thumbnail from "./Cards/Thumbnail";

const recentWorksList = [
  { image: "/resources/images/KM_05670.jpg", title: "Joy X Roza" },
  { image: "/resources/images/KM_05670.jpg", title: "Another Title" },
  { image: "/resources/images/KM_05670.jpg", title: "Third Title" },
];

export function RecentWorks() {
  return (
    <section className="pb-20 bg-gray-300 -mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {recentWorksList.map((item, index) => (
            <div
              key={index}
              className={`w-full md:w-4/12 px-4 text-center ${
                index === 1 ? "lg:pt-6" : "lg:pt-12"
              }`}
            >
              <Thumbnail image={item.image} title={item.title} />
            </div>
          ))}
        </div>
        <h3 className="-mt-5 text-black text-center text-2xl font-bold ">
          Recent Works
        </h3>
      </div>
    </section>
  );
}
