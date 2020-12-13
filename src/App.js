import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

// Semantic UI
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Container fluid className={"platform"}>
      <Sidebar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:factor/sectors" component={Home} />
            <Route exact path="/sector/:sector/devices" component={Home} />
          </Switch>
        </BrowserRouter>
      </Sidebar>
    </Container>
  );
}

export default App;
