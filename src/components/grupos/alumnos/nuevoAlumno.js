import React from 'react';
import { useForm } from 'react-hook-form';

function NuevoAlumno(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  const anioAcademico = props.location.anio;
  const grupo = props.location.grupo;
  const curso = props.location.curso;
  const trimestre = props.location.trimestre;

//mandar tambien, grupo y trimestre
  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">Nuevo Alumno</h3>
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label for="formNombreAlumno">Nombre del Alumno</label>
              <input type="text"
                ref={register({ maxLength: 30 })}
                name="nombreAlumno"
                className="form-control"
                id="formGroupNombreAlumnoInput"
                placeholder="Nombre del alumno (necesario)"
                required
              />
              {errors.nombreParcial && <p>El número máximo de caracteres es 30</p>}
            </div>
            <div className="form-group">
              <label for="formApellidosAlumno">Apellidos del Alumno</label>
              <input type="text"
                ref={register({ maxLength: 50 })}
                name="apellidosAlumno"
                className="form-control"
                id="formGroupApellidosAlumnoInput"
                placeholder="Apellidos del alumno (necesario)"
                required
              />
              {errors.nombreParcial && <p>El número máximo de caracteres es 50</p>}
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formAnioAlumno">Año académico</label>
              <input type="string"
                ref={register({ maxLength: 10 })}
                name="anioAlumno"
                class="form-control"
                id="formGroupAnioAlumno"
                placeholder={anioAcademico}
                value={anioAcademico}
              />
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formGrupoAlumno">Grupo</label>
              <input type="string"
                ref={register({ maxLength: 30 })}
                name="grupoAlumno"
                class="form-control"
                id="formGroupGrupoAlumnoInput"
                placeholder={grupo}
                value={grupo}
              />
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formCursoAlumno">Curso</label>
              <input type="string"
                ref={register({ maxLength: 30 })}
                name="cursoAlumno"
                class="form-control"
                id="formGroupCursoAlumnoInput"
                placeholder={curso}
                value={curso}
              />
            </div>
            <div className="form-group readonly" style={{ display: "none" }}>
              <label for="formTrimestreAlumno">Grupo</label>
              <input type="string"
                ref={register({ maxLength: 10 })}
                name="trimestreAlumno"
                class="form-control"
                id="formGroupTrimestreAlumnoInput"
                placeholder={trimestre}
                value={trimestre}
              />
            </div>
            
            <button type="submit" className="btn bg-info">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NuevoAlumno;

//De grupo necesito: nombreGrupo, curso y anioAcademico. El idGrupo lo pone el GBD