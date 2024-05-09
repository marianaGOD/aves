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
import { gql, useQuery } from "@apollo/client";

const GET_SELLING_BIRDS = gql`
  query SellingBirds {
    sellingBirds {
      id
      price
      race
      title
      images {
        url
      }
    }
  }
`;

export default function AvesRapina() {
  const { loading, error, data } = useQuery(GET_SELLING_BIRDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
          {data.sellingBirds.map((bird) => (
            <CCol md={3} key={bird.id} className="my-2">
              <CCard>
                <CCardImage orientation="top" src={bird.images[0].url} />
                <CCardBody>
                  <CCardTitle>{bird.title}</CCardTitle>
                  <CCardText>{bird.race}</CCardText>
                  <div>Price: {bird.price}€</div>
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
