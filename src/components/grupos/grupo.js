import React, { useState, useEffect } from "react";
import { grupos } from "../../util/datos";

function Grupo(props) {
  const gru = grupos[props.id];

  return (
    <div className="container text-center">
      <div className="row mt-2 mb-2">
        <div class="col-sm">
          <h3>{gru.nombre}</h3>
        </div>
      </div>
    </div>
  );
}

export default Grupo;
