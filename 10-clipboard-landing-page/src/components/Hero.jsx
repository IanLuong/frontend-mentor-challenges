import logo from '/images/logo.svg'

const Hero = () => {
  return (
    <section className="m-auto p-32 px-8">
      <div className="flex flex-col items-center gap-10 text-center">
        <div>
          <img src={logo} className="w-28" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-darkGrayishBlue md:text-[2.75rem]">
            A history of everything you copy
          </h1>
          <p className="m-auto mt-4 max-w-2xl text-[1.01rem] text-grayishBlue md:text-lg">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="flex w-full max-w-md flex-col items-center gap-4 font-bold text-white md:flex-row">
          <button className="w-full rounded-3xl bg-strongCyan px-3 py-3 shadow-xl transition-opacity duration-200 hover:opacity-80 focus:opacity-80">
            Download for iOS
          </button>
          <button className="w-full rounded-3xl bg-lightBlue px-3 py-3 shadow-xl transition-opacity duration-200 hover:opacity-80 focus:opacity-80">
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
