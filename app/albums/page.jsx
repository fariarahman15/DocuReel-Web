"use client";

import { Album } from "../components/Albums/Albums";

const albumList = [
  { image: "/resources/images/KM_05670.jpg", title: "Joy X Roza" },
  { image: "/resources/images/KM_05670.jpg", title: "Noman X Esha" },
  { image: "/resources/images/KM_05670.jpg", title: "Kaka X Mona" },
  { image: "/resources/images/KM_05670.jpg", title: "Joy X Roza" },
  { image: "/resources/images/KM_05670.jpg", title: "Noman X Esha" },
  { image: "/resources/images/KM_05670.jpg", title: "Kaka X Mona" },
];

export default function Albums() {
  return (
    <div>
      <img
        src="/resources/albums/tamim-sadia/tamim-sadia-29.jpg"
        alt=""
        className="max-h-[350px] w-full object-cover"
      />

      <div className="pt-10 pb-20 ">
        <h1 className=" text-center text-4xl font-semibold mb-10"> Albums</h1>

        <div className="px-20 bg-gray-300 py-10">
          <section className="pb-20 bg-gray-300 ">
            <div className="container mx-auto px-4">
              {/* <div className="flex flex-wrap justify-center">
                {albumList.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-4/12 px-4 text-center lg:pt-6"
                  >
                    <Thumbnail image={item.image} title={item.title} />
                  </div>
                ))}
              </div> */}
              <Album />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
