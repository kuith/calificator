import React, { useState, useEffect } from "react";

import ListaTrimestres from './trimestres/listaTrimestres';
import TituloTabla from "./componentesTabla/tituloTabla";
import TablaParciales from "./componentesTabla/tablaParciales";
import BotonLink from "../comunes/botonLink";
import {
  resultadosPorAlumno,
  obtenerDatosParcialesGrupo,
  obtenerGrupos,
  obtenerParcialesGrupoTrimestre,
  ComprobarCambio,
} from "../../util/funcionesUtiles";

function Grupo(props) {
  const grupoActual = obtenerGrupos()[props.id - 1];
  const alumnosActual = obtenerDatosParcialesGrupo();
  const alumnosGrupoObtenidos = resultadosPorAlumno(alumnosActual);

  const [gru, setGru] = useState(grupoActual);
  const [alumnosGrupo, setAlumnosGrupo] = useState(alumnosGrupoObtenidos);
  const [notaInicial, setNotaInicial] = useState(0);
  const [trimestre] = useState(0);

  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

  useEffect(() => {
    setAlumnosGrupo(alumnosGrupo);
  }, [alumnosGrupo]);

  function guardarDatoInicial(e) {
    setNotaInicial(parseFloat(e.target.innerText));
  }

  const datosAlumnos = alumnosGrupo.map((alumno) => (
    <tr>
      <td key={alumno.idAlumno} id={alumno.idAlumno}>
        {alumno.nombreAlumno}
      </td>
      <td key={alumno.apellidosAlumno}>{alumno.apellidosAlumno} </td>
      {alumno.parciales.map((p) => (
        <td
          key={p.idParcial}
          contentEditable="true"
          id="nota"
          onFocus={guardarDatoInicial}
          onBlur={(e) => {
            ComprobarCambio(
              notaInicial,
              parseFloat(e.target.innerText),
              alumno.idAlumno,
              alumno.nombreAlumno,
              alumno.apellidosAlumno,
              p.idParcial,
              p.nombreParcial,
              p.pesoParcial,
              trimestre
            );
          }}
        >
          {p.nota}
        </td>
      ))}
      <td>{alumno.notaFinal}</td>
    </tr>
  ));

  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div className="col-3">
          <ListaTrimestres grupo={gru.idGrupo}/>
        </div>
        <div className="col-6">
          <TituloTabla nombreGrupo={gru.nombreGrupo} anio={gru.anioAcademico} />
        </div>
        <div className="col-3">
          <BotonLink
            etiqueta="Nuevo Parcial"
            ruta="./parciales/nuevoParcial"
            anio={gru.anioAcademico}
            grupo={gru.idGrupo}
            curso={gru.curso}
            trimestre={trimestre}/>
        </div>
      </div>
      <div className="row">
        <TablaParciales
          datosAlumnos={datosAlumnos}
          parciales={obtenerParcialesGrupoTrimestre(gru.idGrupo, 1)}
        />
      </div>
      <div className="row">
        <BotonLink
          etiqueta="Nuevo alumno"
          ruta="./alumnos/nuevoAlumno"
          anio={gru.anioAcademico}
          grupo={gru.idGrupo}
          curso={gru.curso}
          trimestre={trimestre}
        />
      </div>
    </div>
  );
}

export default Grupo;
