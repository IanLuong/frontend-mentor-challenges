import iconMenu from '/images/icon-menu.svg'
import iconCart from '/images/icon-cart.svg'
import logo from '/images/logo.svg'
import avatar from '/images/image-avatar.png'

const Navbar = () => {
  return (
    <header className="bg-white p-4 md:p-8 md:border-b-2 max-w-screen-xl md:border-lightGrayishBlue flex items-center justify-between">
      <div className="flex gap-12 items-start">
        <div className="flex gap-4 items-center">
          <img className="w-4 h-4 md:hidden" src={iconMenu} />
          <img src={logo} />
        </div>
        <nav>
          <ul className="text-darkGrayishBlue hidden md:flex gap-8">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5 md:gap-8">
        <img className="w-5 h-5" src={iconCart} />
        <img className="w-7 h-7 md:w-12 md:h-12" src={avatar} />
      </div>
    </header>
  )
}

export default Navbar
