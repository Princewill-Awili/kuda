import React from "react";

import { BiSolidRightArrow as ArrowRight } from "react-icons/bi";

const MobileNavlink = ({ title, items, setOpenNavItems,setActiveLink }) => {
  const handleLink = () => {
    setOpenNavItems(true);
    setActiveLink(title);
  };

  return (
    <li className='mobileNavLink' onClick={handleLink}>
      <span>{title}</span>
      {items && <ArrowRight className='arrowRight' />}
    </li>
  );
};

export default MobileNavlink;
