import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-3" to="/">
          <img
            src="https://preview.colorlib.com/theme/gymlife/img/logo.png.webp"
            alt="Gym Life Logo"
          />
        </NavLink>
        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <i className="bx bx-x fs-3"></i>
          ) : (
            <i className="bx bx-menu fs-3"></i>
          )}
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Classes", path: "/class" },
              { name: "Service", path: "/service" },
              { name: "Team", path: "/team" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-col" : ""}`
                  }
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-media d-none d-lg-flex ms-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
