import heroImageMob from '/images/image-hero-mobile.png'
import heroImageDesk from '/images/image-hero-desktop.png'
import databizImage from '/images/client-databiz.svg'
import audiophileImage from '/images/client-audiophile.svg'
import meetImage from '/images/client-meet.svg'
import makerImage from '/images/client-maker.svg'

const Hero = () => {
  return (
    <main className="mb-16 sm:flex sm:flex-row-reverse sm:justify-between sm:p-12 max-w-6xl m-auto">
      <picture className="flex-1">
        <source srcSet={`${heroImageMob} 1x`} media="(max-width: 640px)" />
        <img className="" srcSet={`${heroImageDesk} 2x`} alt="" />
      </picture>

      <div className="flex flex-col items-center sm:justify-center gap-4 my-8 sm:my-0 sm:text-left sm:gap-8 text-center flex-1">
        <h1 className="text-4xl sm:text-6xl sm:w-[75%] font-bold sm:self-start">
          Make remote work
        </h1>
        <p className="text-mediumGray px-3 sm:px-0 sm:w-[75%] sm:self-start">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="sm:self-start px-6 py-3 sm:px-12 sm:py-4 mt-2 border-2 border-almostBlack bg-almostBlack rounded-2xl text-almostWhite hover:bg-almostWhite hover:text-almostBlack">
          Learn more
        </button>
        <div className="px-6 mt-6 flex items-center justify-between sm:self-start">
          <img className="max-w-[18%]" src={databizImage} alt="Databiz" />
          <img className="max-w-[18%]" src={audiophileImage} alt="Audiophile" />
          <img className="max-w-[18%]" src={meetImage} alt="Meet" />
          <img className="max-w-[18%]" src={makerImage} alt="Maker" />
        </div>
      </div>
    </main>
  )
}

export default Hero
