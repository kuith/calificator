import React, { useState, useEffect } from "react";
import {
  grupos,
  realizaGrupo0Trimestre1,
  parcialesGrupo0Trimestre1,
} from "../../util/newDatos";
import { resultadosPorAlumno } from "../../util/funcionesUtiles";

function Grupo(props) {
  const grupoActual = grupos[props.id - 1];
  const alumnosActual = realizaGrupo0Trimestre1; ////==> aqui tomaría los datos recibidos??

  const [gru, setGru] = useState(grupoActual);
  const [alumnos, setAlumnos] = useState(alumnosActual);

  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

  //Cada alumno//
  const alumnosGrupo = resultadosPorAlumno(realizaGrupo0Trimestre1);
  const datosAlumnos = alumnosGrupo.map((alumno) => (
    <tr>
      <td>{alumno.nombreAlumno}</td>
      <td>{alumno.apellidosAlumno}</td>
      {alumno.parciales.map((p) => (
        <td>{p.nota}</td>
      ))}
      <td>0</td>
    </tr>
  ));

  //////////////Cabeceras///////////////////////
  const parcialesCabecera = parcialesGrupo0Trimestre1.map((parCab) => (
    <th>{parCab.nombreParcial}</th>
  ));

  const cabeceraTablaAlumnos = (
    <>
      <th scope="col"> Nombre </th>
      <th scope="col"> Apellidos</th>
      {parcialesCabecera}
    </>
  );

  const cabeceraTablaNotaFinal = <td>Nota Final</td>;

  ////////////// Fin Cabeceras ///////////////////

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
                {cabeceraTablaNotaFinal}
              </tr>
            </thead>
            <tbody>{datosAlumnos}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grupo;
