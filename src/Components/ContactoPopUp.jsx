import React from "react";
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CButton,
  CCloseButton,
} from "@coreui/react";
import "../Styles/ContactoPopupStyles.scss";

const ContactoPopUp = ({ isVisible, onClose }) => {
  return (
    <CModal visible={isVisible} onClose={onClose} alignment="center">
      <CModalHeader>
        <CModalTitle>Contactos</CModalTitle>
        <CCloseButton onClick={onClose} />{" "}
        {/* Use CCloseButton for closing the modal */}
      </CModalHeader>
      <CModalBody>
        <p>Para mais informações, contacte-nos:</p>
        <ul>
          <li>
            Email: <a href="mailto:avesoeste@gmail.com">avesoeste@gmail.com</a>
          </li>
          <li>
            WhatsApp: <a href="https://wa.me/913919838">913 919 838</a>
          </li>
        </ul>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Close
        </CButton>{" "}
        {/* Optional, if you still want an extra close button */}
      </CModalFooter>
    </CModal>
  );
};

export default ContactoPopUp;
