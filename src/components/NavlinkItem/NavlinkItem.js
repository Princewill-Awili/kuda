import React from "react";
import "./navlinkitem.css";


const NavlinkItem = ({ name, icon, setShowFilm, setActiveLink }) => {
  return (
    <div className='navlinkitem' 
      onClick={()=>{
        setShowFilm(false);
        setActiveLink('');
      }}>
      {icon && <div className='iconBubble'>{icon}</div>}
      <p className='navlinkitemTxt'>{name}</p>
    </div>
  );
};

export default NavlinkItem;
