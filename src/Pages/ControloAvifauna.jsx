import React, { useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
  CButton,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import "../Styles/ControloAvifaunaStyles.scss";

export default function ControloAvifauna() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="controlo-avifauna">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xs={12} md={8} className="controlo-toptitle">
            <h1>Controlo de Avifauna</h1>
            <p>
              A presença de populações de aves infestantes, nomeadamente
              gaivotas, pombos, estorninhos, entre outros, em espaços
              habitacionais e de recreação apresenta um problema de saúde
              pública e de manutenção das condições higieno-sanitárias dos
              espaços. Desta forma, vimos por este meio apresentar uma solução.
            </p>
          </CCol>
        </CRow>
        <CAccordion className="accordion" flush>
          <CAccordionItem className="accordion-item" itemKey={1}>
            <CAccordionHeader className="accordion-header">
              SERVIÇO DE CONTROLO DE PRAGAS COM AVES DE PRESA
            </CAccordionHeader>
            <CAccordionBody className="accordion-body">
              <p>
                O recurso a técnicas de falcoaria permite o controlo de espécies
                invasivas e sobrepovoadas de forma sustentável, sem recurso a
                pesticidas e sem efeitos adversos para o meio ambiente.
              </p>
              <p style={{ color: "#daa520" }}>Vantagens:</p>
              <ul>
                <li>Permite a integridade dos campos e do meio ambiente</li>
                <li>
                  Inócuo para o ser humano, já que não são usados quaisquer
                  tipos de produtos tóxicos ou armadilhas
                </li>
                <li>Não compromete a estética dos edifícios e monumentos</li>
                <li>Não interfere na dinâmica das atividades humanas</li>
                <li>Muito poucas baixas de indivíduos</li>
                <li>Extremamente eficaz</li>
                <li>
                  Método natural, sustentável e ecológico, não produz
                  desperdícios, apenas usamos a natureza a nosso favor.
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem className="accordion-item" itemKey={2}>
            <CAccordionHeader className="accordion-header">
              SERVIÇO DE CONTROLO POPULACIONAL COM RECURSO A JAULAS DE CAPTURA
            </CAccordionHeader>
            <CAccordionBody className="accordion-body">
              <p>
                Para algumas espécies, nomeadamente pombos, uma das formas mais
                eficazes de controlo populacional é recorrer ao uso de jaulas de
                captura. Esta prática permite a captura de um maior número de
                espécimes num menor período de tempo. Não são utilizados
                quaisquer produtos tóxicos ou químicos que ponham em causa o
                meio ambiente envolvente e as restantes espécies que coabitem na
                área, nem interferem nas atividades humanas.
              </p>
              <CButton color="light" onClick={() => setIsModalVisible(true)}>
                Contacte-nos
              </CButton>
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
