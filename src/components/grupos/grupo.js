import React, { useState, useEffect } from "react";
import { grupos, alumnosGrupo1, realizaAlumnosGrupo0Trimestre1 } from "../../util/newDatos";

function Grupo(props) {
  const alumnosObtenidos = alumnosGrupo1;
  const realiza = [];
  
  /////Para pruebas
  const realizaGrupo1 = realizaAlumnosGrupo0Trimestre1;
  /////

  const grupoActual = grupos[props.id - 1];
  console.log(props.id);
  
  const [gru, setGru] = useState(grupoActual);
  console.log(grupoActual);

  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

 /*  const alu = alumnos.filter(function (alumno) {
    return alumno.idGrupo == props.id;
  }); */

  const cabeceraTablaAlumnos = (
    <>
      <th scope="col" > Nombre </th>
      <th scope="col" > Apellidosprueba</th>
    </>
  );

  const cabeceraTablaParciales = (
      <td>Parcial1</td>
  );

  const cabeceraTablaNotaFinal = (
    <td>Nota Final</td>
  )
  
  const al = alumnosObtenidos.map(alumno => (
    <tr key={alumno.idAlumno}>
      <td key={alumno.idAlumno + alumno.nombreAlumno}>{alumno.nombreAlumno}</td>
      <td key={alumno.idAlumno + alumno.apellidosAlumno}>{alumno.apellidosAlumno}</td>
      <td>Nota par1</td>
      <td>Nota Nota Final</td>
    </tr>
  ));

  const alumnos = realizaGrupo1.filter(alumn=>alumn.nombreAlumno == "Felipe").map(al => (
    <tr key={al.idAlumno}>
      <td key={al.idAlumno + al.nombreAlumno}>{al.nombreAlumno}</td>
      <td key={al.idAlumno + al.apellidosAlumno}>{al.apellidosAlumno}</td>
    </tr>
  ));



  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div className="col-9">
          <h6>Nombre del grupo: {gru.nombreGrupo} - Trimestre: dddd - Año académico: {gru.anioAcademico}</h6>
        </div><div className="col-3">
          <button type="button" className="btn btn-primary">Nuevo Parcial</button>
        </div>
      </div>
      < div className="row">
        < div className = "table-responsive">
          <table className = "table table-striped">
            <thead>
              <tr>
                {cabeceraTablaAlumnos}
                {cabeceraTablaParciales}
                {cabeceraTablaNotaFinal}
              </tr>
            </thead>
            <tbody >
              {alumnos}
              {/* {al} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grupo;
