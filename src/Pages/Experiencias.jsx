import React from "react";
import { useState } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";

export default function Experiencias() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="aves-rapina">
      <div className="title-box">
        <h1>Experiências de Falcoaria</h1>
        <p>
          Proporcionamos experiências de falcoaria individuais ou para pequenos
          grupos.
          <br />
          <br />
          <div className="extra-info">
            <i>Disponivel de Julho a Dezembro</i>
            <br />
            <i>Sujeito a marcação com atecedência mínima de 1 semana</i>
          </div>
          <br />
          <b>Contactos:</b>
          <br />
          📧 <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com </a>
          <br /> 💬 <a href="https://wa.me/913919838">913 919 838</a>
        </p>
      </div>
      <div className="info-box">
        <p style={{ fontSize: "25px" }}>Incluí:</p>
        <bl>
          <li>
            Visita às instalações e explicação sobre as espécies de rapinas e
            suas características.
          </li>
          <li>Interação direta com os animais</li>
          <li>Alimentação das aves.</li>
        </bl>

        <br />

        <bl>
          <li>
            Procuramos que as nossas experiências de falcoaria sejam intimistas
            e personalizadas, pelo que o máximo de participantes por grupo é de
            6 elementos.
          </li>
          <li>
            Não sobrepomos marcações no mesmo horário, pelo que seja uma
            experiência individual ou um grupo de 6 elementos, serão os únicos
            participantes da experiência.
          </li>
          <li>
            Apenas aceitamos dois grupos por dia, um no período da manhã e outro
            no período da tarde..
          </li>
          <li>
            Cada experiência é personalizada de acordo com o grupo, pelo não tem
            tempo de duração definido.
          </li>
        </bl>
      </div>

      <div className="info-box">
        <p style={{ fontSize: "25px" }}>Preços:</p>
        <bl>
          <li>
            Adulto (12 anos): <span style={{ color: "#daa520" }}>35€</span>
          </li>
          <li>
            Crianças dos 6 aos 12: <span style={{ color: "#daa520" }}>15€</span>
          </li>
          <li>
            Crianças com menos de 6 anos:{" "}
            <span style={{ color: "#daa520" }}>gratuito</span>
          </li>
          <li>
            Grupos a partir de 4 adultos:{" "}
            <span style={{ color: "#daa520" }}>30€ por pessoa</span>
          </li>
          <li>
            Família numerosa: 2 adultos e 3 crianças (6-12anos):{" "}
            <span style={{ color: "#daa520" }}>100€</span>
          </li>
        </bl>
      </div>

      <div className="info-box">
        <p style={{ fontSize: "15px" }}>
          *Apenas maiores de 12 anos podem realizar a atividade de passagem à
          luva em voo livre
        </p>
        <p>
          Oferecemos <b> 10% de desconto</b> na aquisição de material de
          falcoaria para os participantes das experiências.
        </p>
      </div>

      {/**
       * Termos e Condições
       */}
      <CButton color="light" onClick={() => setIsModalVisible(true)}>
        Termos & Condições
      </CButton>
      <CModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        alignment="center"
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Termos & Condições</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            • As experiências têm lugar nas instalações da Aves do Oeste,
            situada na Estrada Nacional 247, nº9, Alto do Veríssimo, 2525-005
            Atouguia da Baleia.
          </p>
          <p>
            • O voo livre da ave está dependente de condições atmosféricas
            favoráveis.{" "}
          </p>
          <p>
            • Caso na data agendada não seja possível a experiência, devido a
            condições atmosféricas, a Aves do Oeste agendará a mesma para outra
            data.
          </p>
          <p>
            • A Aves do Oeste não garante a performance e desempenho da ave
            durante o voo livre, pois apesar de treinadas, não deixam de ser
            animais selvagens que têm temperamento e vontade própria. Neste
            caso, não há lugar à restituição de valores.{" "}
          </p>
          <p>
            • As nossas aves encontram-se aparcadas nas nossas instalações, pelo
            que é sempre necessário estabelecer perímetro de segurança à volta
            das mesmas e é expressamente proibido tocar nos animais sem
            indicação prévia do falcoeiro. Os participantes podem tirar
            fotografias à vontade, desde que com as aves nos respetivos bancos.
          </p>
          <p>
            • Caso alguma das aves demonstre sinais de stress ou agressividade,
            a mesma será imediatamente retirada do espaço e resguardada em local
            seguro.
          </p>
          <p>
            • Durante a experiência, pode ser necessário as aves permanecerem de
            caparão colocado, como medida de relaxamento, caso demonstrem sinais
            de desconforto.{" "}
          </p>
          <p>• Método de pagamento: 100% para reserva da data. </p>
          <p>
            • A adjudicação do serviço e respetivo pagamento pressupõe a leitura
            e aceitação dos termos e condições.
          </p>
        </CModalBody>
      </CModal>
    </div>
  );
}
