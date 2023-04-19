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
    <footer className="m-auto flex max-w-screen-xl flex-col bg-footerBackground p-6 pt-64 text-gray-300">
      <div>
        <img className="px-2 pb-8" src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-16 md:flex-row md:justify-between">
        <div className="flex flex-col items-start gap-4 md:flex-row md:gap-12">
          {/* Adjust top padding on location icon */}
          <div className="flex max-w-sm items-start gap-4">
            <img src={locationIcon} alt="" />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div>
                <img src={phoneIcon} alt="" />
              </div>
              <p>+1-543-123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={emailIcon} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-12 font-semibold md:flex-row">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-white focus:text-white">
              About Us
            </li>
            <li className="cursor-pointer hover:text-white focus:text-white">
              Jobs
            </li>
            <li className="cursor-pointer hover:text-white focus:text-white">
              Press
            </li>
            <li className="cursor-pointer hover:text-white focus:text-white">
              Blog
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-white focus:text-white">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-white focus:text-white">
              Terms
            </li>
            <li className="cursor-pointer hover:text-white focus:text-white">
              Privacy
            </li>
          </ul>
        </nav>
        <div className="flex justify-center gap-4">
          <FontAwesomeIcon
            className="h-4 w-4 cursor-pointer rounded-full border border-white p-2 hover:border-gradientCyan hover:text-gradientCyan focus:border-gradientCyan focus:text-gradientCyan"
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            className="h-4 w-4 cursor-pointer rounded-full border border-white p-2 hover:border-gradientCyan hover:text-gradientCyan focus:border-gradientCyan focus:text-gradientCyan"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="h-4 w-4 cursor-pointer rounded-full border border-white p-2 hover:border-gradientCyan hover:text-gradientCyan focus:border-gradientCyan focus:text-gradientCyan"
            icon={faInstagram}
          />
        </div>
      </div>
    </footer>
  )
}
