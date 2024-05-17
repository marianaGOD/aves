import React from "react";
import "../Styles/GaleriaStyles_2.scss";
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
  return (
    <div className="gallery">
      <div className="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car1}
              alt="Portrait by Jessica Felicio"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car2}
              alt="Portrait by Oladimeji Odunsi"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car3}
              alt="Portrait by Alex Perez"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>
      </div>

      <div className="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car4}
              alt="Portrait by Hikiapp"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car5}
              alt="Portrait by Ivana Cajina"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car6}
              alt="Portrait by Jeffery Erhunse"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>
      </div>

      <div className="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car7}
              alt="Portrait by Mari Lezhava"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car8}
              alt="Portrait by Ethan Haddox"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src={car9}
              alt="Portrait by Amir Geshani"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              by Aves do Oeste
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
}
