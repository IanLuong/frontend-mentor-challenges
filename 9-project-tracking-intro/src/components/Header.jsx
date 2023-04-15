import { useState } from 'react'
import logo from '/images/logo.svg'
import iconClose from '/images/icon-close.svg'
import iconOpen from '/images/icon-hamburger.svg'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="relative m-auto flex w-full max-w-screen-2xl items-center justify-between bg-transparent p-6 md:p-16">
      <img src={logo} className="w-6 md:w-8" />

      <img
        onClick={() => setIsVisible((prev) => !prev)}
        src={isVisible ? iconClose : iconOpen}
        className="h-6 w-6 cursor-pointer md:hidden"
      />

      <div
        className={`absolute z-10 w-[90%] bg-yellow-300 p-6 ${
          isVisible ? 'flex md:hidden' : 'hidden'
        } left-0 right-0 top-16  rounded-md shadow-2xl`}
      >
        <nav className="w-full">
          <ul className="flex w-full flex-col items-center gap-5 font-barlowCondensed text-xl font-bold uppercase">
            <li className="cursor-pointer text-veryDarkBlue transition duration-300 hover:underline">
              Product
            </li>
            <li className="cursor-pointer text-veryDarkBlue transition duration-300 hover:underline">
              Features
            </li>
            <li className=" cursor-pointer text-veryDarkBlue transition duration-300 hover:underline">
              Pricing
            </li>
            <hr className="w-full border border-grayishBlue" />
            <li className="cursor-pointer text-grayishBlue transition duration-300 hover:underline">
              Login
            </li>
          </ul>
        </nav>
      </div>

      <div className="hidden md:block">
        <nav>
          <ul className="flex items-center gap-8 font-barlowCondensed text-xl font-bold uppercase">
            <li className="cursor-pointer text-veryDarkBlue transition duration-300 hover:underline">
              Product
            </li>
            <li className="cursor-pointer text-veryDarkBlue transition duration-300 hover:underline">
              Features
            </li>
            <li className=" cursor-pointer text-veryDarkBlue transition duration-300 hover:underline">
              Pricing
            </li>
            <div className="text-grayishBlue">·</div>
            <li className="cursor-pointer text-grayishBlue transition duration-300 hover:underline">
              Login
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
