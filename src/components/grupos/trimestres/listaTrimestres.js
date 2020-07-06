import React, { useState, useEffect} from "react";
import { obtenerTrimestre, recibirTrimestreActivo } from '../../../util/funcionesUtiles';

const ListaTrimestres = (props) => {
  const listadoTrimestres = obtenerTrimestre(props.grupo);
  const [trirmestreActivo, setTrirmestreActivo] = useState(listadoTrimestres[0]); 

  useEffect(() => {
    recibirTrimestreActivo(trirmestreActivo.idTrimestre);
  });

  const trimestres = listadoTrimestres.map((trimestre) => (
    <button type="button"
      key={trimestre.idTimestre}
      className="btn btn-light btn-sm"
      onClick={() => setTrirmestreActivo(trimestre)}
    >
      {trimestre.nombreTrimestre}
    </button>
  ));

  return (
    <>
      <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {trirmestreActivo.nombreTrimestre}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {trimestres}
      </div>
    </>
  );
};

export default ListaTrimestres;