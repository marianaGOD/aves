import React from "react";
import "../Styles/GaleriaStyles.scss";
import eagle from "../assets/goldeneagle.jpg";
import falcon from "../assets/peregrinefalcon.jpg";
import owl from "../assets/barnowl.jpg";

export default function Galeria() {
  const birdImages = [
    { src: owl, alt: "Barn Owl" },
    { src: eagle, alt: "Golden Eagle" },
    { src: falcon, alt: "Peregrine Falcon" },
  ];

  return (
    <div className="gallery">
      {birdImages.map((image, index) => (
        <div key={index} className="photo">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
