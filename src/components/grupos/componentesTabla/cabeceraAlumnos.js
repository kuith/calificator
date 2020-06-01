import React from "react";
import CabeceraParciales from "./cabeceraParciales";

const CabeceraAlumnos = (props) => {
  return (
    <>
      <th scope="col"> Nombre </th>
      <th scope="col"> Apellidos</th>
      <CabeceraParciales parciales = {props.parciales} />
    </>
  );
};

export default CabeceraAlumnos;