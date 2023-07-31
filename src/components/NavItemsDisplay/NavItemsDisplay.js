import React, { useContext } from "react";
import "./navitemsdisplay.css";
import { KudaContexts } from "../../App";

import NavlinkItem from "../NavlinkItem/NavlinkItem";

import {
  personalItems,
  businessItems,
  companyItems,
  helpItems,
} from "../../data";

const NavItemsDisplay = () => {
  const { activeLink } = useContext(KudaContexts);
  return (
    <div className='navitemsdisplay'>
      <p className='title'>{activeLink}</p>
      <ul className='navitemsdisplayList'>
        {activeLink === "Personal"
          ? personalItems.map((item) => (
              <NavlinkItem name={item.name} icon={item.icon} display />
            ))
          : []}
        {activeLink === "Business"
          ? businessItems.map((item) => (
              <NavlinkItem name={item.name} icon={item.icon} display />
            ))
          : []}
        {activeLink === "Company"
          ? companyItems.map((item) => (
              <NavlinkItem name={item.name} icon={item.icon} display />
            ))
          : []}
        {activeLink === "Help"
          ? helpItems.map((item) => (
              <NavlinkItem name={item.name} icon={item.icon} display />
            ))
          : []}
      </ul>
    </div>
  );
};

export default NavItemsDisplay;
