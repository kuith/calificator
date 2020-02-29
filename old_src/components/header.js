import React from "react";
import { planes, grupos, cursos } from '../util/datos';
import { link } from 'react-router-dom';

const Header = () => {
  const pla = planes.map(plan => (
    <a className="dropdown-item" href="#" key={plan.nombre}>{plan.nombre}</a>
  ));

  const gru = grupos.map(grupo => (
    <a className="dropdown-item" href="#" key={grupo.nombre}>{grupo.nombre}</a>
  ));

  const navGrupos = (
    <>
      <li className="nav-item dropdown" >
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Grupos
          </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {gru}
          <a className="dropdown-item" href="#">Nuevo Curso</a>
        </div>
      </li>
    </>
  );

  const navPlanes = (
    <>
      <li className="nav-item dropdown" >
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Planes
          </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {pla}
          <a className="dropdown-item" href="#">Nuevo Plan</a>
        </div>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Calificator</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
}

export default Header;
