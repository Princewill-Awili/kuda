import React, { useState,useContext, memo } from "react";
import "./navbar.css";
import Logo from "../../assets/kudaLogo.png";
import {
  flags,
  personalItems,
  businessItems,
  companyItems,
  helpItems,
} from "../../data";

import Navlink from "../Navlink/Navlink";
import MobileNavlink from "../MobileNavlink/MobileNavlink";
import { KudaContexts } from "../../App";
import {HiOutlineMenuAlt4 as MenuIcon} from 'react-icons/hi'
import {GrClose as CloseIcon} from 'react-icons/gr'


const [ngn] = flags;

const Navbar = () => {
  const { activeLink, setActiveLink} = useContext(KudaContexts);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);



  return (
    <div className='navbar'>
      <img src={Logo} alt='logo' className='kudaLogo' />
      <div className='navLinksHolder'>
        <Navlink
          title='Personal'
          double
          items={activeLink === "personal" ? personalItems : []}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlink
          title='Business'
          items={activeLink === "business" ? businessItems : []}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlink
          title='Company'
          items={activeLink === "company" ? companyItems : []}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Navlink
          title='Help'
          items={activeLink === "help" ? helpItems : []}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </div>
      <div className='miscLinks'>
        <p>Sign In</p>
        <div className='joinKuda'>Join Kuda</div>
        <div className='flagHolder'>
          <img src={ngn} alt='flag' className='flag' />
        </div>
        <div className='menuIconHolder'>
          <MenuIcon className='menuIcon' />
          {mobileNavOpen && <CloseIcon className='closeIcon' />}
        </div>
      </div>
      {mobileNavOpen && (
        <div className='mobileNavbar'>
          <div className='topNavbar'>
            <div className='joinKuda'>Join Kuda</div>
            <div className='joinKuda signInBtn'>Sign In</div>
          </div>
          <ul className='mobileNavlinkList'>
            <MobileNavlink title='Personal' items={personalItems} />
            <MobileNavlink title='Business' items={businessItems} />
            <MobileNavlink title='Company' items={companyItems} />
            <MobileNavlink title='Developers' />
            <MobileNavlink title='Contact Us' />
            <MobileNavlink title='Help' items={helpItems} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(Navbar);
