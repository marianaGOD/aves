import React from "react";
import "../Styles/AluguerInstalacoesStyles.scss";

export default function AluguerInstalacoes() {
  return (
    <div className="aluguer-instalacoes">
      <h1>Aluguer de Boxes Para Aves de Rapina</h1>
      <p>
        Seja de curta ou longa duração, temos pacotes de estadias diárias,
        quinzenais, mensais, semestrais e anuais.
      </p>
      <div className="access">
        <p>
          Acesso 24h a câmara de vigilância para ver a sua ave sempre que
          desejar.
        </p>
        <p>Instalações de 2,5m x 2,5m x 2,7m (CxLxA).</p>
      </div>
      <div className="pricing">
        <h2>Preços</h2>
        <ul>
          <li>Diária - 15€</li>
          <li>Quinzenal - 75€</li>
          <li>Mensal - 100€</li>
          <li>Semestral - 500€</li>
          <li>Anual - 850€</li>
        </ul>
      </div>
      <div className="included">
        <h2>Preço Incluí</h2>
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
      </div>
      <div className="extras">
        <h2>Extras</h2>
        <ul>
          <li>
            Desparasitação interna - preço definido pelo veterinário parceiro
          </li>
          <li>Preparação para sair com peso de caça: 50€</li>
          <li>
            Alimentação especial (viva ou congelada): codorniz, pombo, rola,
            perdiz, faisão, pato, murganho, coelho
          </li>
          <li>
            Frequência da alimentação especial: 1x semana - +10%, 3x semana -
            +30%, diária - +50%
          </li>
        </ul>
      </div>
      <p>Solicite condições para alojamento de casais ou alojamento coletivo</p>
    </div>
  );
}
