import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "../Styles/AdminPage.scss";
import { useState } from "react";
import BirdUpload from "../Components/admin/BirdUpload";
import MaterialUpload from "../Components/admin/MaterialUpload";
import AllContent from "../Components/admin/AllContent";

export default function AdminPage() {
  const BIRD_UPLOAD = "BIRD_UPLOAD";
  const MATERIAL_UPLOAD = "MATERIAL_UPLOAD";
  const ALL_CONTENT = "ALL_CONTENT";

  const [selectedContent, setSelectedContent] = useState(BIRD_UPLOAD);

  function getContentComponent() {
    switch (selectedContent) {
      case BIRD_UPLOAD:
        return <BirdUpload />;
      case MATERIAL_UPLOAD:
        return <MaterialUpload />;
      case ALL_CONTENT:
        return <AllContent />;
    }
  }

  return (
    <>
      <CContainer fluid className="admin-container">
        {/* Title row */}
        <CRow className="justify-content-center">
          <CCol>
            <h1 className="text-center">Admin Page</h1>
          </CCol>
        </CRow>

        {/* Content row */}
        <CRow>
          {/* Menu column */}
          <CCol xs={12} md={3} className="menu-col">
            <div className="d-flex flex-column align-items-start">
              <CButton
                color="light"
                className=" my-3"
                onClick={() => setSelectedContent(BIRD_UPLOAD)}
              >
                Upload Aves
              </CButton>
              <CButton
                color="light"
                className="my-3"
                onClick={() => setSelectedContent(MATERIAL_UPLOAD)}
              >
                Upload Material
              </CButton>
              <CButton
                color="light"
                className="my-3"
                onClick={() => setSelectedContent(ALL_CONTENT)}
              >
                Ver tudo
              </CButton>
            </div>
          </CCol>

          {/* Main content column */}
          <CCol xs={12} md={10} className="content-col">
            <div style={{ overflowY: "auto", height: "90vh" }}>
              {getContentComponent()}
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
}
