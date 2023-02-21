import React, { useEffect, useState } from "react";

import "./HeaderCarousel.css";

import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

import image1 from "../../images/header/image1.jpg";
import image2 from "../../images/header/image2.jpg";
import image3 from "../../images/header/image3.jpg";
import image4 from "../../images/header/image4.jpg";
import image5 from "../../images/header/image5.jpg";

const images = [image1, image2, image3, image4, image5];

const HeaderCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState(images);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < allImages.length - 1 ? selectedImage + 1 : 0
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img
          className="carousel-image"
          src={allImages[selectedImage]}
          alt={selectedImage}
        />
        <button
          className="carousel-btn prev"
          onClick={() => {
            if (selectedImage > 0) setSelectedImage(selectedImage - 1);
          }}
        >
          <FcPrevious className="icon" />
        </button>
        <button
          className="carousel-btn next"
          onClick={() => {
            selectedImage < allImages.length - 1
              ? setSelectedImage(selectedImage + 1)
              : setSelectedImage(0);
          }}
        >
          <FcNext className="icon" />
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousel;
