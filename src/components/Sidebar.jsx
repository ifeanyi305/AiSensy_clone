import React from 'react';
import './style/index.css';
import logo from '../assets/images/aisensyLogo.png'
import { MdOutlineDashboard } from 'react-icons/md'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { MdOutlineHistory } from 'react-icons/md'
import { MdOutlineContacts } from 'react-icons/md'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { AiFillFacebook } from 'react-icons/ai'
import { VscSettingsGear } from 'react-icons/vsc'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { GrUnlink } from 'react-icons/gr'
import { FaCircleNotch } from 'react-icons/fa'

const Sidebar = ({ nav, toggleNav }) => {
  const style = {
    flexContent: "flex px-4 md:flex-col md:my-6 items-center gap-4 text-[#000] md:text-[#fff]",
    flex: "md:flex md:gap-0 gap-4 my-2 md:my-0 flex md:flex-col md:justify-center",
    img: "w-12",
    icon: "m-auto text-[22px]",
    text: "md:text-[9px] text-[14px] text-center",
  }
  return (
    <div className={`sidebar ${nav ? 'open' : ''}`}>
      <div className="w-full" onClick={toggleNav}>
        <div className="hidden md:flex justify-center my-4 items-center">
          <img className={style.img} src={logo} alt="AiSensy_logo" />
        </div>
        <div className="md:hidden flex gap-4 items-center my-6">
          <img className={style.img} src={logo} alt="AiSensy_logo" />
          <h1 className="text-[18px] text-[#4A4A4A]">AiSensy</h1>
        </div>
        <div className={style.flexContent}>
          <div className="icon_con md:flex bg-[#EBF5F3] md:bg-transparent p-[10px] md:p-[1px] rounded-[5px] md:gap-0 gap-4 my-2 md:my-0 flex md:flex-col md:justify-center">
            <button type="button">
              <MdOutlineDashboard className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Dashboard</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <HiOutlineChatAlt2 className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Live chat</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <MdOutlineHistory className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>History</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <MdOutlineContacts className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Contacts</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <GiAirplaneDeparture className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Campaign</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <AiFillFacebook className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Meta Ads</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <VscSettingsGear className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Manage</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <MdOutlineDashboardCustomize className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Integrations</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <GrUnlink className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>Ecomm+</a>
          </div>
        </div>
        <div className={style.flexContent}>
          <div className={style.flex}>
            <button type="button">
              <FaCircleNotch className={style.icon} />
            </button>
            <a href='#broken' className={style.text}>All projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;