import Image from "next/image";

const Thumbnail = ({ image, title }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-lg mb-8 w-full">
      <div className="overflow-hidden w-full min-h-[200px] max-h-min relative">
        <Image src={image} alt="thumbnail" fill />
      </div>
      <div>
        {" "}
        <h6 className="text-xl font-semibold mt-2">{title}</h6>
      </div>
    </div>
  );
};

export default Thumbnail;
