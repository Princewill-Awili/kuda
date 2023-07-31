import React from "react";

import { BiSolidRightArrow as ArrowRight } from "react-icons/bi";

const MobileNavlink = ({ title, items, setOpenNavItems }) => {
  const handleLink = () => {
    setOpenNavItems(true);
  };

  return (
    <li className='mobileNavLink' onClick={handleLink}>
      <span>{title}</span>
      {items && <ArrowRight className='arrowRight' />}
    </li>
  );
};

export default MobileNavlink;
