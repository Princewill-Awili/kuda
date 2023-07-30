import React, { useContext } from "react";
import "./navlink.css";
import { BiSolidDownArrow as ArrowDwn } from "react-icons/bi";
import NavlinkItem from "../NavlinkItem/NavlinkItem";
import { KudaContexts } from "../../App";

const Navlink = ({ title, items, double, setActiveLink }) => {

  const { showFilm, setShowFilm } = useContext(KudaContexts);

  return (
    <div 
      className='navlink' 
      onMouseEnter={() => {
        setShowFilm(true);
        if(title==='Personal'){
          setActiveLink('personal');
        }else if(title==='Business'){
          setActiveLink('business')
        }else if(title==='Company'){
          setActiveLink('company')
        }else if(title==='Help'){
          setActiveLink('help')
        }
        }} >
      <p className='navlinkTitle'>
        {title} <ArrowDwn className='arrow' />
      </p>
      {showFilm && (
        <ul
          className='navlinkList'
          style={{ minWidth: double ? "360px" : "180px"}}
        >
          {items.map((item, index) => (
            <NavlinkItem key={index} name={item.name} icon={item.icon} setShowFilm={setShowFilm} setActiveLink={setActiveLink}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navlink;
