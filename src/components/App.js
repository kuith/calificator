import React from "react";
import Header from "./header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./intro";
//import Plan from "./planes/plan";
import Grupo from "./grupos/grupo";
import NuevoParcial from "./grupos/parciales/nuevoParcial";
//import NuevoPlan from "./planes/nuevoPlan";
import NuevoGrupo from "./grupos/nuevoGrupo";
import NuevoAlumno from "./grupos/alumnos/nuevoAlumno.js";
import "./estilos.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route
            exact
            path="/grupos/parciales/nuevoParcial"
            component={NuevoParcial}
          />
          <Route
            exact
            path="/grupos/alumnos/nuevoAlumno"
            component={NuevoAlumno}
          />
          <Route exact path="/grupos/nuevoGrupo" component={NuevoGrupo} />
          <Route
            path="/grupos/:grupoId"
            render={({ match }) => <Grupo id={match.params.grupoId} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
