import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/sass/main.scss";
const App: React.FC = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
};

export default App;
