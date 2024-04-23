import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/logo-gray.png";

const Footer = () => {
  const phoneNumber = '08495846779';
  const emailAddress = 'info@newlightassociate.in';
  const socialMediaPlatforms = [
    { icon: faFacebook, link: "https://www.facebook.com/profile.php?id=61555740542288" },
    { icon: faYoutube, link: "https://www.youtube.com/channel/UCwBDYHiGkdi8FR0eJZ2zH4Q" },
    { icon: faTwitter, link: "https://twitter.com/NewlightAsocAte" },
    { icon: faLinkedin, link: "www.linkedin.com/in/newlight-associates-0147492ab" },
  ];
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };
  return (
    <footer className="py-4 mb-0 lg:py-36 text-black md:px-4 lg:px-24 lg:mb-0">
      <div className="flex flex-col items-center md:flex-row md:justify-between">

        <div className="mt-4 md:mt-0">
          <ul className="text-sm text-center md:text-left">
            <li className="mb-3">
              <Link to="/about" className="text-black">
                About Us
              </Link>
            </li>
            <li className="text-black leading-6 w-64" style={{ fontWeight: 200 }}>
              We are a web development agency that helps businesses grow and succeed online through a range of services, including Mobile & Web Application Development, Cloud Services, Software Testing, IoT, Database Operations, and Data Engineering services.
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="text-sm text-center md:text-left">
            <li className="mb-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <div className="leading-6 font-extralight">
              <li className="mb-2">Address: #45/3, 8th main, 2nd Block, Hanumanth Nagar, BSK 1st stage, Banashankari, Bengaluru, Karnataka </li>
              Phone: <span onClick={handlePhoneClick} style={{ color: 'blue', cursor: 'pointer' }}>{phoneNumber}</span>
              <br />
              Email: <span onClick={handleEmailClick} style={{ color: 'blue', cursor: 'pointer' }}>{emailAddress}</span>
            </div>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="text-sm text-center md:text-left">
            <li className="mb-3">Subscribe</li>
            <form className="flex">
              <input
                className={`border rounded-lg py-1 px-3 text-gray-300 text-xs md:w-48 md:mr-1`}
                type="email"
                placeholder="Your Email"
              />
              <button className="text-black py-1 px-2" type="submit">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth="3" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </form>
            <div className="pt-4">
              <p className="mb-2">Follow Us</p>
              <div className="flex justify-center md:justify-start">
                {socialMediaPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 hover:text-indigo-500"
                  >
                    <FontAwesomeIcon icon={platform.icon} size="4x" />
                  </a>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
