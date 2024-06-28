import React from "react";
import "./Header.css";
import { link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section className="nav_bar">
        <div className="logo">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "" : "" };
            }}
          >
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aad4d0110142211.5fe4b63868daa.jpg"
              id="logo"
            />
          </NavLink>
        </div>
        <div className="nav_text">
          <nav>
            <NavLink
              to="/search"
              style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}
            >
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>Search
              </span>
            </NavLink>

            <NavLink
              to="/offers"
              style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}
            >
              <i class="fa-solid fa-percent"></i>Offers
            </NavLink>
            <NavLink
              to="/info"
              style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}
            >
              <i class="fa-solid fa-circle-info"></i>Info
            </NavLink>
            <NavLink
              to="/help"
              style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}
            >
              <i class="fa-solid fa-life-ring"></i>Help
            </NavLink>
            <NavLink
              to="/signin"
              style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}
            >
              <i class="fa-regular fa-user"></i>Login
            </NavLink>
            <NavLink
              to="/cart"
              style={({ isActive }) => {
                return { color: isActive ? "rgb(252, 87, 5)" : "" };
              }}
            >
              <span>
                <i class="fa-solid fa-cart-shopping"></i>Cart
              </span>
            </NavLink>
          </nav>
        </div>
      </section>
     
    </div>
  );
};

export default Header;
