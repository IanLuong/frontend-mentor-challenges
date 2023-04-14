import heroImage from '/images/illustration-devices.svg'

const Hero = () => {
  return (
    <main className="flex grow flex-col justify-center">
      <img src={heroImage} className="mb-16" />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-2 font-barlowCondensed uppercase">
          <div className="self-center rounded-xl bg-veryDarkBlue px-2 text-sm font-bold text-lightGrayishBlue">
            New
          </div>
          <div className="text-sm tracking-widest text-darkGrayishBlue">
            Monograph Dashboard
          </div>
        </div>
        <h1 className="font-barlowCondensed text-4xl font-bold uppercase">
          Powerful Insights Into Your Team
        </h1>
        <p className="font-barlow text-darkGrayishBlue">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex w-full items-center gap-4 font-barlowCondensed">
          <button className="rounded-md bg-red-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-lightGrayishBlue">
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
