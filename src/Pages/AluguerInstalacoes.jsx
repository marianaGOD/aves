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
          Seja de curta ou longa duração, temos pacotes de estadias diárias,
          quinzenais, mensais, semestrais e anuais.
        </p>
      </div>
      <div className="access">
        <img src={camimg} alt="" style={{ height: "500px" }} />
        <p>
          🪶 Acesso 24h a câmara de vigilância para ver a sua ave sempre que
          desejar.
        </p>
        <p>🪶Instalações de 2,5m x 2,5m x 2,7m (CxLxA).</p>
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
            <h2>Preços</h2>
          </CButton>
        </CPopover>
        <ul>
          <li>
            Diária -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>15€</span>
          </li>
          <li>
            Quinzenal -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>75€</span>
          </li>
          <li>
            Mensal -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>100€</span>
          </li>
          <li>
            Semestral -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>500€</span>
          </li>
          <li>
            Anual -{" "}
            <span style={{ fontWeight: "bold", color: "#daa520" }}>850€</span>
          </li>
        </ul>
      </div>
      <CAccordion flush>
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
                Frequência da alimentação especial: 1x semana - +10%, 3x semana
                - +30%, diária - +50%.
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
