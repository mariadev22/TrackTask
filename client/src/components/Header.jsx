import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/task_alt.svg";
import logoDark from "../assets/task_alt-dark.svg";
import menu from "../assets/menu.svg";
import menuDark from "../assets/menu-dark.svg";
import close from "../assets/close.svg";
import closeDark from "../assets/close-dark.svg";
import home from "../assets/home.svg";
import homeDark from "../assets/home-dark.svg";
import info from "../assets/info.svg";
import infoDark from "../assets/info-dark.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="flex justify-between gap-10 py-1 my-2 border-b border-gray-300 dark:border-gray-700">
        <Link
          to="/"
          className="flex items-center gap-0.5 text-2xl dark:text-gray-300 text-gray-700"
        >
          <img src={logo} alt="TrackTask" className="block dark:hidden" />
          <img src={logoDark} alt="TrackTask" className="hidden dark:block" />
          TrackTask
        </Link>

        <button
          className="block md:hidden transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <>
              <img src={menu} alt="Abrir menú" className="block dark:hidden" />
              <img
                src={menuDark}
                alt="Abrir menú"
                className="hidden dark:block"
              />
            </>
          ) : (
            <>
              <img
                src={close}
                alt="Cerrar cenú"
                className="block dark:hidden"
              />
              <img
                src={closeDark}
                alt="Cerrar menú"
                className="hidden dark:block"
              />
            </>
          )}
        </button>

        <nav className="hidden md:flex items-center gap-5">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/about">Acerca de</NavLink>
        </nav>
      </header>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-1 text-lg md:hidden">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex gap-2"
          >
            <img src={home} alt="Inicio" className="block dark:hidden" />
            <img src={homeDark} alt="Inicio" className="hidden dark:block" />
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="flex gap-2"
          >
            <img src={info} alt="Acerca de" className="block dark:hidden" />
            <img src={infoDark} alt="Acerca de" className="hidden dark:block" />
            Acerca de
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
