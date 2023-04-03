import React,  { useState } from 'react';
import { ImCheckboxChecked } from 'react-icons/im';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { AiOutlineUpCircle } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillFacebook } from 'react-icons/ai';
import { MdOutlineMenuBook } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { TiTick } from 'react-icons/ti';

const SetupBusinessAcc = ({ state }) => {
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);
  const [accordionFour, setAccordionFour] = useState(false);
  
  const dropDown = (arr) => {
    arr[1](!arr[0])
  };

  const style = {
    flex: "md:flex items-center justify-between",
    heading: "font-extrabold text-[#2f4f4f] text-[14px]",
    links: "my-2 flex text-[#0a474c] text-[14px] items-center gap-2 hover:underline",
    text: "text-[#6E6E6E] text-[14px] mt-2 mb-[16px]"
  }

  const whatsApp_business = [
    {
      icon: <BsWhatsapp />,
      heading: "Phone & display name verification",
      dropdownIcon: <AiOutlineDownCircle />,
      apply_walkthrough: "Complete display name & phone number verification to increase WhatsApp messaging limit.",
      book_icon: <MdOutlineMenuBook className="text-[17px]" />,
      apply_guide: "Phone number rules",
      book_icon2: <MdOutlineMenuBook className="text-[17px]" />,
      apply_guide2: "Display Name Rules",
      accordion: [accordionOne, setAccordionOne]
    },
    {
      icon: <AiFillFacebook />,
      heading: "Facebook Manager verification",
      dropdownIcon: <AiOutlineDownCircle />,
      apply_walkthrough: "Complete your Facebook manager verification to increase WhatsApp messaging limit.",
      book_icon: <MdOutlineMenuBook className="text-[17px]" />,
      apply_guide: "How to apply for FB verification?",
      book_icon2: <MdOutlineMenuBook className="text-[17px]" />,
      apply_guide2: "FB Verification button greyed out?",
      tutorial_video: <iframe className="border-[2px] rounded-md border-[#000] w-[100%]"  src="https://www.youtube.com/embed/6I5iprduEEw" title="How to Verify Facebook Business Manager Account for WhatsApp Business API | AiSensy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
      accordion: [accordionTwo, setAccordionTwo]
    },
    {
      icon: <CgProfile />,
      heading: "Setup your profile",
      dropdownIcon: <AiOutlineDownCircle />,
      apply_walkthrough: "Customize your WhatsApp profile, to help understand your customers well.",
      book_icon: <MdOutlineMenuBook className="text-[17px]" />,
      apply_guide: "How to Edit Business Profile?",
      edit_button: <button className="px-2 py-[3px] rounded-md profile_btn">Edit profile</button>,
      accordion: [accordionThree, setAccordionThree]
    },
    {
      icon: <div className="green_tick"><TiTick className="text-[#fff]" /></div>,
      heading: "Apply for green tick",
      dropdownIcon: <AiOutlineDownCircle />,
      apply_walkthrough: "Get Verified Green Tick on your Whatsapp.",
      first_requirement: <li className={style.text}>Make sure to go through all eligiblity criteria before applying for Green Tick.</li>,
      second_requirement: <li className={style.text}>"For any help contact AiSensy Support."</li>,
      book_icon: <MdOutlineMenuBook className="text-[17px]" />,
      apply_guide: "How to Edit Business Profile?",
      edit_button: <button className="px-2 py-[3px] rounded-md profile_btn">Apply for green tick</button>,
      tutorial_video: <iframe className="border-[2px] rounded-md border-[#000]" src="https://www.youtube.com/embed/EC6R24Lt5i4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
      accordion: [accordionFour, setAccordionFour]
    }
  ]

  return (
    <section>
      <div className="flex flex-wrap my-4 items-center justify-between">
        <h3 className="flex gap-2 text-[18px]"><RiWhatsappFill className="text-[#2DC10F] text-[24px]" />  Setup FREE WhatsApp Business Account</h3>
        <small>5 steps left</small>
      </div>
      <div className="apply_for_whatsapp my-4 py-4 px-8 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="store_icon" ><ImCheckboxChecked /></div>
            <h3 className={style.heading}>Apply for WhatsApp business API</h3>
          </div>
        </div>
        <div className="">
          <p className="mt-4 mb-[16px] text-[#0a474c] text-[14px]">Click on Continue With Facebook to apply for WhatsApp Business API</p>
          <div className="md:flex items-center justify-center gap-2">
            <div>
              <p className="mb-[16px] text-[14px] text-[#6E6E6E]">Requirements to apply for WhatsApp Business API</p>
              <li className="text-[12px]">A Phone number that doesn't have WhatsApp App or WhatsApp Business App installed (Please DELETE if installed or you can buy a new number )</li>
              <li className="text-[12px]">A Registered Business & Working Website.</li>
              <a className={style.links} href="#broken"><MdOutlineMenuBook /> How to apply for WhatsApp business API?</a>
            </div>
            <div>
            <iframe
              className="border-[2px] w-[100%] rounded-md border-[#000]"
              src="https://www.youtube.com/embed/Os4QbiSdYqs" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
              web-share" allowfullscreen>
            </iframe>
            </div>
          </div>
          <div className="mt-4 mb-2 flex flex-wrap items-center gap-2 md:justify-end">
            <button className="rounded-md p-2 bg-transparent border-[#000] border-[1px]">Buy new number</button>
            <button className="rounded-md p-2 bg-[#1877f2] text-[#fff]">Continue with facebook</button>
          </div>
        </div>
      </div>
      <div className={!state ? "hidden" : "block"}>
        {
          whatsApp_business.map((whatsapp) => (
            <div className="my-4 bg-[#fff] border-[1px] border-[#000] py-4 px-8 rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  {whatsapp.icon}
                  <h3 className={style.heading}>{whatsapp.heading}</h3>
                </div>
                <button type="button" onClick={ () => dropDown(whatsapp.accordion) }>{!whatsapp.accordion[0] ? <AiOutlineDownCircle /> : <AiOutlineUpCircle />}</button>
              </div>
              <div className={!whatsapp.accordion[0] ? "hidden" : "block"}>
                <div className={style.flex}>
                  <div>
                    <p className={style.text}>{whatsapp.apply_walkthrough}</p>
                    <div className="my-6">
                      {whatsapp.first_requirement}
                      {whatsapp.second_requirement}
                    </div>
                    <div className="flex flex-wrap my-4 justify-between items-center">
                      <a className={style.links} href="#broken">{whatsapp.book_icon} {whatsapp.apply_guide}</a>
                      <a className={style.links} href="#broken">{whatsapp.book_icon2} {whatsapp.apply_guide2}</a>
                    </div>
                    {whatsapp.edit_button}
                  </div>
                  <div>
                    {whatsapp.tutorial_video}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default SetupBusinessAcc;
