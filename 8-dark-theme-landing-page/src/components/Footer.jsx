import logo from '/icons/logo.svg'
import locationIcon from '/icons/icon-location.svg'
import phoneIcon from '/icons/icon-phone.svg'
import emailIcon from '/icons/icon-email.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-16 bg-footerBackground p-6 pt-64 text-gray-300">
      <div className="flex flex-col items-start gap-4">
        {/* Adjust top padding on location icon */}
        <img className="px-2 pb-8" src={logo} alt="" />
        <div className="flex items-start gap-4">
          <img src={locationIcon} alt="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={phoneIcon} alt="" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={emailIcon} alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <nav className="flex flex-col gap-12 font-semibold">
        <ul className="flex flex-col gap-4">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </nav>

      <div className="flex justify-center gap-4">
        <FontAwesomeIcon
          className="h-4 w-4 rounded-full border border-white p-2"
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          className="h-4 w-4 rounded-full border border-white p-2"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="h-4 w-4 rounded-full border border-white p-2"
          icon={faInstagram}
        />
      </div>
    </footer>
  )
}
