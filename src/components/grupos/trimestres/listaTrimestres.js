import React, { useState, useEffect} from "react";
import { obtenerTrimestre, recibirTrimestreActivo } from '../../../util/funcionesUtiles';

const ListaTrimestres = (props) => {
  const lisatadoTrimestres = obtenerTrimestre(props.grupo);
  const [trirmestreActivo, setTrirmestreActivo] = useState(lisatadoTrimestres[0]); 

  useEffect(() => {
    recibirTrimestreActivo(trirmestreActivo.idTrimestre);
  });

  const trimestres = lisatadoTrimestres.map((trimestre) => (
    <button type="button"
      key={trimestre.idTimestre}
      class="btn btn-light btn-sm"
      onClick={() => setTrirmestreActivo(trimestre)}
    >
      {trimestre.nombreTrimestre}
    </button>
  ));

  return (
    <>
      <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {trirmestreActivo.nombreTrimestre}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {trimestres}
      </div>
    </>
  );
};

export default ListaTrimestres;