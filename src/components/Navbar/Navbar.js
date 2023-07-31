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
import {IoIosArrowBack as BackArrow} from 'react-icons/io'


const [ngn] = flags;

const Navbar = () => {
  const { activeLink, setActiveLink} = useContext(KudaContexts);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openNavItems, setOpenNavItems] = useState(false);

  const toggleMobileNav =()=>{
    setMobileNavOpen(!mobileNavOpen)
  }



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
        <p className='signInLink'>Sign In</p>
        <div className='joinKuda'>Join Kuda</div>
        {mobileNavOpen === false && (
          <div className='flagHolder'>
            <img src={ngn} alt='flag' className='flag' />
          </div>
        )}

        <div className='menuIconHolder'>
          {mobileNavOpen === false && (
            <MenuIcon className='menuIcon' onClick={toggleMobileNav} />
          )}
          {mobileNavOpen && (
            <CloseIcon className='closeIcon' onClick={toggleMobileNav} />
          )}
        </div>
      </div>
      {mobileNavOpen && (
        <div className='mobileNavbar'>
          <div className='topNavbar'>
            <div className='mobileJoinKuda'>Join Kuda</div>
            <div className='mobileJoinKuda signInBtn'>Sign In</div>
          </div>
          <ul className='mobileNavlinkList'>
            <MobileNavlink
              title='Personal'
              items={personalItems}
              openNavItems={openNavItems}
              setOpenNavItems={setOpenNavItems}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <MobileNavlink
              title='Business'
              items={businessItems}
              openNavItems={openNavItems}
              setOpenNavItems={setOpenNavItems}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <MobileNavlink
              title='Company'
              items={companyItems}
              openNavItems={openNavItems}
              setOpenNavItems={setOpenNavItems}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <MobileNavlink
              title='Developers'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <MobileNavlink
              title='Contact Us'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <MobileNavlink
              title='Help'
              items={helpItems}
              openNavItems={openNavItems}
              setOpenNavItems={setOpenNavItems}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </ul>
          {openNavItems && (
            <div className='navItemsArea'>
              <div className='navItemsAreaTop'>
                <BackArrow onClick={() => setOpenNavItems(false)} />
                <span
                  className='backBtn'
                  onClick={() => setOpenNavItems(false)}
                >
                  Back
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Navbar);
