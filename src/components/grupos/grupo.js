import React, { useState, useEffect } from "react";
import {
  grupos,
  alumnosGrupo1,
  realizaAlumnosGrupo0Trimestre1,
  realizaAlumno1Grupo0Trimestre1,
} from "../../util/newDatos";

function Grupo(props) {
  const alumnosObtenidos = alumnosGrupo1;
  const realiza = [];
  const parcialesAlumno = [];

  /////Para pruebas
  const realizaGrupo1 = realizaAlumnosGrupo0Trimestre1;
  const realizaParcialesAlumno1 = realizaAlumno1Grupo0Trimestre1;
  /////

  const grupoActual = grupos[props.id - 1];
  console.log(props.id);

  const [gru, setGru] = useState(grupoActual);
  console.log(grupoActual);

  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

  const cabeceraTablaAlumnos = (
    <>
      <th scope="col"> Nombre </th>
      <th scope="col"> Apellidosprueba</th>
    </>
  );

  //const cabeceraTablaParciales = <td>Parcial1</td>;
  const cabeceraTablaNotaFinal = <td>Nota Final</td>;

  const parcialesAlumos = realizaParcialesAlumno1.map((parcial) => (
    <td>{parcial.nota}</td>
  ));

  const cabeceraTablaParciales = realizaParcialesAlumno1.map((parcial) => (
    <th>{parcial.nombreParcial}</th>
  ));

  const al = alumnosObtenidos.map((alumno) => (
    <tr key={alumno.idAlumno}>
      <td key={alumno.idAlumno + alumno.nombreAlumno}>{alumno.nombreAlumno}</td>
      <td key={alumno.idAlumno + alumno.apellidosAlumno}>
        {alumno.apellidosAlumno}
      </td>
      {parcialesAlumos}
    </tr>
  ));

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
            <tbody>{al}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grupo;
