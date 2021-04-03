import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import SplitsheetForm from './SplitsheetForm';
import SplitsheetLookup from "./SplitsheetLookup";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplitsheetForm} />
      <Route path="/splitsheet/:splitsheetId" component={SplitsheetLookup} />
    </Switch>
  </BrowserRouter>
);

export default App;
