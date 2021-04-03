import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import SplitsheetForm from './SplitsheetForm';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <SplitsheetForm />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
