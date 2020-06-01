import React from "react";

const CabeceraParciales = (props) => {
  const parcialesCabecera = props.parciales.map((parCab) => (
    <th>{parCab.nombreParcial} - {parCab.pesoParcial}%</th>
  ));

  return (
    parcialesCabecera
  );
};

export default CabeceraParciales;

