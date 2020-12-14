import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./services/history";

// Components
import Home from "./components/Home";
import Devices from "./components/Devices";
import Sectors from "./components/Sectors";
import Sidebar from "./components/Sidebar";

// Semantic UI
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Container fluid className={"platform"}>
      <Sidebar>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:factory/sectors" component={Sectors} />
            <Route exact path="/sector/:sector/devices" component={Devices} />
          </Switch>
        </Router>
      </Sidebar>
    </Container>
  );
}

export default App;
