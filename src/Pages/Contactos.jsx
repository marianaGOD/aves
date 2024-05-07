import React from "react";
import { CContainer } from "@coreui/react";
import "../Styles/ContactosStyles.scss";

export default function Contactos() {
  return (
    <div className="contact-container">
      <CContainer className="contact-box">
        <div className="contact-text">
          <h3>Email</h3>
          <p>example@example.com</p>
        </div>
      </CContainer>
      <CContainer className="contact-box">
        <div className="contact-text">
          <h3>Telephone</h3>
          <p>+1234567890</p>
        </div>
      </CContainer>
    </div>
  );
}

