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
import Metal from '../Components/Metal';
import Papel from '../Components/Papel';
import Plastico from '../Components/Plastico';
import Vidro from '../Components/Vidro';
import Section3 from '../Components/Section3/Section3';

const Routes = () => {
  return (
    <Switch>

      <Route exact path='/' component={Home} />
      {/* <Route path='/login' component={Login} /> */}
      <Route path='/cadastrar' component={Cadastrar} />
      <Route path='/metal' component={Metal}/>
      <Route path='/papel' component={Papel}/>
      <Route path='/plastico' component={Plastico}/>
      <Route path='/section3' component={Section3}/>
      <Route path='/vidro' component={Vidro}/>
      <Route path='*' component={Home}/> 
    </Switch>
  );

}

export default Routes;