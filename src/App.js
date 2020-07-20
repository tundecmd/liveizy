import React from 'react';
import Register from './components/register/register';
import './App.scss';
import Login from './components/login/login';
import { Switch, Route } from 'react-router-dom';
import AddProperty from './components/add-property/add-property';


const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/addproperty' component={AddProperty} />
          
        </Switch>
    </div>
  )
}

export default App
