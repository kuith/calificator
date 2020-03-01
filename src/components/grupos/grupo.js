import React, { useState, useEffect } from "react";
import { grupos, alumnos, planes } from "../../util/datos";

function Grupo(props) {
  const gru = grupos[props.id];
  const plan = planes[gru.planId];

  const alu = alumnos.filter(function (alumno) {
    return alumno.grupoId == props.id;
  });

  const nomPar = plan.parciales.map(nom => (
    <th>{nom.nombreParcial} {nom.pesoParcial}%</th>
  ));

  const alunosNotas = alu.map(alumno => (
    <tr>
      <th scope="row">{alumno.id}</th>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellidos}</td>
      {alumno.parciales.map(par => (
        <td>{par.nota}</td>
      ))}
    </tr>
  ));

  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div class="col-sm">
          <h3>{gru.nombre}</h3>
        </div>
      </div>
      < div className="row">
        < div className = "table-responsive">
          <table className = "table table-striped">
            <thead>
              <th scope="col" > # </th>
              <th scope="col" > Nombre </th>
              <th scope = "col" > Apellidos</th>
              {nomPar}
              <th scope = "col" > Nota final </th>
            </thead>
            <tbody >
              {alunosNotas}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grupo;
