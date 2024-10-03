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
} from "@coreui/react";
import "../Styles/EventosStyles.scss";
import graphcasamentos from "../assets/graphcasamentos.png";

import car4 from "../assets/car4_crop.jpg";

export default function Eventos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false);

  return (
    <div className="eventos-container">
      <CContainer xs={12}>
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
              {/*
              Foi removido temporariamente para se recalcular os preços

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
              </ul>*/}

              <p>
                Para mais informações e detalhes, entrar em{" "}
                <a href="/contactos">contacto</a>.
              </p>
              <br />
              <div className="btn-wedd-container">
                {/* 
                <CButton
                  color="light"
                  onClick={() => setIsModalVisible(true)}
                  className="btn-wedd"
                >
                  Pack Casamentos
                </CButton>*/}
                <CButton
                  color="light"
                  onClick={() => setIsTermsModalVisible(true)}
                >
                  Termos & Condições
                </CButton>
              </div>
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

              <img src={car4} alt="" className="img-accordion" />
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>

        {/* Modal */}
        <CModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          alignment="center"
          size="xl"
        >
          <CModalHeader>
            <CModalTitle></CModalTitle>
          </CModalHeader>
          <CModalBody>
            <img
              src={graphcasamentos}
              alt="Anexo Image"
              //className="zoomable-image" // Add this class
              style={{ width: "100%" }}
            />
          </CModalBody>
        </CModal>
        <CModal
          visible={isTermsModalVisible}
          onClose={() => setIsTermsModalVisible(false)}
          alignment="center"
        >
          <CModalHeader>
            <CModalTitle>Termos & Condições</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>
              • O Valor da deslocação incluí viagens no dia da cerimónia e de 1
              dia de treino. Caso haja necessidade de mais de um treino com a
              ave, é cobrado o valor de 0.75€/km de distância entre a sede da
              Aves do Oeste e o local.
            </p>
            <p>
              • As luvas podem ser personalizadas até 3 cores de couro e com
              bordado.
            </p>
            <p>
              • Para entrega de alianças em voo livre apenas trabalhamos com a
              espécie Águia de Harris, pela sua capacidade de adaptação e
              temperamento.
            </p>
            <p>
              • As espécies Bufo Real e Águia de Bonelli apenas estão
              disponíveis para sessões fotográficas privadas, com os noivos,
              devido ao seu temperamento.
            </p>
            <p>
              • O voo livre da águia em espaços abertos está dependente de
              condições atmosféricas favoráveis.
            </p>
            <p>
              • É sempre necessário pelo menos um treino no local com a ave e os
              noivos, para a águia de harris se adaptar ao espaço e à pessoa que
              a vai receber na luva.
            </p>
            <p>
              • A Aves do Oeste não garante a performance e desempenho da ave
              durante o voo livre, pois apesar de treinadas, não deixam de ser
              animais selvagens que têm temperamento e vontade própria. Neste
              caso, não há lugar à restituição de valores.
            </p>
            <p>
              • Quando as aves ficam aparcadas durante o evento, é sempre
              necessário estabelecer perímetro de segurança à volta das mesmas e
              é expressamente proibido tocar nos animais. Os convidados podem
              tirar fotografias à vontade, desde que com as aves nos respetivos
              bancos.
            </p>
            <p>
              • Caso alguma das aves demonstre sinais de stress ou
              agressividade, a mesma será imediatamente retirada do espaço e
              resguardada em local seguro.
            </p>
            <p>
              • Durante o evento, pode ser necessário as aves permanecerem de
              caparão colocado, como medida de relaxamento, caso demonstrem
              sinais de desconforto.
            </p>
            <p>
              • Método de pagamento: 20% na adjudicação do serviço para reserva
              de data; 30% até 5 dias úteis antes do evento; 50% até 5 dias
              úteis após o evento.
            </p>
            <p>
              • A adjudicação do serviço e pagamento do respetivo sinal
              pressupõe a leitura e aceitação dos termos e condições.
            </p>
          </CModalBody>
        </CModal>
      </CContainer>
    </div>
  );
}
