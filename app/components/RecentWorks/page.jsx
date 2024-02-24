import Thumbnail from "./Thumbnail"; // Assuming the Thumbnail component is imported from a separate file

const recentWorksList = [
  { image: "/path/to/image1.jpg", title: "Joy X Roza" },
  { image: "/path/to/image2.jpg", title: "Another Title" },
  { image: "/path/to/image3.jpg", title: "Third Title" },
];

const ThumbnailGallery = () => {
  return (
    <div className="flex flex-wrap">
      {recentWorksList.map((item, index) => (
        <div
          key={index}
          className={`w-full md:w-4/12 px-4 text-center ${
            index === 1 ? "lg:pt-12" : ""
          }`}
        >
          <Thumbnail image={item.image} title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailGallery;
