import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './scenes/Home/Home';
import Login from './scenes/Login/Login';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-content'>
        <Switch>
          <Route path='/' exact component={Login} /> 
          <Route path='/inicial' exact component={Home}/>
          <Route path='/pesquisar' exact component={Home}/>
          <Route path='/minhas-organizacoes' exact component={Home}/>
          <Route path='/minhas-manifestacoes' exact component={Home}/>
          <Route path='/criar-manifestacao' exact component={Home}/>
          <Route path='/manifestacao/:id' exact component={Home} />
          <Route path='/manual' exact component={Home}/>
          <Redirect to='/' />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
