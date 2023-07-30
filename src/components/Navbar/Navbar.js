import React from 'react'
import './navbar.css'
import Logo from '../../assets/kudaLogo.png'
import { flags } from '../../data'

const [ngn] = flags;


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt='logo' className='kudaLogo' />
      <div className='navLinksHolder'>
        <p>Personal</p>
        <p>Business</p>
        <p>Company</p>
        <p>Help</p>
      </div>
      <div className='miscLinks'>
        <p>Sign In</p>
        <div className='joinKuda'>Join Kuda</div>
        <div className='flagHolder'>
          <img src={ngn} alt='flag' className='flag' />
        </div>
      </div>
    </div>
  );
}

export default Navbar