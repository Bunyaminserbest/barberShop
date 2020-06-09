import React, { Fragment } from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

const App = () => (
  <Fragment>
    <h1>App</h1>
    <Landing />
    <Navbar />
  </Fragment>
);

export default App;
