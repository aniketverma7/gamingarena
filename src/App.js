import React from 'react';
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Mixandmatch from './games/mixandmatch/Mixandmatch';
import Game from './games/whack-a-mole/Game';
import Rps from './games/rps/Rps';
import Snake from './games/snake/Snake';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
        <Route path="/mixandmatch">
            <Mixandmatch/>
          </Route>
          <Route path="/whackamole">
            <Game/>
          </Route>
          <Route path="/rps">
            <Rps/>
          </Route>
          <Route path="/snake">
            <Snake/>
            </Route>
        </Switch>
      </Router> 
    </>
  )
}
