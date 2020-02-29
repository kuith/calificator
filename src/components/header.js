import React from "react";
import { planes, grupos, cursos } from "../util/datos";
import { Link } from "react-router-dom";

const Header = () => {
  ////<Link to={`/users/${user.id}`}>{user.name}</Link>
  /*   const pla = planes.map(plan => (
      <Link to="/plan" className="dropdown-item" key={plan.nombre}>
        {plan.nombre}
      </Link>
    )); */
  const pla = planes.map(plan => (
    <Link to={`/planes/${plan.id}`} className="dropdown-item" key={plan.nombre}>
      {plan.nombre}
    </Link>
  ));

  const gru = grupos.map(grupo => (
    <Link
      to={`/grupos/${grupo.id}`}
      className="dropdown-item"
      key={grupo.nombre}
    >
      {grupo.nombre}
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
          <a className="dropdown-item" href="#">
            Nuevo Grupo
          </a>
        </div>
      </li>
    </>
  );

  const navPlanes = (
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
          Planes
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {pla}
          <Link to="/nuevoPlan" className="dropdown-item">
            Nuevo Plan
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
          {navPlanes}
          {navGrupos}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
