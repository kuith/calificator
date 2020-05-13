import React from "react";

const CabeceraAlumnos = (props) => {
  return (
    <>
      <th scope="col"> Nombre </th>
      <th scope="col"> Apellidos</th>
      {props.parciales}
    </>
  );
};

export default CabeceraAlumnos;