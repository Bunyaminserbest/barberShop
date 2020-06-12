import React, { Component } from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export class Landing extends Component {
  render() {
    return (
      <section className='landingP'>
        <div>
          <img src={logo} alt='logo' />
        </div>

        <Link to='/register'>Inscris toi</Link>
      </section>
    );
  }
}

export default Landing;
