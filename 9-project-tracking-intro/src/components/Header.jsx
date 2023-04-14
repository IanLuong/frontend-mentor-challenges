import { useState } from 'react'
import logo from '/images/logo.svg'
import iconClose from '/images/icon-close.svg'
import iconOpen from '/images/icon-hamburger.svg'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="flex w-full items-center justify-between p-6 md:p-16">
      <img src={logo} className="w-6 md:w-8" />

      <img
        src={isVisible ? iconClose : iconOpen}
        className="h-4 w-6 md:hidden"
      />
      <div className="hidden md:block">
        <nav>
          <ul className="flex items-center gap-8 font-barlowCondensed text-xl font-bold uppercase">
            <li className="text-veryDarkBlue">Product</li>
            <li className="text-veryDarkBlue">Features</li>
            <li className=" text-veryDarkBlue">Pricing</li>
            <div className="text-grayishBlue">·</div>
            <li className="text-grayishBlue">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
