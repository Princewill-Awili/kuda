import React from "react";
import "./navlinkitem.css";


const NavlinkItem = ({ name, icon, setShowFilm, setActiveLink, display }) => {
  return (
    <div className='navlinkitem' 
      onClick={()=>{
        if(display){
          console.log('Component is for display purposes for now!')
        }else{
          setShowFilm(false);
          setActiveLink("");
        } 
      }}>
      {icon && <div className='iconBubble'>{icon}</div>}
      <p className='navlinkitemTxt'>{name}</p>
    </div>
  );
};

export default NavlinkItem;
