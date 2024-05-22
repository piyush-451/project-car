import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link , NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from '../../assets/all-images/BMTT-LOGO-4.png';
import EventIcon from "@mui/icons-material/Event";

const navLinks = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/services",
    display: "SERVICES",
  },
  {
    path: "/packages",
    display: "PACKAGES",
  },
  {
    path: "/about",
    display: "ABOUT US",
  },
  {
    path: "/contact",
    display: "CONTACT US",
  },
  {
    path: "/blogs",
    display: "BLOGS",
  },

  {
    path: "/account",
    display: "MY ACCOUNT",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center">
            <div className="navbar__logo">
              <Link to='/home'><img src={logo} width={"80px"} alt="Logo" /></Link>
            </div>

            <div className="right__wrapper"></div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) => {
                      return navClass.isActive
                        ? "nav__active nav__item"
                        : "nav__item";
                    }}
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <NavLink
                to={"/cart"}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "35px",
                  cursor: "pointer",
                  padding: "8px 12px", // Adjust padding as needed
                  display: "flex",
                  alignItems: "center", // Align items vertically in the center
                  textDecoration: "none",
                }}
              >
                <EventIcon style={{ marginRight: "8px" }} />{" "}
                {/* Calendar icon */}
                <span>Bookings</span>
              </NavLink>
            </div>

            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
