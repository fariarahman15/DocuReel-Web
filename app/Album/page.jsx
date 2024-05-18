"use client";

const imageList = [
  { image: "/resources/albums/joy-roza/joy-roza-1.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-2.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-3.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-4.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-5.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-6.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-7.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-8.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-9.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-10.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-11.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-12.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-13.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-14.jpg" },
  { image: "/resources/albums/joy-roza/joy-roza-15.jpg" },
];

export default function Album() {
  return (
    <>
      <div className="columns-3 gap-4 px-4 mx-auto lg:px-20">
        {imageList.map((img, index) => (
          <img
            key={index}
            className="w-full aspect-square p-5 border rounded-lg shadow-md"
            src={img.image}
          />
        ))}
      </div>
    </>
  );
}
