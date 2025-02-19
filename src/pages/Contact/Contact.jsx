// import React from 'react'
// import './Contact.css'
// import { CiLocationOn } from "react-icons/ci";
// import { BsEnvelope } from "react-icons/bs";
// import { MdOutlinePhoneInTalk } from "react-icons/md";
// import { TiStopwatch } from "react-icons/ti";
// import ShopHeader from '../../components/ShopPage/ShopHeader';


// const Contact = () => {
//   const contact = [
//     {
//       icon:<CiLocationOn />,
//       header:"Our Address",
//       para: "4517 Washington Ave. Manchester, Kentucky 39495"
//     },
//     {
//       icon:<BsEnvelope />,
//       header:"info@exmple.com",
//       para: "Email us anytime for any kind ofquety."
//     },
//     {
//       icon:<MdOutlinePhoneInTalk />,
//       header:"Hot: +208-666-01112",
//       para: "24/7/365 priority Live Chat and ticketing support."
//     },
//     {
//       icon:<TiStopwatch />,
//       header:"Opening Hour",
//       para: "Sunday-Fri: 9 AM – 6 PMSaturday: 9 AM – 4 PM"
//     }
//   ]
//   return (
//     <>
//     <ShopHeader title="CONTACT PAGE" breadcrumb="Contact Page" />
//         <div className="container">
//             <div className="row">
//                <div className="col-3 d-flex">
//                     {contact.map((item,index)=>(
//                       <div key={index} className=" p-4 rounded boxes">
//                            <div className="icons">
//                                <div className="icon">{item.icon}</div>
//                            </div>
//                            <div className="contact-header">
//                                {item.header}
//                            </div>
//                            <div className="contact-para">
//                                {item.para}
//                            </div>
//                       </div>
//                     ))}
//                </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Contact


import React from 'react';
import './Contact.css';
import { CiLocationOn } from 'react-icons/ci';
import { BsEnvelope } from 'react-icons/bs';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { TiStopwatch } from 'react-icons/ti';
import ShopHeader from '../../components/ShopPage/ShopHeader';
import Contact_img from '../../assets/contact-img.jpg'
const Contact = () => {
  const contact = [
    {
      icon: <CiLocationOn size={32} />,
      header: 'Our Address',
      para: '4517 Washington Ave. Manchester, Kentucky 39495',
    },
    {
      icon: <BsEnvelope size={32} />,
      header: 'info@exmple.com',
      para: 'Email us anytime for any kind of query.',
    },
    {
      icon: <MdOutlinePhoneInTalk size={32} />,
      header: 'Hot: +208-666-01112',
      para: '24/7/365 priority Live Chat and ticketing support.',
    },
    {
      icon: <TiStopwatch size={32} />,
      header: 'Opening Hour',
      para: 'Sunday-Fri: 9 AM – 6 PM. Saturday: 9 AM – 4 PM',
    },
  ];

  return (
    <>
      <ShopHeader title="CONTACT PAGE" breadcrumb="Contact Page" />
      <div className="container py-5">
        <div className="row">
          {contact.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="box p-4 text-center rounded shadow-sm">
                <div className="contact-icons mb-3">{item.icon}</div>
                <h5 className="contact-header mb-2">{item.header}</h5>
                <p className="contact-para mb-0">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="colo-12 col-md-6  order-1 order-md-0">
          <div className="contact-left-content">
            <div className="contact-img">
              <img className='' src={Contact_img} alt="" />
            </div>

          </div>

        </div>
        <div className="col-md-6">
          <div className="contact-left-content">
            <div className="container my-5">
              <h2 className="mb-4">Get in Touch</h2>
              <form>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <input type="text" className="form-control contact-input mb-3" id="fullName" placeholder="Full Name" />
                  </div>
                  <div className="col-md-4">
                    <input type="email" className="form-control contact-input" id="email" placeholder="Email Address" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <input type="text" className="form-control contact-input mb-3 " id="phoneNumber" placeholder="Phone Number" />
                  </div>
                  <div className="col-md-4">
                    <select className="form-select contact-input" id="subject">
                      <option value="">Choose Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="sales">Sales</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <textarea className="contact-textarea contact-input" id="message" rows="4" placeholder=" Your message"></textarea>
                </div>

                <div className="form-check mb-4">
                  <input type="radio" className="form-check-input" id="radioOption" name="option" />
                  <label className="form-check-label radio-text" htmlFor="radioOption">
                    Collaboratively formulate principle capital. Progressively evolve user
                  </label>
                </div>

                <button type="submit" className="contact-check-button">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
