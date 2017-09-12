import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import { Home, QueryParams,Content } from './Components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/QueryParams" activeClassName="active">Query params</NavLink></li>
          </ul>
        </div>
        <p className="App-intro">
          <Switch>
          
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/QueryParams/submit" component={Content} />
                        <Route path="/QueryParams" component={QueryParams} />
          
          </Switch>
        </p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
