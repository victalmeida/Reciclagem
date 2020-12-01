import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Pages/Home/Home'
// import Login from '../Pages/Login/Login'
import Cadastrar from '../Pages/Cadastrar/Cadastrar';

const Routes = () => {
  return (
    <Switch>

      <Route exact path='/' component={Home} />
      {/* <Route path='/login' component={Login} /> */}
      <Route path='/cadastrar' component={Cadastrar} />
    </Switch>
  );

}

export default Routes;