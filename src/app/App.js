import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import Home from "./Home";
import Calculater from "./Calculater"
import Counter from "./Counter"

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="top-nav">
              <NavLink className="top-link" to="/">Home</NavLink>
              <NavLink className="top-link" to="/calculater">在线计算器</NavLink>
              <NavLink className="top-link" to="/counter">在线倒计时</NavLink>
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculater' component={Calculater}/>
            <Route exact path='/counter' component={Counter}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
