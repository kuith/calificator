import React from 'react';
import { useForm } from 'react-hook-form';

function NuevoGrupo () {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">Nuevo Grupo</h3>
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-6">
          <form onSubmit = {handleSubmit(onSubmit)}>
          <div className="form-group">
            <label for="formNombreGrupo">Nombre del Grupo</label>
              <input type="text"
                ref = {register({maxLength: 30})}
                name="nombreGrupo"
                class="form-control"
                id="formGroupNombreGrupoInput"
                placeholder="Nombre del grupo (necesario)"
                required
              />
              {errors.nombreGrupo && <p>El número máximo de caracteres es 30</p>}
          </div>
          <div className="form-group">
            <label for="formnombreCurso">Curso al que pertenece el grupo</label>
              <input type="text"
                ref={register({ maxLength: 30 })}
                name="nombreCurso"
                class="form-control"
                id="formGroupNombreCursoInput"
                placeholder="Curso (necesario)"
                required
              />
              {errors.nombreCurso && <p>El número máximo de caracteres es 30</p>}
          </div>
          <div className="form-group">
            <label for="formAnio">Año académico</label>
              <input type="text"
                ref={register({ pattern: /\d{4}\/\d{4}/ })}
                name="anio"
                class="form-control"
                id="formGroupAnioInput"
                placeholder="Año académico (necesario)"
                required
              />
              {errors.anio && <p>El formato debe ser "xxxx/xxxx</p>}
          </div>
          <button type="submit" class="btn bg-info">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NuevoGrupo;

//De grupo necesito: nombreGrupo, curso y anioAcademico. El idGrupo lo pone el GBD