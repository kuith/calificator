import React from 'react';
import Header from './header';
import intro from './intro';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={intro} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
