import React from "react";
import "../Styles/EventosStyles.scss";
import {
  CContainer,
  CRow,
  CCol,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";

export default function Eventos() {
  return (
    <div className="eventos-container">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xs={12} md={8} className="controlo-toptitle">
            <h1>Eventos & Presenças</h1>
          </CCol>
        </CRow>
      </CContainer>
      <CAccordion className="accordion" flush>
        <CAccordionItem className="accordion-item" itemKey={1}>
          <CAccordionHeader className="accordion-header">
            CASAMENTOS
          </CAccordionHeader>
          <CAccordionBody className="accordion-body">
            <p>Preçário individual:</p>
            <ul>
              <li>Deslocação: 0,75€/km (inclui ida e volta e portagens)</li>
              <li>
                Entrega das alianças em voo livre com Águia de Harris – 190€
              </li>
              <li>
                Sessão fotográfica com noivos após cerimónia: com todas as aves
                selecionadas, até 3h de duração – 250€
              </li>
              <li>
                Sessão fotográfica com convidados após cerimónia: com todas as
                aves selecionadas (exceto Bufo Real e Águia de Bonelli), até 2h
                de duração – 250€
              </li>
              <li>
                Presença durante o evento, como parte de decoração do espaço –
                60€/h
              </li>
              <li>Luva personalizada para noivos – 60€/unidade ou 100€ duas</li>
            </ul>
            <p>PEDIR ANEXO</p>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem className="accordion-item" itemKey={2}>
          <CAccordionHeader className="accordion-header">
            EVENTOS CORPORATIVOS
          </CAccordionHeader>
          <CAccordionBody className="accordion-body">
            <p>
              Eventos empresariais, com a possibilidade da presença de diversas
              aves de rapina, bem como de fotografias com as mesmas e,
              dependendo das espécies, passagem à luva dos participantes para
              fotografia individual.
              <br />
              Solicite disponibilidade das aves e orçamento através do e-mail:
              avesoeste@gmail.com
            </p>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem className="accordion-item" itemKey={3}>
          <CAccordionHeader className="accordion-header">
            EVENTOS TEMÁTICOS
          </CAccordionHeader>
          <CAccordionBody className="accordion-body">
            <p>
              Festas de aniversário, feiras temáticas, bodas de casamento, etc.
              <br />
              Solicite disponibilidade das aves e orçamento através do e-mail:
              avesoeste@gmail.com
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
              Algumas das nossas aves estão sociabilizadas de modo a deixarem-se
              tocar e acariciar, de modo a permitir ao público a aproximação e
              contacto com estes animais selvagens, sempre com a maior segurança
              para o público e para o animal.
              <br />
              Principal público-alvo: Escolas, Associações
            </p>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}
