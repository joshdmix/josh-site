import React, { Component } from "react";
import { Grommet, Box, Heading } from "grommet";
import { aruba, grommet } from "grommet/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import LandingPage from "./LandingPage";
import PortfolioPage from "./PortfolioPage";
import RandomPage from "./RandomPage";

const routes = [
  { path: "/portfolio", component: PortfolioPage },
  { path: "/random", component: RandomPage }
];

class App extends Component {
  render() {
    return (
      <Grommet theme={aruba}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            {routes.map(({ path, component }) => (
              <Route key={path} exact path={path} component={component} />
            ))}
          </Switch>
        </Router>
      </Grommet>
    );
  }
}

export default App;
