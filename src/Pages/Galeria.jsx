import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import "../Styles/GaleriaStyles.scss";
import car1 from "../assets/car1_crop.jpg";
import car2 from "../assets/car2_crop.jpg";
import car3 from "../assets/car3_crop.jpg";
import car4 from "../assets/car4_crop.jpg";
import car5 from "../assets/car5_crop.jpg";
import car6 from "../assets/car6.jpg";
import car7 from "../assets/car7.jpg";
import car8 from "../assets/car8.jpg";
import car9 from "../assets/car9.jpg";

export default function Galeria() {
  const birdImages = [
    {
      src: car1,
      alt: "Barn Owl",
      label: "Barn Owl",
      description: "Description for Barn Owl",
    },
    {
      src: car2,
      alt: "Golden Eagle",
      label: "Golden Eagle",
      description: "Description for Golden Eagle",
    },
    {
      src: car3,
      alt: "Peregrine Falcon",
      label: "Peregrine Falcon",
      description: "Description for Peregrine Falcon",
    },
    {
      src: car4,
      alt: "Barn Owl",
      label: "Barn Owl",
      description: "Description for Barn Owl",
    },
    {
      src: car5,
      alt: "Golden Eagle",
      label: "Golden Eagle",
      description: "Description for Golden Eagle",
    },
    {
      src: car6,
      alt: "Peregrine Falcon",
      label: "Peregrine Falcon",
      description: "Description for Peregrine Falcon",
    },
    {
      src: car7,
      alt: "Barn Owl",
      label: "Barn Owl",
      description: "Description for Barn Owl",
    },
    {
      src: car8,
      alt: "Golden Eagle",
      label: "Golden Eagle",
      description: "Description for Golden Eagle",
    },
    {
      src: car9,
      alt: "Peregrine Falcon",
      label: "Peregrine Falcon",
      description: "Description for Peregrine Falcon",
    },
  ];

  return (
    <div className="gallery">
      <div className="carousel-container">
        <CCarousel controls indicators>
          {birdImages.map((image, index) => (
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-50 text-center"
                src={image.src}
                alt={image.alt}
              />
              <CCarouselCaption className="d-none d-md-block">
                <h5>{image.label}</h5>
                <p>{image.description}</p>
              </CCarouselCaption>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      <div className="text-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>
    </div>
  );
}
