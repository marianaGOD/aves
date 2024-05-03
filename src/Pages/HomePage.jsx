import React from "react";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "../Styles/HomePageStyles.scss";


const HomePage = () => {
  return (
    <div>
      <CContainer fluid className="homepage-hero">
        <h2>Aves do Oeste by TM</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <CButton color="light">Saiba Mais</CButton>
      </CContainer>

    </div>
  );
};

export default HomePage;
