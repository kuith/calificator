import React, { useState, useEffect } from "react";

import TituloTabla from "./componentesTabla/tituloTabla";
import TablaParciales from "./componentesTabla/tablaParciales";
import Boton from "../comunes/boton";
import {
  resultadosPorAlumno,
  obtenerDatosParcialesGrupo,
  obtenerGrupos,
  ObtenerParcialesGrupo,
  cambiarNota
} from "../../util/funcionesUtiles";

function Grupo(props) {
  const grupoActual = obtenerGrupos()[props.id - 1];
  const alumnosActual = obtenerDatosParcialesGrupo(); ////==> aqui tomaría los datos recibidos??
  const alumnosGrupoObtenidos = resultadosPorAlumno(alumnosActual);

  const [gru, setGru] = useState(grupoActual);
  const [alumnosGrupo, setAlumnosGrupo] = useState(alumnosGrupoObtenidos);
  const [notaParcial, setNotaParcial] = useState(0);
  const [notaInicial, setNotaInicial] = useState(0);
  const [hayCambio, setHayCambio] = useState(false);
    
  useEffect(() => {
    setGru(grupoActual);
  }, [grupoActual]);

  useEffect(()=> {
    setAlumnosGrupo(alumnosGrupo)
  }, [alumnosGrupo]);

  function guardarDatoInicial(e, idAlumno, idParcial) {
    setNotaInicial(e.target.innerText);
  }

  function tratarCambio(e, idAlumno, idParcial, nota) {
    const notaCambio = e.target.innerText;
    if (notaInicial !== notaCambio) {
      setNotaParcial(notaCambio);
      setHayCambio(true);
      cambiarNota(idAlumno, idParcial, nota);
    } else {
      setHayCambio(false);
    }
  }

  const datosAlumnos = alumnosGrupo.map((alumno) => (
    <tr>
      <td key={alumno.idAlumno} id={alumno.idAlumno}>{alumno.nombreAlumno}</td>
      <td key={alumno.apellidosAlumno}>{alumno.apellidosAlumno} </td>
      {alumno.parciales.map((p) => (
        <td key={p.idParcial}
          contentEditable="true"
          id="nota"
          onFocus={guardarDatoInicial}
          //onBlur={tratarCambio}
          onBlur={tratarCambio(alumno.idAlumno, p.idParcial, p.nota)}
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
        <div className="col-9">
          <TituloTabla nombreGrupo={gru.nombreGrupo} anio={gru.anioAcademico} />
        </div>
        <div className="col-3">
          <Boton etiqueta="Nuevo Parcial"/>
        </div>
      </div>
      <div className="row">
        <TablaParciales datosAlumnos={datosAlumnos} parciales={ObtenerParcialesGrupo()}/>
      </div>
    </div>
  );
}

export default Grupo;
