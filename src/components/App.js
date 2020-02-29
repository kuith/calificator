import React from "react";
import Header from "./header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./intro";
import Plan from "./planes/plan";
import Grupo from "./grupos/grupo";
import NuevoParcial from "./planes/nuevoParcial";
import NuevoPlan from "./planes/nuevoPlan";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route
            path="/planes/:planId"
            render={({ match }) => <Plan id={match.params.planId} />}
          />
          <Route
            exact
            path="/parciales/nuevoParcial"
            component={NuevoParcial}
          />
          <Route exact path="/nuevoPlan" component={NuevoPlan} />
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
