import React from "react";
import { Link } from "react-router-dom";

const BotonLink = (props) => {

  return (
    <button type="button" className="btn btn-primary">
      <Link style={{ color: 'white' }}
        to={{
          pathname: props.ruta,
          anio: props.anio,
          grupo: props.grupo,
          curso: props.curso,
          trimestre: props.trimestre
          }
        }
        anio={props.anio}
      >
        {props.etiqueta}
      </Link>
    </button>
  );
};

export default BotonLink;
