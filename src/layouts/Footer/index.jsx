import React from 'react';
import logo from '../../assets/gisat_logo.webp';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='nav_row'>
                <a
                    className='logo_invert'
                    href='https://www.gisat.cz/'
                >
                    <img src={ logo } alt='gisat logo'></img>
                </a>
                <p>9.11.2022</p>
            </div>
            <p>Test task completed by Andrii Khrystodulov</p>
        </div>
    </footer>
  )
}

export default Footer