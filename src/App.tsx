import React from "react";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Game } from "./components/Game";
import { Header } from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Game />
    </React.Fragment>
  );
}
export default App;
