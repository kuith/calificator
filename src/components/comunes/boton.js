import React from "react";

const Boton = (props) => {
  return (
    <button type="button" className="btn btn-primary">
      {props.etiqueta}
    </button>
  );
};

export default Boton;
