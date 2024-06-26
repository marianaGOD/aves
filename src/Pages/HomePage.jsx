import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CContainer,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import "../Styles/HomePageStyles.scss";

import hpbird from "../assets/corujahp2_crop.png";
import mobile_bg from "../assets/backgrounds/mobile_home_bg.png";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const nav = useNavigate();

  return (
    <div className="homepage-container">
      <img
        src={hpbird}
        alt="Decorative background"
        className="background-image"
      />
      <CContainer fluid className="homepage-hero">
        <img src={mobile_bg} alt="" className="mobile-bg" />
        <h2 className="text-animate" style={{ "--animation-delay": "0.3s" }}>
          Aves do Oeste <span style={{ fontSize: "40%" }}>by TM</span>
        </h2>
        <h6 className="text-animate" style={{ "--animation-delay": "0.6s" }}>
          <i className="text-animate" style={{ "--animation-delay": "0.9s" }}>
            Uma parceria especial entre o homem e a ave de presa.
          </i>
        </h6>
        <br />
        <CButton
          className="text-animate"
          style={{ "--animation-delay": "1.2s" }}
          color="light"
          onClick={() => nav("/contactos")}
        >
          Saiba Mais
        </CButton>
      </CContainer>

      <CModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        alignment="center"
        className="contact-modal"
      >
        <CModalHeader className="modal-header">
          <CModalTitle>Contactos</CModalTitle>
        </CModalHeader>
        <CModalBody className="modal-body">
          <ul>
            <li>
              📧
              <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com</a>
            </li>
            <li>
              💬 <a href="https://wa.me/913919838">913 919 838</a>
            </li>
          </ul>
        </CModalBody>
        <CModalFooter className="c-modal-footer">
          <i style={{ fontSize: "0.75em" }}>
            chamada para a rede móvel nacional
          </i>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default HomePage;
