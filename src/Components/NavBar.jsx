import React from "react";
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
} from "@coreui/react";
import "../Styles/NavBarStyles.scss"; 
import aveslogo from "../assets/avessemfundo.png"

const Navbar = () => {
  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid className="bg-light navbar-container">
        <CNavbarBrand href="/" className="navbar-brand">
          <img src={aveslogo} alt="" className="navbar-logo" /> <br />
          <h3 className="navbar-title">Aves do Oeste by TM</h3>
        </CNavbarBrand>
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="/">Home</CNavLink>
          </CNavItem>
          <CDropdown variant="nav">
            <CDropdownToggle color="secondary">Serviços</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="/controloavifauna">
                Controlo de Avifauna
              </CDropdownItem>
              <CDropdownItem href="/eventos">Eventos & Presenças</CDropdownItem>
              <CDropdownItem href="/instalações">Aluguer de Instalações para Aves</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="/available">Aves Disponíveis</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/about">Material de Falcoaria</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/about">Galeria</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/about">Sobre Nós</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/contact">Contactos</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;