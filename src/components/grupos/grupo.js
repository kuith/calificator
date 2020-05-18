import React, { useState, useEffect } from "react";
import {
  grupos,
  realizaGrupo0Trimestre1,
  parcialesGrupo0Trimestre1,
} from "../../util/newDatos";
import TituloTabla from "./componentesTabla/tituloTabla";
import TablaParciales from "./componentesTabla/tablaParciales";
import Boton from "../comunes/boton";
import { resultadosPorAlumno } from "../../util/funcionesUtiles";

function Grupo(props) {
  const grupoActual = grupos[props.id - 1];
  const alumnosActual = realizaGrupo0Trimestre1; ////==> aqui tomaría los datos recibidos??
  const alumnosGrupoObtenidos = resultadosPorAlumno(alumnosActual);

  const [gru, setGru] = useState(grupoActual);
  const [alumnosGrupo, setAlumnosGrupo] = useState(alumnosGrupoObtenidos);
  
  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

  
  //Cada alumno//
  const datosAlumnos = alumnosGrupo.map((alumno) => (
    <tr>
      <td>{alumno.nombreAlumno}</td>
      <td>{alumno.apellidosAlumno}</td>
      {alumno.parciales.map((p) => (
        <td contenteditable="true">{p.nota}</td>
      ))}
      <td>0</td>
    </tr>
  ));
  

  //////////////Cabeceras///////////////////////
  const parcialesCabecera = parcialesGrupo0Trimestre1.map((parCab) => (
    <th>{parCab.nombreParcial}</th>
  ));
  ////////////// Fin Cabeceras ///////////////////

  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div className="col-9">
          <TituloTabla nombreGrupo={gru.nombreGrupo} anio={gru.anioAcademico} />
        </div>
        <div className="col-3">
          <Boton etiqueta="Nuevo Parcial"/>
        </div>
      </div>
      <div className="row">
        <TablaParciales datosAlumnos={datosAlumnos} parciales= {parcialesCabecera}/>
      </div>
    </div>
  );
}

export default Grupo;
