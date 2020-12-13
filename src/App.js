import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

import {
  Container,
  Header,
  Grid,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";
import {} from "semantic-ui-react";

// Semantic UI

import "semantic-ui-css/semantic.min.css";

//Styles
import "./";

function App() {
  return (
    <Container fluid className={"main-container"}>
      <Sidebar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/devices" component={Home} />
          </Switch>
        </BrowserRouter>
      </Sidebar>
    </Container>
  );
}

export default App;
