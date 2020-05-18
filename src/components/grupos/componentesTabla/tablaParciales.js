import React from "react";
import CabeceraNotaFinal from "./cabeceraNotaFinal";
import CabeceraAlumnos from "./cabeceraAlumnos";

const TablaParciales = (props) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className = "thead-dark">
          <tr>
            <CabeceraAlumnos parciales={props.parciales}/>
            <CabeceraNotaFinal/>
          </tr>
        </thead>
        <tbody>{props.datosAlumnos}</tbody>
      </table>
    </div>
  );
};

export default TablaParciales;

