import logo from '/icons/logo.svg'
import backgroundMobile from '/icons/bg-curvy-mobile.svg'

export default function Header() {
  return (
    <header className="flex justify-between">
      <img className="w-1/4" src={logo} alt="Fylo" title="Fylo" />
      <nav>
        <ul className="text-gray-300 text-sm flex gap-4">
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  )
}
