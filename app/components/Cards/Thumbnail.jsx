import Image from "next/image";

const Thumbnail = ({ image, title }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg max-h-[320px]">
      <div className="px-4 py-5 flex-auto">
        <div className="object-cover">
          <Image src={image} alt="thumbnail" width={500} height={500} />
        </div>
        <h6 className="text-xl font-semibold mt-2">{title}</h6>
      </div>
    </div>
  );
};

export default Thumbnail;
