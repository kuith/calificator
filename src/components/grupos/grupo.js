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

  /* const items = [{
  id: 1,
  category: "cat_1",
  title: "My title 1"
}, {
  id: 2,
  category: "cat_2",
  title: "My title 2"
}, {
  id: 6,
  category: "cat_1",
  title: "Another title 1"
}, {
  id: 1,
  category: "cat_3",
  title: "My title 3"
}, {
  id: 8,
  category: "cat_1",
  title: "Third Title"
}, {
  id: 2,
  category: "cat_2",
  title: "Another title 2 "
}];
const cats = items.reduce((catsSoFar, { category, title }) => {
  if (!catsSoFar[category]) catsSoFar[category] = [];
  catsSoFar[category].push(title);
  return catsSoFar;
}, {});
console.log(cats); 

idAlumno: 0,
    nombreAlumno: "Felipe",
    apellidosAlumno: "Lunes Martes",
    idParcial: 0,
    nombreParcial: "Parcial 1",
    idTrimestre: 0,
    nota: 8,*/

  const alumnosGrupo = realizaGrupo1.reduce(
    (
      alumnoActual,
      {
        idAlumno,
        nombreAlumno,
        apellidosAlumno,
        idParcial,
        nombreParcial,
        idTrimestre,
        nota,
      }
    ) => {
      if (!alumnoActual[nombreAlumno]) alumnoActual[nombreAlumno] = [];
      alumnoActual[nombreAlumno].push();
    }
  );

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
