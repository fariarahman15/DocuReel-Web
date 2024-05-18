import Thumbnail from "../Cards/Thumbnail";

const AlbumList = [
  { image: "/resources/albums/joy-roza/joy-roza-4.jpg", title: "Joy X Roza" },
  {
    image: "/resources/albums/rinta-hira/rinta-hira-5.jpg",
    title: "Rinta X Hira",
  },
  {
    image: "/resources/albums/tamim-sadia/tamim-sadia-28.jpg",
    title: "Tamim X Sadia",
  },
  {
    image: "/resources/albums/anika-tawab/anika-tawab-4.jpg",
    title: "Anika X Tawab",
  },
  {
    image: "/resources/albums/rodela-aurko/rodela-aurko-6.jpg",
    title: "Rodela X Aurko",
  },
];

export function Album() {
  return (
    <div className="flex flex-wrap">
      {AlbumList.map((item, index) => (
        <div key={index} className="w-full md:w-4/12 px-4 text-center lg:pt-6">
          <Thumbnail image={item.image} title={item.title} />
        </div>
      ))}
    </div>
  );
}
