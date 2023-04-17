import { useState } from 'react'
import logo from '/images/logo.svg'
import iconClose from '/images/icon-close.svg'
import iconOpen from '/images/icon-hamburger.svg'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="m-auto w-full max-w-screen-xl font-barlowCondensed font-bold uppercase text-veryDarkBlue tracking-wider relative flex p-8 justify-between items-center">
      <img src={logo} className="w-6" />

      <img
        onClick={() => setIsVisible((prev) => !prev)}
        src={isVisible ? iconClose : iconOpen}
        className="w-5 h-5 sm:hidden"
      />

      <div
        className={`${
          isVisible ? 'sm:hidden block' : 'hidden'
        } absolute left-0 right-0 top-16 m-4 z-10 bg-white shadow-2xl`}
      >
        <nav className="m-auto w-full p-4 text-xl">
          <ul className="m-auto flex flex-col items-center gap-4">
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <hr className="w-full" />
            <li className="text-grayishBlue">Login</li>
          </ul>
        </nav>
      </div>

      <div className="hidden sm:block">
        <nav>
          <ul className="gap-7 flex items-center">
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <div className="text-grayishBlue text-3xl">·</div>
            <li className="text-grayishBlue">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
