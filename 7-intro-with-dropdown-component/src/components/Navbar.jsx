import iconMenu from '/images/icon-menu.svg'

const Navbar = ({ setSidebarVisible }) => {
  return (
    <header className="flex justify-between items-center p-4">
      <h2 className="font-bold text-4xl">snap</h2>
      <img
        className="cursor-pointer"
        onClick={() => setSidebarVisible(true)}
        src={iconMenu}
        alt="Open sidebar"
      />
    </header>
  )
}

export default Navbar
