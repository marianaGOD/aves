import React, { useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCard,
  CModalFooter,
} from "@coreui/react";
import "../Styles/EventosStyles.scss";
import graphcasamentos from "../assets/graphcasamentos.png";

import eagle from "../assets/goldeneagle.jpg";
import falcon from "../assets/peregrinefalcon.jpg";
import owl from "../assets/barnowl.jpg";

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

export default function Eventos() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { loading, error, data } = useQuery(GET_EVENT_BIRDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="eventos-container">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xs={12} md={8} className="controlo-toptitle">
            <h1>Eventos & Presenças</h1>
          </CCol>
        </CRow>
        <CAccordion className="accordion" flush>
          <CAccordionItem className="accordion-item" itemKey={1}>
            <CAccordionHeader className="accordion-header">
              CASAMENTOS
            </CAccordionHeader>
            <CAccordionBody className="accordion-body">
              <p style={{ color: "#daa520" }}>Preçário individual:</p>
              <ul>
                <li>
                  Deslocação: <span style={{ color: "#daa520" }}>0,75€</span>/km
                  (inclui ida e volta e portagens)
                </li>
                <li>
                  Entrega das alianças em voo livre com Águia de Harris –{" "}
                  <span style={{ color: "#daa520" }}>190€</span>
                </li>
                <li>
                  Sessão fotográfica com noivos após cerimónia: com todas as
                  aves selecionadas, até 3h de duração –{" "}
                  <span style={{ color: "#daa520" }}>250€</span>
                </li>
                <li>
                  Sessão fotográfica com convidados após cerimónia: com todas as
                  aves selecionadas (exceto Bufo Real e Águia de Bonelli), até
                  2h de duração – <span style={{ color: "#daa520" }}>250€</span>
                </li>
                <li>
                  Presença durante o evento, como parte de decoração do espaço –
                  <span style={{ color: "#daa520" }}>60€</span>/h
                </li>
                <li>
                  Luva personalizada para noivos –{" "}
                  <span style={{ color: "#daa520" }}>60€</span>/unidade ou{" "}
                  <span style={{ color: "#daa520" }}>100€</span> duas
                </li>
              </ul>
              <br />
              <CButton color="light" onClick={() => setIsModalVisible(true)}>
                Pack Casamentos
              </CButton>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem className="accordion-item" itemKey={2}>
            <CAccordionHeader className="accordion-header">
              EVENTOS CORPORATIVOS
            </CAccordionHeader>
            <CAccordionBody className="accordion-body">
              <p>
                Eventos empresariais, com a possibilidade da presença de
                diversas aves de rapina, bem como de fotografias com as mesmas
                e, dependendo das espécies, passagem à luva dos participantes
                para fotografia individual.
                <br />
                Solicite disponibilidade das aves e orçamento através do e-mail:{" "}
                <br />
                <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com</a>
              </p>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem className="accordion-item" itemKey={3}>
            <CAccordionHeader className="accordion-header">
              EVENTOS TEMÁTICOS
            </CAccordionHeader>
            <CAccordionBody className="accordion-body">
              <p>
                Festas de aniversário, feiras temáticas, bodas de casamento,
                etc.
                <br />
                Solicite disponibilidade das aves e orçamento através do e-mail:{" "}
                <br />
                <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com</a>
              </p>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem className="accordion-item" itemKey={4}>
            <CAccordionHeader className="accordion-header">
              DEMONSTRAÇÕES LÚDICO-PEDAGÓGICAS
            </CAccordionHeader>
            <CAccordionBody className="accordion-body">
              <p>
                Efetuamos apresentações de aves de rapina, com demonstrações de
                voo e de características de cada espécie e seus comportamentos
                naturais, com componente lúdico-pedagógica para grupos,
                especialmente nas faixas etárias mais jovens, com o objetivo de
                sensibilizar para a preservação das espécies e seus habitats.
                Algumas das nossas aves estão sociabilizadas de modo a
                deixarem-se tocar e acariciar, de modo a permitir ao público a
                aproximação e contacto com estes animais selvagens, sempre com a
                maior segurança para o público e para o animal.
                <br />
                Principal público-alvo: Escolas, Associações
              </p>
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>

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
