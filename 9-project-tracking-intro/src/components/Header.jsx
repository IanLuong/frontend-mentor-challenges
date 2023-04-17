import { useState } from 'react'
import logo from '/images/logo.svg'
import iconClose from '/images/icon-close.svg'
import iconOpen from '/images/icon-hamburger.svg'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="relative m-auto flex w-full max-w-screen-xl items-center justify-between p-8 font-barlowCondensed font-bold uppercase tracking-wider text-veryDarkBlue">
      <img src={logo} className="w-6" />

      <img
        onClick={() => setIsVisible((prev) => !prev)}
        src={isVisible ? iconClose : iconOpen}
        className="h-5 w-5 sm:hidden"
      />

      <div
        className={`${
          isVisible ? 'block sm:hidden' : 'hidden'
        } absolute left-0 right-0 top-16 z-10 m-4 bg-white shadow-2xl`}
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
          <ul className="flex items-center gap-7">
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <div className="text-3xl text-grayishBlue">·</div>
            <li className="text-grayishBlue">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
