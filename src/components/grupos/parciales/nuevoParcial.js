import React from 'react';
import { useForm } from 'react-hook-form';

function NuevoParcial() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

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
            
            <button type="submit" class="btn bg-info">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NuevoParcial;

//De grupo necesito: nombreGrupo, curso y anioAcademico. El idGrupo lo pone el GBD