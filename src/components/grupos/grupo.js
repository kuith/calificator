import React, { useState, useEffect } from "react";
import {
  grupos,
  alumnosGrupo1,
  realizaAlumnosGrupo0Trimestre1,
  realizaAlumno1Grupo0Trimestre1,
} from "../../util/newDatos";

function Grupo(props) {
  const alumnosObtenidos = alumnosGrupo1;
  const realizadosGrupo = [];

  /////Para pruebas
  const realizaGrupo1 = realizaAlumnosGrupo0Trimestre1;
  const realizaParcialesAlumno1 = realizaAlumno1Grupo0Trimestre1;
  /////

  const grupoActual = grupos[props.id - 1];
  const [gru, setGru] = useState(grupoActual);

  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

  //////////////Cabeceras///////////////////////
  const cabeceraTablaAlumnos = (
    <>
      <th scope="col"> Nombre </th>
      <th scope="col"> Apellidosprueba</th>
    </>
  );
  const cabeceraTablaNotaFinal = <td>Nota Final</td>;
  const parcialesAlumos = realizaParcialesAlumno1.map((parcial) => (
    <td>{parcial.nota}</td>
  ));
  const cabeceraTablaParciales = realizaParcialesAlumno1.map((parcial) => (
    <th>{parcial.nombreParcial}</th>
  ));
  ////////////// Fin Cabeceras ///////////////////

  function groupBy(OurArray, property) {
    return OurArray.reduce(function (accumulator, object) {
      // get the value of our object(age in our case) to use for group    the array as the array key
      const key = object[property];
      // if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      // add the value to the array
      accumulator[key].push(object);
      // return the transformed array
      return accumulator;
      // Also we also set the initial value of reduce() to an empty object
    }, {});
  }

  const alumnosRealizan = groupBy(realizaGrupo1, "idAlumno");
  //console.log(alumnosRealizan);

  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div className="col-9">
          <h6>
            Nombre del grupo: {gru.nombreGrupo} - Trimestre: dddd{" "}
            {gru.anioAcademico}
          </h6>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-primary">
            Nuevo Parcial
          </button>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {cabeceraTablaAlumnos}
                {cabeceraTablaParciales}
                {cabeceraTablaNotaFinal}
              </tr>
            </thead>
            <tbody>{}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grupo;
