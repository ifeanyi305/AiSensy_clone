import React from 'react';
import { BiLinkExternal } from 'react-icons/bi'

const Navbar = () => {
  const style = {
    text: "text-[14px] text-[#4A4A4A]",
    flex: "flex-wrap flex items-center gap-2",
  }
  return (
    <header className="account_status md:flex md:sticky md:top-0 w-full p-[13px] justify-between items-center bg-[#fff] shadow-black">
      <h3 className="md:ml-16 font-normal text-[20px]">Ifeanyi's Project</h3>
      <div className="md:flex items-center md:gap-24">
        <div className={style.flex}>
          <p className={style.text}>WhatsApp Business API Status: <span className="text-[#F91100] text-[14px]">  Pending</span></p>
          <button className="bg-[#2DC10F] text-[#fff] rounded-md p-1 flex items-center gap-2"><span><BiLinkExternal/></span><small className="font-semibold text-[14px]">Apply now</small></button>
        </div>
        <div className={style.flex}>
          <p className={style.text}>Current Plan: <span className={style.text}>  NONE</span></p>
          <button className="bg-[#600E7D] text-[#fff] rounded-md py-[2px] px-2"><small>Upgrade now</small></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;