import logo from '/icons/logo.svg'

export default function Header() {
  return (
    <header className="m-auto flex max-w-screen-xl flex-col bg-accentBackground">
      <div className="flex items-center justify-between px-5 py-8">
        <img className="w-20 sm:w-32" src={logo} alt="Fylo" title="Fylo" />
        <nav>
          <ul className="flex gap-4 text-sm text-gray-300 md:gap-12">
            <li className="cursor-pointer hover:text-white hover:underline focus:text-white focus:underline">
              Features
            </li>
            <li className="cursor-pointer hover:text-white hover:underline focus:text-white focus:underline">
              Team
            </li>
            <li className="cursor-pointer hover:text-white hover:underline focus:text-white focus:underline">
              Sign In
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
