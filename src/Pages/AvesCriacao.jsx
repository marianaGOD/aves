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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { gql, useQuery } from "@apollo/client";

const GET_EVENT_BIRDS = gql`
  query EventBirds {
    eventBirds {
      id
      title
      description
      images {
        url
      }
    }
  }
`;

export default function AvesCriacao() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { loading, error, data } = useQuery(GET_EVENT_BIRDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="aves-rapina">
      <div className="info-box">
        <h1>As nossas Aves</h1>
        <p>
          Somos detentores de várias espécies de aves de rapina, registados no{" "}
          <span style={{ fontWeight: "bold", color: "#daa520" }}> ICNF. </span>
          <br />
          Em baixo o nosso portfólio de aves disponíveis para serviços e
          eventos.
          <br />
          Mais informações sobre ter a presença das nossas aves no seu evento{" "}
          <br />
          através do email 📧{" "}
          <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com </a>
          <br />
          ou por WhatsApp para o número 💬{" "}
          <a href="https://wa.me/913919838">913 919 838</a>
        </p>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <CContainer className="aves-container">
        <h2>As nossas aves</h2>
        <CRow>
          {data.eventBirds.map((bird) => (
            <CCol md={3} key={bird.id} className="my-2">
              <CCard>
                <CCardImage orientation="top" src={bird.images[0].url} />
                <CCardBody>
                  <CCardTitle>{bird.title}</CCardTitle>
                  <CCardText>{bird.description}</CCardText>
                  <CButton
                    color="light"
                    onClick={() => setIsModalVisible(true)}
                  >
                    Contacte-nos
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
        {/* Modal */}
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
      </CContainer>
    </div>
  );
}
