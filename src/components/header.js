import React, { useState } from "react";
import { Link } from "react-router-dom";
import { obtenerGrupos } from "../util/funcionesUtiles";

const Header = () => {
  const gruposObtenidos = obtenerGrupos();
  const [gruposData] = useState(gruposObtenidos);
  
  const gru = gruposData.map(grupo => (
    <Link
      to={`/grupos/${grupo.idGrupo}`}
      className="dropdown-item"
      key={grupo.nombreGrupo}
    >
      {grupo.nombreGrupo} ({grupo.anioAcademico})
    </Link>
  ));

  const navGrupos = (
    <>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Grupos
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {gru}
          <Link to="/grupos/nuevoGrupo" className="dropdown-item">
            Nuevo Grupo
          </Link>
        </div>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Calificator
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {navGrupos}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
