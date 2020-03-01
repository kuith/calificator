import React, { useState, useEffect } from "react";
import { planes } from "../../util/datos";
import { Link } from "react-router-dom";
import IconoBorrar from "../../util/util";

function Plan(props) {
  const [pesoTotal, cambiarPesoTotal] = useState(0);
  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    //document.title = `El peso total es: ${pesoTotal} `;
  });
  
  const pla = planes[props.id];
  const par = pla.parciales.map(parcial => (
    <tr>
      <th scope="row">{parcial.id}</th>
      <td>{parcial.nombreParcial}</td>
      <td contentEditable>{parcial.pesoParcial}</td>
      < td > <IconoBorrar /> </td >
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
