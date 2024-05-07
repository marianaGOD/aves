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
import hpbird from "../assets/avehomepage1.png"

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
        <h2>Aves do Oeste by TM</h2>
        <h6>
          <i>
            Um pássaro a voar: é ir com os olhos a voar com ele;
            <br /> ir sobre os montes, sobre os rios, sobre os mares;
            <br /> dar a volta ao mundo e continuar;
            <br /> é ter um motivo de viver — é não ter chegado ainda.
          </i>
        </h6>
        <i>Branquinho da Fonseca</i>
        <CButton color="light" onClick={() => setIsModalVisible(true)}>
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
          <i>chamada para a rede móvel nacional</i>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default HomePage;
