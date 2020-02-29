import React from "react";
import Header from "./header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./intro";
import Plan from "./planes/plan";
import NuevoParcial from "./planes/nuevoParcial";

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
          <Route exact path="/parciales/nuevoParcial" component={NuevoParcial} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
