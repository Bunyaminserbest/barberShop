import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar '>
        <h1>
          <Link to='/'>
            <i class='fas fa-cut'></i>Sakalli Barber App
          </Link>
        </h1>
        <ul className='navbarBtns'>
          <li>
            <Link to='!#'>A propos</Link>
          </li>
          <li>
            <Link to='!#'>Galerie</Link>
          </li>
          <li>
            <Link to='/login'>
              <i class='fas fa-sign-in-alt'></i>Connexion
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
