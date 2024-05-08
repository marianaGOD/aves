import React, { useState } from "react";
import "../Styles/AvesRapinaStyles.scss";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import eagle from "../assets/goldeneagle.jpg";
import falcon from "../assets/peregrinefalcon.jpg";
import owl from "../assets/barnowl.jpg";

export default function AvesRapina() {
  const birds = [
    {
      id: 1,
      name: "Golden Eagle",
      description:
        "An impressive bird of prey known for its agility and powerful flight.",
      price: "$1200",
      imageUrl: eagle,
    },
    {
      id: 2,
      name: "Peregrine Falcon",
      description:
        "Famous for its speed, this falcon is a highly sought-after bird for falconry.",
      price: "$1500",
      imageUrl: falcon,
    },
    {
      id: 3,
      name: "Barn Owl",
      description:
        "Known for its distinctive face and silent flight, perfect for novice trainers.",
      price: "$900",
      imageUrl: owl,
    },
    {
      id: 3,
      name: "Barn Owl",
      description:
        "Known for its distinctive face and silent flight, perfect for novice trainers.",
      price: "$900",
      imageUrl: owl,
    },
    {
      id: 3,
      name: "Barn Owl",
      description:
        "Known for its distinctive face and silent flight, perfect for novice trainers.",
      price: "$900",
      imageUrl: owl,
    },
    {
      id: 3,
      name: "Barn Owl",
      description:
        "Known for its distinctive face and silent flight, perfect for novice trainers.",
      price: "$900",
      imageUrl: owl,
    },
  ];
  return (
    <div className="aves-rapina">
      <div className="info-box">
        <h1>Aves de Rapina</h1>
        <p>
          Somos criadores certificados pelo <br />
          <span style={{ fontWeight: "bold", color: "#daa520" }}>
            Instituto da Conservação da Natureza e das Florestas{" "}
          </span>
          . <br />
          Solicite aves disponíveis através do:
        </p>
        <ul>
          <li>
            📧 <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com</a>
          </li>
          <li>
            💬 <a href="https://wa.me/913919838">913 919 838</a>
          </li>
        </ul>
      </div>
      <CContainer className="aves-container">
        <h2>Aves Disponíveis para Venda</h2>
        <CRow>
          {birds.map((bird) => (
            <CCol md={3} key={bird.id} className="my-2">
              <CCard>
                <CCardImage orientation="top" src={bird.imageUrl} />
                <CCardBody>
                  <CCardTitle>{bird.name}</CCardTitle>
                  <CCardText>{bird.description}</CCardText>
                  <div>Price: {bird.price}</div>
                  <CButton color="light">Contacte-nos</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </div>
  );
}
