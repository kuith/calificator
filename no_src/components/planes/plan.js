import React, { useState, useEffect } from "react";
import { planes } from "../../util/datos";
import { Link } from "react-router-dom";

function Plan(props) {
  const [pesoTotal, cambiarPesoTotal] = useState(0);
  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `El peso total es: ${pesoTotal} `;
  });

  const iconoBorrar = (
    <svg
      class="bi bi-trash"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"></path>
      <path
        fill-rule="evenodd"
        d="M16.5 5a1 1 0 01-1 1H15v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6h-.5a1 1 0 01-1-1V4a1 1 0 011-1H8a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 6L6 6.059V15a1 1 0 001 1h6a1 1 0 001-1V6.059L13.882 6H6.118zM4.5 5V4h11v1h-11z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
  const pla = planes[props.id];
  const par = pla.parciales.map(parcial => (
    <tr>
      <th scope="row">{parcial.id}</th>
      <td>{parcial.nombreParcial}</td>
      <td contentEditable>
        {parcial.pesoParcial}
      </td>
      <td>{iconoBorrar}</td>
    </tr>
  ));

  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div class="col-sm">
          <h3>{pla.nombre}</h3>
        </div>
        <div class="col-sm">
          <h4>Peso Total: {pesoTotal}</h4>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Nombre Parcial</th>
              <th scope="col"> % Peso Parcial</th>
            </thead>
            <tbody>{par}</tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <Link to="/parciales/nuevoParcial" class="btn btn-info">
          Nuevo Parcial
        </Link>
      </div>
    </div>
  );
}

export default Plan;
