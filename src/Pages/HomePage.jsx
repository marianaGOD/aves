import React, { useState } from "react";
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

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="homepage-container">
      <img
        src={hpbird}
        alt="Decorative background"
        className="background-image"
      />
      <CContainer fluid className="homepage-hero">
        <h2 className="text-animate" style={{ "--animation-delay": "0.3s" }}>
          Aves do Oeste by TM
        </h2>
        <h6 className="text-animate" style={{ "--animation-delay": "0.6s" }}>
          <i className="text-animate" style={{ "--animation-delay": "0.9s" }}>
            Um pássaro a voar: é ir com os olhos a voar com ele;
            <br /> ir sobre os montes, sobre os rios, sobre os mares;
            <br /> dar a volta ao mundo e continuar;
            <br /> é ter um motivo de viver — é não ter chegado ainda.
          </i>
        </h6>
        <i className="text-animate" style={{ "--animation-delay": "0.9s" }}>
          Branquinho da Fonseca
        </i>
        <br />
        <CButton
          className="text-animate"
          style={{ "--animation-delay": "1.2s" }}
          color="light"
          onClick={() => setIsModalVisible(true)}
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
