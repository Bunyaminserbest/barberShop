import React, { Component } from 'react';
import logo from '../../img/logo.png';

export class Landing extends Component {
  render() {
    return (
      <section className='landingP'>
        <div>
          <img src={logo} alt='logo' />
        </div>

        <a href='/'>Inscris toi</a>
      </section>
    );
  }
}

export default Landing;
