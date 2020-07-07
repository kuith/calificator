import React from "react";

const CabeceraParciales = (props) => {
  const parcialesCabecera = props.parciales.map((parCab) => (
    <th key={parCab.idParcial}>
      {parCab.nombreParcial} - {parCab.pesoParcial}%
    </th>
  ));

  return parcialesCabecera;
};

export default CabeceraParciales;
