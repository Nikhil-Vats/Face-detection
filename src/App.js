import React, { Suspense } from 'react';
import './App.css';

import Home from "./Pages/Home/Home";
import Data from "./Pages/Data/Data";
import { Switch, Route, withRouter } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<span>loading...</span>}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/data" exact component={Data} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default withRouter(App);
