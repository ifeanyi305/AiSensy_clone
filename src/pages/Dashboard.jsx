import React, { useState } from 'react';
import rocket from '../assets/images/rocket_icon.png';
import magnet from '../assets/images/magnet.png';
import widget from '../assets/images/widget.png';
import SetupBusinessAcc from '../components/SetupBusinessAcc'
import Tutorial from '../components/Tutorial'
import whatsapp_tutorial from '../assets/images/whatsapp_tutorial.png';
import { BsPlay } from 'react-icons/bs';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { AiOutlineUpCircle } from 'react-icons/ai';
import { MdOutlineMenuBook } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrSchedule } from 'react-icons/gr';
import { HiPencil } from 'react-icons/hi';

const Dashboard = () => {
  const style = {
    input: "border-2 border-[#808080] bg-transparent mb-2 w-[70%] md:w-[170px] rounded-md p-1",
    flex: "flex items-center my-2 justify-between",
    label: "text-[12px]",
    text: "text-[#4A4A4A] text-[0.875rem]",
    smallTag: "text-[11px] font-light"
  }

  const [state, setState] = useState(false);
  const toggleBox = () => {
    setState(!state);
  };

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <section className="md:flex justify-center md:justify-between items-start gap-2">
      <div className="intro md:w-full">
        <div>
          <div className='flex flex-wrap mb-2 justify-between items-center'>
            <h4 className="text-[#0a474c] text-[16px]">Hey Oti, Welcome to AiSensy!</h4>
            <div className="flex items-center gap-4">
              <div className="flex features items-center gap-2">
                <BsPlay />
                <p className={style.text}>Onboarding video</p>
              </div>
              <div className="flex features items-center gap-2">
                <BsFillLightningFill />
                <p className={style.text}>Start tour</p>
              </div>
            </div>
          </div>
          <div className="p-8 whatsapp_engagement flex items-center text-[#fff] rounded-md">
            <div>
              <h4 className="text-[16px] font-semibold mb-2 text-[#fff]">Start WhatsApp Engagement for your Business</h4>
              <p className={style.smallTag}>Your account is currently in test mode.You can try & experience a feature like
                Broadcasting,<br />
                Live chat with your test Contact via Test Business Number<br />
                Test Business number : +919581224153<br />
                Test Contact number : +2347067255308
              </p>
              <p className="mt-4 text-[14px] font-normal">You'll need to Apply for WhatsApp Business API to use AiSensy for your Business</p>
              <button className="text-[#600e7d] bg-[#fff] mt-2 rounded-md py-1 px-2  flex items-center gap-2"><RiWhatsappFill className="text-[#2DC10F]" /> Aplly for WhatsApp Business API (Free)</button>
              <button className="live_meeting text-[0.875] bg-transparent border-[#fff] mt-2 rounded-md p-1 px-2 flex items-center gap-2"><GrSchedule className="live_meeting_icon" /> Schedule live demo</button>
            </div>
            <div className="hidden md:block">
              <img className="rocket" src={rocket} alt="rocket_image" />
            </div>
          </div>
        </div>
        <div className="account_status my-4 rounded-md p-4">
          <SetupBusinessAcc state={state} />
          <p className="flex gap-2 items-center"> {state ? 'Show less step' : 'show more'} 
            <button type="button" onClick={toggleBox}>
              {!state ? <AiOutlineDownCircle /> : <AiOutlineUpCircle />}
            </button>
          </p>
        </div>
        <div className="account_status my-4 rounded-md p-4">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-[18px]">Platform Walkthrough & Tutorials</h3>
              <p className="my-2 p-2 text-[#0a474c] application_process text-[0.875rem] flex items-center gap-2" href="#broken"><MdOutlineMenuBook />Read platform guide</p>
            </div>
            <div>
              <img className="" src={whatsapp_tutorial} alt="whatsapp_tutorial" />
            </div>
          </div>
          <p className="flex gap-2 items-center"> {dropdown ? 'Explore tutorials' : 'See less'} 
            <button type="button" onClick={handleDropdown}>
              {dropdown ? <AiOutlineDownCircle /> : <AiOutlineUpCircle />}
            </button>
          </p>
          <Tutorial dropdown={dropdown} />
        </div>
      </div>
      <div className="md:w-[40%] test_mode">
        <div className="account_status rounded-md p-6">
          <h4 className="mb-[0.35em] text-[16px]">Account Status :<span className="text-[#0a474c]"> Test Mode</span></h4>
          <p className="text-[#6E6E6E] font-normal text-[12px]">
            Test mode enables you to explore Broadcasting and Live
            Chat features of AiSensy before applying for WhatsApp API
          </p>
          <div className="flex my-2 md:flex-col gap-2">
            <p className="text-[14px]">Test Business Number :</p>
            <p className="business_number text-[14px]"> +919581224153</p>
          </div>
          <div className={style.flex}>
            <h4 className="text-[16px] font-normal">Test contact</h4>
            <p className="flex text-[0.8125rem] text-[#0a474c] items-center gap-2">Edit <HiPencil /></p>
          </div>
          <div>
            <div className="input_container">
              <label className={style.label}>Contact name</label>
              <input className={style.input} type="text" />
            </div>
            <div className="input_container">
              <label className={style.label}>WhatsApp number</label>
              <input className={style.input} type="number" />
            </div>
          </div>
          <div className={style.flex}>
            <button className="bg-[#000] text-[0.875rem] text-[#fff] px-2 py-1 rounded-md">Try Broadcasting</button>
            <button className="bg-transparent border-2 text-[#000] px-2 py-1 rounded-md">Try live chat</button>
          </div>
          <hr className="my-2" />
          <p className="my-2 text-[#0a474c] text-[14px]">Wish to setup AiSensy for your Business?</p>
          <button className="bg-[#2DC10F] text-[#fff] mb-4 w-full text-[0.875rem] rounded-md py-[6px] px-[16px]">Free Whatsapp Business API</button>
        </div>
        <div className="account_status my-4 rounded-md p-4">
          <p className="text-[#6E6E6E] text-[12px]">Current plan</p>
          <h4 className="text-[16px]">NONE</h4>
          <div className="mt-4">
            <p className="block text-[12px] text-center">You don't have any plan</p>
            <button className="plan w-full text-[#fff] mt-2 rounded-md p-2">Get a plan</button>
          </div>
        </div>
        <div className="rounded-md my-4 p-4 account_status">
          <img className="w-[60px]" src={magnet} alt="magnet" />
          <div className="my-2 font-extrabold text-[16px]">Customize WhatsApp Link</div>
          <p className="text-[#6E6E6E] text-[14px]">Create shareable links & QR for your WA business number</p>
        </div>
        <div className="rounded-md p-4 account_status">
          <img className="w-[60px]" src={widget} alt="widget" />
          <div className="my-2 font-extrabold text-[16px]">WhatsApp Website Button</div>
          <p className="text-[#6E6E6E] text-[14px]">Drive WhatsApp sales with personalised CTAs</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;