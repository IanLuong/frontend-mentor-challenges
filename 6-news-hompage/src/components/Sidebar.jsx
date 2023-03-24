import iconMenuClose from '/images/icon-menu-close.svg'

const Sidebar = ({ visible, setVisible }) => {
  return (
    <section className={visible ? 'sidebar' : 'invisible'}>
      <div className="sidebar-background"></div>
      <div className="sidebar-content">
        <img
          className="navbar-menu-icon-close"
          src={iconMenuClose}
          alt="Close Sidebar"
          title="Close Sidebar"
          onClick={() => setVisible(false)}
        />
        <nav className="sidebar-options">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar
