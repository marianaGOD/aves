import React from "react";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardImage,
  CButton,
} from "@coreui/react";
import "../Styles/AvesDisponiveisStyles.scss";
import eagle from "../assets/goldeneagle.jpg";
import falcon from "../assets/peregrinefalcon.jpg";
import owl from "../assets/barnowl.jpg";

export default function AvesDisponiveis() {
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
    <div className="available-whole">
      <CContainer className="aves-container">
        <CRow>
          {birds.map((bird) => (
            <CCol md={3} key={bird.id} className="my-2">
              <CCard>
                <CCardImage orientation="top" src={bird.imageUrl} />
                <CCardBody>
                  <CCardTitle>{bird.name}</CCardTitle>
                  <CCardText>{bird.description}</CCardText>
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
