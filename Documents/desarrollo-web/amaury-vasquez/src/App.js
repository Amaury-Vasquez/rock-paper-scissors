import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/amaury-vasquez" component={Home}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
