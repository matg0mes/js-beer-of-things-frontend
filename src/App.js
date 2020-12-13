import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

// Semantic UI
import "semantic-ui-css/semantic.min.css";

//Styles
import "./";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Sidebar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/home" component={ Home } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
