import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navabar bg-dark'>
        <h1>
          <a href='index.html'>Sakalli Barber App</a>
        </h1>
        <ul>
          <li>Galerie</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
