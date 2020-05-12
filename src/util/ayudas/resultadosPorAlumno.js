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
        idTrimestre,
        nota,
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
        };
        acc.push(datosAlumno);
      }

      datosAlumno.parciales.push({
        idParcial,
        idTrimestre,
        nota,
      });

      return acc;
    },
    [] // empezamos con un array vacío
  );
}
