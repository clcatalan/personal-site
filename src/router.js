import React, { Component } from 'react';
import HomePage from './pages/HomePage';
 
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/"  component={HomePage}/>
        </Switch>
      </Router>
    )
  }
}