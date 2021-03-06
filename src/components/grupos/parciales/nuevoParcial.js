import React from 'react';
import { useForm } from 'react-hook-form';
//import { useParams} from "react-router-dom";

function NuevoParcial(props) {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }

  const anioAcademico = props.location.anio;
  const grupo = props.location.grupo;
  const curso = props.location.curso;
  const trimestre = props.location.trimestre;

  console.log(
    " Año: " + anioAcademico +
    " Grupo: " + grupo +
    " Curso: " + curso +
    " Trimestre: " + trimestre 
  )
//mandar tambien, grupo y trimestre
  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">Nuevo Parcial</h3>
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label for="formNombreParcial">Nombre del Parcial</label>
              <input type="text"
                ref={register({ maxLength: 30 })}
                name="nombreParcial"
                class="form-control"
                id="formGroupNombreParcialInput"
                placeholder="Nombre del parcial (necesario)"
                required
              />
              {errors.nombreParcial && <p>El número máximo de caracteres es 30</p>}
            </div>
            <div className="form-group">
              <label for="formPesoParcial">Peso del Parcial</label>
              <input type="number"
                ref={register({ maxLength: 3, min: 1, max: 100 })}
                name="pesoParcial"
                class="form-control"
                id="formGroupPesoParcialInput"
                placeholder="Peso del parcial (necesario)"
                required
              />
              {errors.pesoParcial && <p>El número introducido debe estar entre 1 y 100.</p>}
            </div>
            <div className="form-group readonly" style={{display:"none"}}>
              <label for="formAnioParcial">Año académico</label>
              <input type="string"
                ref={register({ maxLength: 10 })}
                name="anioParcial"
                class="form-control"
                id="formGroupAnioParcialInput"
                placeholder={anioAcademico}
                value={anioAcademico}
              />
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formGrupoParcial">Grupo</label>
              <input type="string"
                ref={register({ maxLength: 30 })}
                name="grupoParcial"
                class="form-control"
                id="formGroupGrupoParcialInput"
                placeholder={grupo}
                value={grupo}
              />
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formCursoParcial">Curso</label>
              <input type="string"
                ref={register({ maxLength: 30 })}
                name="cursoParcial"
                class="form-control"
                id="formGroupCursoParcialInput"
                placeholder={curso}
                value={curso}
              />
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formTrimestreParcial">Grupo</label>
              <input type="string"
                ref={register({ maxLength: 10 })}
                name="trimestreParcial"
                class="form-control"
                id="formGroupTrimestreParcialInput"
                placeholder={trimestre}
                value={trimestre}
              />
            </div>
            <button type="submit" class="btn bg-info">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NuevoParcial;

//De grupo necesito: nombreGrupo, curso y anioAcademico. El idGrupo lo pone el GBD