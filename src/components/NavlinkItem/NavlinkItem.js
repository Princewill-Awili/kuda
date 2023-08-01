import React from "react";
import "./navlinkitem.css";


const NavlinkItem = ({ name, icon, setShowFilm, setActiveLink, display }) => {
  return (
    <div
      className='navlinkitem'
      style={{ width: display ? "50%" : "" }}
      onClick={() => {
        if (display) {
          console.log("Component is for display purposes for now!");
        } else {
          setShowFilm(false);
          setActiveLink("");
        }
      }}
    >
      {icon && (
        <div
          className='iconBubble'
          style={{ fontSize: display ? "2.5em" : "" }}
        >
          {icon}
        </div>
      )}
      <p
        className='navlinkitemTxt'
        style={{ fontSize: display ? "2.5em" : "" }}
      >
        {name}
      </p>
    </div>
  );
};

export default NavlinkItem;
