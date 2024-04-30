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
import "../Styles/NavBarStyles.scss"; // Ensure this path is correct
import aveslogo from "../assets/aveslogo.png"

const Navbar = () => {
  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid className="bg-light navbar-container" >
        <CNavbarBrand href="/">
          <img src={aveslogo} alt="" className="navbar-logo" />
        </CNavbarBrand>
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="/home">Home</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/about">About</CNavLink>
          </CNavItem>
          <CDropdown variant="nav">
            <CDropdownToggle color="secondary">Services</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Service 1</CDropdownItem>
              <CDropdownItem href="#">Service 2</CDropdownItem>
              <CDropdownItem href="#">Service 3</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="/contact">Contact</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
