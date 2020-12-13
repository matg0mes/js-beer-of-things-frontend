import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';

// Semantic UI
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        {/* <Route exact path="/home" component={ Home } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
