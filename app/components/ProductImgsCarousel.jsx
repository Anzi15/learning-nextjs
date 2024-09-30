"use client"; // This directive is required for client-side components

import Image from "next/image";
import React, { useState } from "react";

const ProductImgsCarousel = ({ productImages, thumbnails }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [isImgZoomed, setIsImgZoomed] = useState(false);

  const zoomImage = () => {
    setIsImgZoomed(!isImgZoomed);
  };

  return (
    <div className="md:px-8 px-4 md:w-1/3 w-full md:block">
      {/* Active Image Display */}
      <div className="activeImg relative w-full aspect-square">
        {productImages.map((img, i) => (
          <Image
            src={img}
            key={i}
            alt="Al Zehra Perfumes"
            className={`w-full aspect-square rounded-md skeleton-loading absolute transition-opacity duration-300 ${
              i === activeImg ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            onClick={zoomImage}
            width={720}
            height={720}
            priority={true}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="w-full flex py-4 gap-4">
        {thumbnails.map((img, i) => (
          <button
            className={`w-[32%] hover:opacity-85 transition-all rounded-md ${
              i == activeImg && "border-2 border-brandRed"
            }`}
            key={i}
            onClick={() => setActiveImg(i)}
          >
            <Image
              src={img}
              className="rounded-md w-full skeleton-loading aspect-square"
              alt=""
              width={200}
              height={200}
              priority={true}
            />
          </button>
        ))}
      </div>

      {/* Zoomed Image Modal */}
      {isImgZoomed && (
        <div className="w-screen h-screen absolute inset-0 bg-black opacity-30 flex items-center justify-center">
          <img
            src={productImages[activeImg]}
            alt="Product"
            className="max-w-full max-h-full"
            onClick={zoomImage} // To close the zoom on click
          />
        </div>
      )}
    </div>
  );
};

export default ProductImgsCarousel;
