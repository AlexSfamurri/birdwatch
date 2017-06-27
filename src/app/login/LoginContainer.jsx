import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const LoginContainer = () => (
  <main>
      <Switch>
        <Route path='/login' component={Login}/> 
        <Route path='/signup' component={SignUp}/>
      </Switch>
  </main>
);

export default LoginContainer;