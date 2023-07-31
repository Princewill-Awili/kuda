import React, { useContext, memo } from "react";
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
import { KudaContexts } from "../../App";

const [ngn] = flags;

const Navbar = () => {
  const { activeLink, setActiveLink} = useContext(KudaContexts);

  return (
    <div
      className='navbar'
    >
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
      </div>
    </div>
  );
};

export default memo(Navbar);
