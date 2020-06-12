import React, { Fragment } from 'react';
import './App.scss';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
