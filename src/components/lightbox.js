import React, { useState } from "react";

const LightboxGallery = ({ images }) => {
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Product ${index + 1}`}
            onClick={() => openLightbox(index)}
            className={
              index === lightboxIndex ? "border-2 border-[#CE651B]" : ""
            }
          />
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-10">
          <span
            className="absolute top-4 right-6 text-white text-2xl cursor-pointer"
            onClick={closeLightbox}
          >
            &times;
          </span>
          <img
            src={images[lightboxIndex].original}
            alt={`Product ${lightboxIndex + 1}`}
            className="max-w-4/5 max-h-4/5"
          />
          <div className="flex justify-center items-center mt-4">
            <span
              className="text-white text-4xl cursor-pointer"
              onClick={prevImage}
            >
              &#8249;
            </span>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnail}
                  alt={`Product ${index + 1}`}
                  onClick={() => setLightboxIndex(index)}
                  className={
                    index === lightboxIndex ? "border-2 border-[#CE651B]" : ""
                  }
                />
              ))}
            </div>
            <span
              className="text-white text-4xl cursor-pointer"
              onClick={nextImage}
            >
              &#8250;
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export { LightboxGallery };
