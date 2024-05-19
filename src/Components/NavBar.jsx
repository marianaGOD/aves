import React, { useState } from "react";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavbarToggler,
  CCollapse,
} from "@coreui/react";
import "../Styles/NavBarStyles.scss";
import aveslogo from "../assets/avessemfundo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <CNavbar expand="xxl" colorScheme="light" className="bg-light">
      <CContainer fluid className="bg-light navbar-container">
        <CNavbarBrand href="/" className="s-0 navbar-brand">
          <img src={aveslogo} alt="" className="navbar-logo" />
          <h3 className="navbar-title">
            Aves do Oeste <span>by TM</span>
          </h3>
        </CNavbarBrand>
        <CNavbarToggler
          onClick={() => toggle()}
          aria-label="Toggle navigation"
          className="navbar-toggler"
        />
        <CCollapse visible={isOpen} className="navbar-collapse">
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="/">Home</CNavLink>
            </CNavItem>
            <CDropdown variant="nav">
              <CDropdownToggle color="secondary" className="btn-services">
                Serviços
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/controloavifauna">
                  Controlo de Avifauna
                </CDropdownItem>
                <CDropdownItem href="/eventos">
                  Eventos & Presenças
                </CDropdownItem>
                <CDropdownItem href="/experiencias">Experiências</CDropdownItem>
                <CDropdownItem href="/aluguer">
                  Aluguer de Instalações para Aves
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="nav">
              <CDropdownToggle color="secondary" className="btn-services">
                Aves de Rapina
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/avesvenda">Venda</CDropdownItem>
                <CDropdownItem href="/avescriacao">
                  As nossas aves
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="/material">Material de Falcoaria</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/galeria">Galeria</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/about">Sobre Nós</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/contactos">Contactos</CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
