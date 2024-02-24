import Image from "next/image";
import kmImageSrc from "../../../public/resources/images/KM_05670.jpg";

export function PictureBanner() {
  return (
    <div className=" max-h-[400px] object-cover  w-full">
      <Image src={kmImageSrc} alt="thumbnail" />
    </div>
  );
}
