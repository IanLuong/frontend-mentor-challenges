const Footer = () => {
  return (
    <footer className="bg-customCyan-300 text-customCyan-500">
      <div className="m-auto max-w-lg flex flex-col items-center justify-between text-center p-16">
        <h3 className="text-4xl font-barlow font-extrabold mb-12">sunnyside</h3>
        <div className="flex justify-between w-full text-customCyan-700 font-medium text-lg mb-20">
          <a
            className="hover:text-white hover:underline decoration-wavy"
            href="#"
          >
            About
          </a>
          <a
            className="hover:text-white hover:underline decoration-wavy"
            href="#"
          >
            Services
          </a>
          <a
            className="hover:text-white hover:underline decoration-wavy"
            href="#"
          >
            Projects
          </a>
        </div>
        <div className="flex justify-center items-center gap-8">
          {/* TODO: Add hover color state on links */}
          <img
            className="cursor-pointer"
            src="/icons/icon-facebook.svg"
            alt="Facebook"
          />
          <img
            className="cursor-pointer"
            src="/icons/icon-instagram.svg"
            alt="Instagram"
          />
          <img
            className="cursor-pointer"
            src="/icons/icon-twitter.svg"
            alt="Twitter"
          />
          <img
            className="cursor-pointer"
            src="/icons/icon-pinterest.svg"
            alt="Pinterest"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
