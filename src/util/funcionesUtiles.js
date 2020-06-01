import {
  realizaGrupo0Trimestre1,
  grupos,
  parcialesGrupo0Trimestre1,
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
        notaFinal
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
          notaFinal
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
  
  console.log("Id del alumno: " + idAlumno +
    ". El nuevo nombre: " + nuevoNombre +
    ". El nuevo apellido: " + nuevoApellido);
  return queryAlumno;
}


export function obtenerGrupos() {
  const gruposObtenidos = grupos;
  return gruposObtenidos
}

export function obtenerDatosParcialesGrupo() {
  const datosObtenidos = realizaGrupo0Trimestre1;
  return datosObtenidos;
}

export function ObtenerParcialesGrupo() {
  const parcialesGrupo = parcialesGrupo0Trimestre1;
  return parcialesGrupo
}

//Funcion que mira el cambio en una celda y si es asi actualiza el estado yb devuelve
//el mismo
export function tratarCambio(e, notaInicialCelda, notaFinalCelda, actualizarEstado) {
  const notaCambio = e.target.innerText;
  if (notaInicialCelda !== notaFinalCelda) {
    console.log("Hay cambios. Nueva nota: " + notaFinalCelda);
    actualizarEstado(notaCambio);
    return notaCambio;
  } else {
    console.log("No hay cambios. Nota inicial=final: " + notaInicialCelda);
  }
}

///////Cambiar nota//////////////
export function cambiarNota(idAlumno, idParcial, nota) {
  console.log("IdAlumno: " + idAlumno + ". idParcial: " + idParcial + ". Nota nueva: " + nota);
}




////////calculos notas y mas cosas/////

export function notaPorcentaje(nota, porcentaje) {
  let notaPacialFinal = 0;
  notaPacialFinal = Number(((nota * porcentaje) / 100).toFixed(2));
  return notaPacialFinal;
}
//console.log("La nota redondeada a dos es: " + notaPorcentaje(9.6, 60));

export function calcularNotaFinal(notas) {
  let notaFinal = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sumaNotas = notas.reduce(reducer);
  notaFinal = Number((sumaNotas/notas.length).toFixed(1));
  return notaFinal;
  }


//console.log("La nota final es: " + calcularNotaFinal([1, 7, 2, 3.50, 4, 5, 6]));