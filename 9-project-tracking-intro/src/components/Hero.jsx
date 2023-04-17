import heroImage from '/images/illustration-devices.svg'

const Hero = () => {
  return (
    <main className=" m-auto flex flex-col md:flex-row gap-16 overflow-x-clip p-8 font-barlowCondensed max-w-screen-xl">
      <img src={heroImage} className="w-[150%] max-w-7xl sm:order-2" />
      <div className="flex flex-col gap-4">
        <div className="flex text-lg gap-4 tracking-wider uppercase items-center">
          <div className="rounded-2xl px-2 py-1 bg-veryDarkBlue font-bold text-lightGrayishBlue">
            New
          </div>
          <div className="text-grayishBlue tracking-[0.2em]">
            Monograph Dashboard
          </div>
        </div>
        <h1 className="font-bold text-veryDarkBlue text-[2.5rem] leading-10 uppercase">
          Powerful Insights Into Your Team
        </h1>
        <p className="text-darkGrayishBlue font-barlow text-[1.2rem]">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex gap-6 items-center uppercase">
          <button className="rounded-md bg-red-500 uppercase px-5 py-2 font-bold text-lightGrayishBlue">
            Schedule a Demo
          </button>
          <span className=" text-grayishBlue tracking-widest">
            To See a Preview
          </span>
        </div>
      </div>
    </main>
  )
}

export default Hero
