import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="Navbar">
      <NavLink to="/" className="logo">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aad4d0110142211.5fe4b63868daa.jpg"
          id="logo"
          alt="Logo"
        />
      </NavLink >
      <ul className={isMobile ? "nav-links-mobile" : "nav_links"} onClick={() => setIsMobile(false)}>
        <NavLink to="/search" className="nav-texts" style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}>
          <li><i className="fa-solid fa-magnifying-glass"></i> Search</li>
        </NavLink>
        <NavLink to="/offers" className="nav-texts" style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}>
          <li><i className="fa-solid fa-percent"></i> Offers</li>
        </NavLink>
        <NavLink to="/info" className="nav-texts" style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}>
          <li><i className="fa-solid fa-circle-info"></i> Info</li>
        </NavLink>
        <NavLink to="/help" className="nav-texts" style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}>
          <li><i class="fa-solid fa-headset"></i> Help</li>
        </NavLink>
        <NavLink to="/signin" className="nav-texts" style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}>
          <li><i className="fa-regular fa-user"></i> Login</li>
        </NavLink>
        <NavLink to="/cart" className="nav-texts" style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}>
          <li><i className="fa-solid fa-cart-shopping"></i> Cart</li>
        </NavLink>
      </ul>
      <button className="Mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Header;
