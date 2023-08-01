import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import "../index.css";

const LightboxGallery = ({ images, currentIndex, onCloseRequest }) => {
  const [lightboxIndex, setLightboxIndex] = useState(currentIndex);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Product ${index + 1}`}
            onClick={() => openLightbox(index)}
            className={
              index === lightboxIndex
                ? "border-2 border-[#CE651B] rounded-lg"
                : "rounded-lg"
            }
          />
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-10 flex-col">
          <div className="open-lightbox flex flex-col">
            <div className="relative">
              <FaTimes
                size={16}
                className="absolute -top-8 right-0 text-white hover:text-[#CE651B] cursor-pointer"
                onClick={closeLightbox}
              />
              <span className="bg-white w-9 h-9 rounded-full absolute top-1/2 -left-4 flex items-center justify-center ">
                <FaAngleLeft
                  size={16}
                  className="text-[#9EA0A1] hover:text-[#CE651B] cursor-pointer  "
                  onClick={prevImage}
                />
              </span>

              <img
                src={images[lightboxIndex].original}
                alt={`Product ${lightboxIndex + 1}`}
                className="rounded-lg"
              />
              <span className=" bg-white w-9 h-9 rounded-full absolute top-1/2 -right-4 flex items-center justify-center">
                <FaAngleRight
                  size={16}
                  className="text-[#9EA0A1] hover:text-[#CE651B] cursor-pointer "
                  onClick={nextImage}
                />
              </span>
            </div>

            <div className="flex justify-center items-center mt-6">
              <div className="grid grid-cols-4 gap-6 w-4/5  ">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.thumbnail}
                    alt={`Product ${index + 1}`}
                    onClick={() => setLightboxIndex(index)}
                    className={
                      index === lightboxIndex
                        ? "border-2 border-[#CE651B] rounded-lg  "
                        : "rounded-lg "
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LightboxGallery };
