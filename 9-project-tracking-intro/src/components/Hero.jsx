import heroImage from '/images/illustration-devices.svg'

const Hero = () => {
  return (
    <main className="m-auto flex max-w-screen-xl grow flex-col justify-center gap-16 overflow-x-clip p-8 font-barlowCondensed sm:flex-row sm:items-center sm:justify-normal sm:gap-0">
      <img src={heroImage} className="w-[150%] max-w-7xl sm:order-2" />
      <div className="flex flex-col gap-4 sm:min-w-[500px]">
        <div className="flex items-center gap-4 text-lg uppercase tracking-wider">
          <div className="rounded-2xl bg-veryDarkBlue px-2 py-1 font-bold text-lightGrayishBlue">
            New
          </div>
          <div className="tracking-[0.2em] text-grayishBlue">
            Monograph Dashboard
          </div>
        </div>
        <h1 className="text-[2.5rem] font-bold uppercase leading-10 text-veryDarkBlue sm:text-6xl">
          Powerful Insights Into Your Team
        </h1>
        <p className="font-barlow text-[1.2rem] text-darkGrayishBlue sm:w-2/3">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex items-center gap-6 uppercase sm:mt-8">
          <button className="cursor-pointer rounded-md bg-red-500 px-5 py-2 font-bold uppercase text-lightGrayishBlue transition hover:bg-red-400">
            Schedule a Demo
          </button>
          <span className=" tracking-widest text-grayishBlue">
            To See a Preview
          </span>
        </div>
      </div>
    </main>
  )
}

export default Hero
