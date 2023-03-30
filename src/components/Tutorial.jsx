import React from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';

const Tutorial = ({ dropdown }) => {
  const style = {
    list: "flex text-[14px] text-[#0a474c] items-center hover:underline cursor-pointer gap-2 mb-[16px]",
    heading: "text-[#6E6E6E] text-[16px] my-4"
  }

  const tutorial = [
    {
      heading: "Template",
      guide_one: "How to Create WhatsApp Template Message?",
      guide_two: "Use chatbot parameters for leads",
      guide_three: "Add Quick Reply to WhatsApp Template Message",
      guide_four: <li className={style.list}><MdOutlineMenuBook /> <a>Message formatting guideline (Bold, Italic & more)</a></li>,
    },
    {
      heading: "Campaign",
      guide_one: "Audience segregation for WhatsApp Broadcast",
      guide_two: "Upgrade WhatsApp Tier Limit",
      guide_three: "Import upto 2 lakh contacts in one go",
    },
    {
      heading: "Live Chat & Attribute",
      guide_one: "Add user attributes manually",
      guide_two: "Send & Generate media link",
      guide_three: "Add Quick Reply to WhatsApp Template Message",
      guide_four: <li className={style.list}><MdOutlineMenuBook /> <a>Create Live chat without chatbot</a></li>,
      guide_five: <li className={style.list}><MdOutlineMenuBook /> <a>Create Live chat without chatbot</a></li>
    },
    {
      heading: "Chatbot & Integration",
      guide_one: "Setup Welcome WhatsApp Chatbot",
      guide_two: "Create WhatsApp Button for Free",
      guide_three: "Create WhatsApp Link for Free",
    }
  ]
  return (
    <section className={dropdown ? 'hidden' : 'block'}>
      <div className="md:grid gap-4 md:grid-cols-2 md:grid-rows-2">
        {
          tutorial.map((guide) => (
            <div>
              <h1 className={style.heading}>{guide.heading}</h1>
              <ul>
                <li className={style.list}><MdOutlineMenuBook /> <a>{guide.guide_one}</a></li>
                <li className={style.list}><MdOutlineMenuBook /> <a>{guide.guide_two}</a></li>
                <li className={style.list}><MdOutlineMenuBook /> <a>{guide.guide_three}</a></li>
                {guide.guide_four}
                {guide.guide_five}
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Tutorial;
