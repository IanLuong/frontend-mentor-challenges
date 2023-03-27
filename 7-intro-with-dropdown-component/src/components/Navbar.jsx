import iconMenu from '/images/icon-menu.svg'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h2 className="font-bold text-4xl">snap</h2>
      <img src={iconMenu} />
    </header>
  )
}

export default Navbar
