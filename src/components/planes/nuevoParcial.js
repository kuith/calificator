import React from 'react';

const nuevoParcial = () => {
  return (
    <div className="container text-center">
      <div class="row justify-content-center mt-2 mb-2">
        <div class="col-6">
          <h3>Nuevo Parcial</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <form>
            <div class="form-group">
              <label for="inputName">Nombre Parcial</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                aria-describedby="nameHelp"
              ></input>
            </div>
            <div class="form-group">
              <label for="inputPeso">Peso Parcial</label>
              <input
                type="number"
                class="form-control"
                id="inputPeso"
                aria-describedby="pesoHelp"
              ></input>
            </div>
            <button type="submit" class="btn btn-primary">
              Aceptar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default nuevoParcial;