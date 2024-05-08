import React from "react";
import { CContainer, CButton } from "@coreui/react";
import "../Styles/ContactosStyles.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Contactos() {
  return (
    <div className="contact-container">
      <CContainer className="contact-box">
        <div className="contact-text">
          <HiOutlineMailOpen style={{ fontSize: "2rem" }} />
          <p></p>
          <p>avesoeste@gmail.com</p>
        </div>
      </CContainer>
      <CContainer className="contact-box">
        <div className="contact-text">
          <BsFillTelephoneFill style={{ fontSize: "2rem" }} />
          <p></p>
          <p>
            Serviços Técnicos e Orçamentos: <strong>913 919 838</strong>*
          </p>
          <p>
            Serviços Administrativos e Faturação: <strong>966 898 875</strong>*
          </p>
          <i>*chamada para a rede móvel nacional</i>
        </div>
      </CContainer>
      <CContainer className="social-media-buttons">
        <CButton className="social-button" href="https://facebook.com">
          <FaFacebookF />
        </CButton>
        <CButton className="social-button" href="https://instagram.com">
          <FaInstagram />
        </CButton>
        <CButton className="social-button" href="https://linkedin.com">
          <FaLinkedinIn />
        </CButton>
      </CContainer>
    </div>
  );
}
