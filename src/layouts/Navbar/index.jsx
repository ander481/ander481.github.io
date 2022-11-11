import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/gisat_logo.webp'

const Navbar = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='nav_row'>
                <a
                    className='logo'
                    href='https://www.gisat.cz/'
                >
                    <img src={ logo } alt='gisat logo'></img>
                </a>
                <ul className='ul'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                </ul>
            </div>

        </div>
    </header>
  )
}

export default Navbar