import React from "react";

const TituloTabla = (props) => {
  return (
    <h6>
      {props.nombreGrupo} - {props.anio}
    </h6>
  );
};

export default TituloTabla;
