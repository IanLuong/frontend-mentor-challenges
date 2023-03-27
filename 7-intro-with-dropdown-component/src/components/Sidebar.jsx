import iconMenuClose from '/images/icon-close-menu.svg'
import iconArrowDown from '/images/icon-arrow-down.svg'

const Sidebar = ({ isVisible, setIsVisible }) => {
  return (
    <section
      className={`${isVisible ? 'flex' : 'hidden'} fixed w-screen h-screen`}
    >
      <div className="bg-black opacity-80 flex-1"></div>
      <div className="flex flex-col bg-almostWhite text-mediumGray w-2/3 px-5 py-6">
        <img
          onClick={() => setIsVisible(false)}
          className="self-end justify-self-end cursor-pointer mb-8"
          src={iconMenuClose}
          alt="Close sidebar"
        />
        <nav className="mb-6">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-4">
              <a>Features</a>
              <img src={iconArrowDown} />
            </li>
            <li className="flex items-center gap-4">
              <a>Company</a>
              <img src={iconArrowDown} />
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </nav>
        <a className="self-center m-2">Login</a>
        <button className="border border-almostBlack rounded-2xl py-2 w-full">
          Register
        </button>
      </div>
    </section>
  )
}

export default Sidebar
