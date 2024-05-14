import React from "react";
import { CContainer, CButton } from "@coreui/react";
import "../Styles/ContactosStyles.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import bg from "../assets/clearbg.png";
import coruja from "../assets/contactsbg_crop.png";

export default function Contactos() {
  
  return (
    <div className="contact-container">
      {/*
       <div className="img-bckground">
        <img src={bg} alt="" />
      </div>
       */}

      <div className="img-coruja">
        <img src={coruja} alt="" />
      </div>
      <CContainer className="contact-box">
        <div className="contact-text">
          <HiOutlineMailOpen style={{ fontSize: "2rem" }} />
          <p></p>
          <p>
            <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com</a>
          </p>
        </div>
      </CContainer>
      <CContainer className="contact-box">
        <div className="contact-text">
          <BsFillTelephoneFill style={{ fontSize: "2rem" }} />
          <p></p>
          <p>
            Serviços Técnicos e Orçamentos:{" "}
            <strong>
              <a href="tel:913919838">913 919 838</a>
            </strong>
            *
          </p>
          <p>
            Serviços Administrativos e Faturação:{" "}
            <strong>
              <a href="tel:966898875">966 898 875</a>
            </strong>
            *
          </p>
          <i>*chamada para a rede móvel nacional</i>
        </div>
      </CContainer>
      <CContainer className="social-media-buttons">
        <CButton
          className="social-button"
          href="https://www.facebook.com/p/Aves-do-Oeste-by-TM-100063669277345"
        >
          <FaFacebookF />
        </CButton>
        <CButton
          className="social-button"
          href="https://www.instagram.com/avesdooeste.bytm/"
        >
          <FaInstagram />
        </CButton>
        <CButton
          className="social-button"
          href="https://www.linkedin.com/company/aves-do-oeste-by-tm/"
        >
          <FaLinkedinIn />
        </CButton>
      </CContainer>
    </div>
  );
}
