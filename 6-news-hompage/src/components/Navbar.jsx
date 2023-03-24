import iconMenu from '/images/icon-menu.svg'

const Navbar = ({ setVisible }) => {
  return (
    <header className="navbar">
      <h2 className="navbar-logo">W.</h2>
      <img
        className="navbar-menu-icon"
        src={iconMenu}
        alt="Menu"
        title="Menu"
        onClick={() => setVisible(true)}
      />
      <nav className="navbar-links">
        <a href="#">Home</a>
        <a href="#">New</a>
        <a href="#">Popular</a>
        <a href="#">Trending</a>
        <a href="#">Categories</a>
      </nav>
    </header>
  )
}

export default Navbar
