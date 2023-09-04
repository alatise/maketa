import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const LightboxMobile = ({ images, closeLightbox, currentIndex }) => {
  const [lightboxIndex, setLightboxIndex] = useState(currentIndex);

  const prevImage = () => {
    setLightboxIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="md:hidden w-full">
      <span className="bg-white w-9 h-9 rounded-full absolute top-1/2 -left-4 flex items-center justify-center">
        <FaAngleLeft
          size={16}
          className="text-[#9EA0A1] hover:text-[#CE651B] cursor-pointer"
          onClick={prevImage}
        />
      </span>
      <img
        src={images[lightboxIndex].original}
        alt={`Product ${lightboxIndex + 1}`}
        className="rounded-lg"
      />
      <span className="bg-white w-9 h-9 rounded-full absolute top-1/2 -right-4 flex items-center justify-center">
        <FaAngleRight
          size={16}
          className="text-[#9EA0A1] hover:text-[#CE651B] cursor-pointer"
          onClick={nextImage}
        />
      </span>
    </div>
  );
};

export default LightboxMobile;
