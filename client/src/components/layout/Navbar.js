import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar '>
        <h1>
          <a href='index.html'>
            <i class='fas fa-cut'></i>Sakalli Barber App
          </a>
        </h1>
        <ul className='navbarBtns'>
          <li>
            <a href='/'>A propos</a>
          </li>
          <li>
            <a href='/'>Gallerie</a>
          </li>
          <li>
            <a href='/'>
              <i class='fas fa-sign-in-alt'></i>Connexion
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
