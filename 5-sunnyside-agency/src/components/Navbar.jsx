const Navbar = () => {
  return (
    <header className="w-full flex justify-between p-8 font-barlow text-white">
      <h3 className="text-3xl font-barlow font-extrabold tracking-wide cursor-pointer hover:underline decoration-wavy">
        sunnyside
      </h3>

      {/* <img src="icons/icon-hamburger.svg" alt="Navigation" /> */}

      {/* TODO: Add the hamburger menu */}
      {/* <nav className="flex items-center gap-12">
        <a className="hover:underline decoration-wavy" href="#">
          About
        </a>
        <a className="hover:underline decoration-wavy" href="#">
          Services
        </a>
        <a className="hover:underline decoration-wavy" href="#">
          Projects
        </a>
        <button className="font-fraunces rounded-3xl text-sm bg-white text-black px-5 py-3 hover:bg-[#6ecefe] hover:text-white">
          CONTACT
        </button>
      </nav> */}
    </header>
  )
}

export default Navbar
