import {
  realizaGrupo0Trimestre0,
  grupos,
  parcialesGrupo0Trimestre1,
  trimestresGrupo0
} from "../util/newDatos";

// Supongo que la salida debería ser algo parecido a esto.
export function resultadosPorAlumno(parciales) {
  // array "reduce"
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
  return parciales.reduce(
    (acc, parcial) => {
      // "object destructuring"
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment#Object_destructuring
      // equvalente a:
      // idAlumno = parcial['idAlumno'];
      // nombreAlumno = parcial['nombreAlumno];
      // ...
      const {
        idAlumno,
        nombreAlumno,
        apellidosAlumno,
        idParcial,
        pesoParcial,
        nombreParcial,
        idTrimestre,
        nota,
        notaFinal,
      } = parcial;

      // array "find",
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find
      let datosAlumno = acc.find((alumno) => alumno.idAlumno == idAlumno);

      if (!datosAlumno) {
        // shorthand property names
        // https://itnext.io/enhanced-object-literal-value-shorthand-javascript-es6-feature-series-pt-6-e00dfdc24f64
        datosAlumno = {
          idAlumno,
          nombreAlumno,
          apellidosAlumno,
          parciales: [],
          notaFinal,
        };
        acc.push(datosAlumno);
      }

      datosAlumno.parciales.push({
        idParcial,
        nombreParcial,
        pesoParcial,
        idTrimestre,
        nota,
      });

      return acc;
    },
    [] // empezamos con un array vacío
  );
}

export function modificarDatosAlumno(idAlumno, nuevoNombre, nuevoApellido) {
  const queryAlumno = "";

  console.log(
    "Id del alumno: " +
      idAlumno +
      ". El nuevo nombre: " +
      nuevoNombre +
      ". El nuevo apellido: " +
      nuevoApellido
  );
  return queryAlumno;
}

//Obtención de todos los grupos
export function obtenerGrupos() {
  const gruposObtenidos = grupos;
  return gruposObtenidos;
}

//Obtención de los alumnos con sus parciales del grupo seleccionado
export function obtenerDatosParcialesGrupo(grupo) {
  const datosObtenidos = realizaGrupo0Trimestre0;
  return datosObtenidos;
}

//Obtención de los alumnos parciales del grupo seleecionado
export function ObtenerParcialesGrupo(grupo) {
  const parcialesGrupo = parcialesGrupo0Trimestre1;
  return parcialesGrupo;
}

//función que recoge el trimestre activo
export function recibirTrimestreActivo(trimestre) {
  const trimestreActivo = trimestre;
  //console.log("El nuevo trimestre activo es: " + trimestreActivo);
  return trimestreActivo;
}

//función que obtiene todos los trimestres de un grupo
export function obtenerTrimestre(grupo) {
  const trimestresObtenidos = trimestresGrupo0;
  return trimestresObtenidos;
}

//Obtener parciales del grupo y trimestre seleccionado
export function obtenerParcialesGrupoTrimestre(grupo, trimestre) {
  const parcialesGrupoTrimestre = parcialesGrupo0Trimestre1;
  return parcialesGrupoTrimestre;
}

//Funcion que mira hay cambio en una celda y si es asi actualiza se lo pasa a la que actualiza
export function ComprobarCambio(
  notaInicial,
  notaCambio,
  idAlumno,
  nombreAlumno,
  apellidosAlumno,
  idParcial,
  nombreParcial,
  pesoParcial,
  idTrimestre
) {
  if (notaInicial !== notaCambio) {
    actualizarNota(
      notaCambio,
      idAlumno,
      nombreAlumno,
      apellidosAlumno,
      idParcial,
      nombreParcial,
      pesoParcial,
      idTrimestre
    );
    console.log(
      "Hay cambio. Nota final: " +
        notaCambio +
        ". Id Alumno: " +
        idAlumno +
        ". Nombre Alumno: " +
        nombreAlumno +
        ". Apellidos Alumno: " +
        apellidosAlumno +
        ". Id Parcial: " +
        idParcial +
        " . nombre Parcial: " +
        nombreParcial +
        ". peso Parcial: " +
        +pesoParcial +
        ". Id Trimestre: " +
        idTrimestre
    );
  } else {
    console.log(
      "No hay cambio. Nota inicial == nota final. No se hace nada" +
        notaInicial +
        ". Nota Cambio: " +
        notaCambio
    );
  }
}
//actualiza una nota
export function actualizarNota(
  notaCambio,
  idAlumno,
  nombreAlumno,
  apellidosAlumno,
  idParcial,
  nombreParcial,
  pesoParcial,
  idTrimestre
) {
  console.log("Hola voy a actualizar una nota");
}






////////calculos notas y mas cosas/////

export function notaPorcentaje(nota, porcentaje) {
  let notaPacialFinal = 0;
  notaPacialFinal = Number(((nota * porcentaje) / 100).toFixed(2));
  return notaPacialFinal;
}
//console.log("La nota redondeada a dos es: " + notaPorcentaje(9.6, 60));


