import heroImage from '/images/illustration-devices.svg'

const Hero = () => {
  return (
    <main className="m-auto flex w-full max-w-screen-2xl grow flex-col justify-center overflow-clip md:flex-row">
      <img src={heroImage} className="mb-16 w-[140%] max-w-none md:order-2" />
      <div className="flex flex-col justify-center gap-3 p-6">
        <div className="flex items-center gap-2 font-barlowCondensed uppercase">
          <div className="self-center rounded-xl bg-veryDarkBlue px-2 text-sm font-bold text-lightGrayishBlue md:px-3 md:text-lg">
            New
          </div>
          <div className="text-sm tracking-widest text-darkGrayishBlue md:text-lg">
            Monograph Dashboard
          </div>
        </div>
        <h1 className="font-barlowCondensed text-4xl font-bold uppercase text-veryDarkBlue">
          Powerful Insights Into Your Team
        </h1>
        <p className="font-barlow text-darkGrayishBlue">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex w-full items-center gap-4 font-barlowCondensed">
          <button className="cursor-pointer rounded-md bg-red-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-lightGrayishBlue hover:bg-red-300">
            Schedule a Demo
          </button>
          <span className="uppercase tracking-wider text-darkGrayishBlue">
            To See a Preview
          </span>
        </div>
      </div>
    </main>
  )
}

export default Hero
