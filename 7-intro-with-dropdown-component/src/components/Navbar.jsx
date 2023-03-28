import iconMenu from '/images/icon-menu.svg'
import featureOptions from '../data/featureOptions.json'
import companyOptions from '../data/companyOptions.json'
import NavbarDropdown from './NavbarDropdown'

const Navbar = ({ setSidebarVisible }) => {
  return (
    <header className="flex justify-between items-center text-mediumGray p-4">
      <nav className="flex items-center gap-4 md:gap-12" item>
        <h2 className="font-bold text-4xl text-almostBlack">snap</h2>
        <ul className="gap-4 md:gap-6 hidden sm:flex">
          <NavbarDropdown title="Features" options={featureOptions} />
          <NavbarDropdown title="Company" options={companyOptions} />
          <li>
            <a className="cursor-pointer hover:text-almostBlack focus:text-almostBlack">
              Careers
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-almostBlack focus:text-almostBlack">
              About
            </a>
          </li>
        </ul>
      </nav>

      <div className="sm:flex hidden gap-1 md:gap-6">
        <a className="text-center self-center m-2 cursor-pointer w-full hover:text-almostBlack focus:text-almostBlack">
          Login
        </a>
        <a className="text-center border-2 border-mediumGray rounded-xl px-4 py-2 cursor-pointer hover:text-almostBlack hover:border-almostBlack focus:text-almostBlack focus:border-almostBlack">
          Register
        </a>
      </div>

      <img
        className="cursor-pointer sm:hidden"
        onClick={() => setSidebarVisible(true)}
        src={iconMenu}
        alt="Open sidebar"
      />
    </header>
  )
}

export default Navbar
