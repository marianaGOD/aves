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
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <CContainer fluid className="bg-light">
        <NavBar />
      </CContainer>

      {/* Hero Section */}
      <CContainer fluid className="homepage-hero">
        <h2>Welcome to My Website</h2>
        <p>Get to know more about our services and offerings.</p>
        <CButton color="light">Learn More</CButton>
      </CContainer>

      {/* Content Containers */}
      <CContainer className="homepage-cards">
        <CRow>
          <CCol md={4}>
            <CCard>
              <CCardBody>
                <CCardTitle>Feature 1</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton color="primary">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4}>
            <CCard>
              <CCardBody>
                <CCardTitle>Feature 2</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton color="primary">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4}>
            <CCard>
              <CCardBody>
                <CCardTitle>Feature 3</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton color="primary">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default HomePage;
