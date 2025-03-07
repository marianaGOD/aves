import React, { useState } from "react";
import "../Styles/AluguerInstalacoesStyles.scss";
import {
  CButton,
  CPopover,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import camimg from "../assets/camimg.jpg"

export default function AluguerInstalacoes() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="aluguer-instalacoes">
      <div className="aluguer-title">
        <h1>Aluguer de Boxes Para Aves de Rapina</h1>
        <p>
          Seja de curta ou longa duração, temos pacotes de estadias{" "}
          <b>diárias, quinzenais, mensais, semestrais e anuais.</b>
        </p>

        <h3>
          <i>
            <u>Temporariamente indisponível</u>
          </i>
        </h3>
      </div>
      <div className="pricing">
        <CPopover
          title="inclui"
          content={
            <ul>
              <li>Acesso 24h a câmara de vigilância</li>
              <li>
                Alimentação variada congelada: pinto do dia, codorniz limpa,
                pescoços de pato ou perú, cabeças de coelho
              </li>
              <li>
                Desparasitação externa para ácaros e mosca da pena (à admissão)
              </li>
            </ul>
          }
          placement="bottom"
          trigger="click"
          visible={visible}
          onShow={() => setVisible(true)}
          onHide={() => setVisible(false)}
        >
          <CButton
            color="link"
            className="p-0"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>Preços & Condições</h2>
          </CButton>
        </CPopover>
        <bl>
          <li>Acesso 24h a câmara de vigilância</li>
          <li>
            Alimentação variada congelada: pinto do dia, codorniz limpa,
            pescoços de pato ou perú, cabeças de coelho
          </li>
          <li>
            Desparasitação externa para ácaros e mosca da pena (à admissão)
          </li>
        </bl>

        <br />
        <ul>
          <li style={{ marginTop: "0px" }}>
            Diário -{" "}
            <span
              style={{ fontWeight: "bold", color: "#daa520", marginTop: "0px" }}
            >
              15€
            </span>
          </li>
          <li style={{ marginTop: "0px" }}>
            {" "}
            Quinzenal -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>75€</span>
          </li>
          <li style={{ marginTop: "0px" }}>
            Mensal -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>100€</span>
          </li>
          <li style={{ marginTop: "0px" }}>
            Semestral -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>500€</span>
          </li>
          <li style={{ marginTop: "0px" }}>
            Anual -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>850€</span>
          </li>
        </ul>
      </div>
      <div className="access">
        <img src={camimg} alt="" />
        <p>Instalações de 2,5m x 2,5m x 2,7m (CxLxA).</p>
      </div>

      <CAccordion flush className="accordion-instalacoes">
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Extras</CAccordionHeader>
          <CAccordionBody>
            <ul>
              <li>
                Desparasitação interna - preço definido pelo veterinário
                parceiro;
              </li>
              <li>
                Preparação para sair com peso de caça:{" "}
                <span style={{ fontWeight: "bold", color: "#daa520" }}>
                  50€
                </span>
                ;
              </li>
              <li>
                Alimentação especial (viva ou congelada): codorniz, pombo, rola,
                perdiz, faisão, pato, murganho, coelho;
              </li>
              <li>
                Frequência da alimentação especial:
                <bl>
                  <li>1x semana : +10%</li>
                  <li>3x semana : +30%</li>
                  <li>diária : +50%</li>
                </bl>
              </li>
            </ul>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      <p className="small-letters">
        Solicite condições para alojamento de casais ou alojamento coletivo
      </p>
    </div>
  );
}
