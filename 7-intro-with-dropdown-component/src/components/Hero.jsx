import heroImageMob from '/images/image-hero-mobile.png'
import databizImage from '/images/client-databiz.svg'
import audiophileImage from '/images/client-audiophile.svg'
import meetImage from '/images/client-meet.svg'
import makerImage from '/images/client-maker.svg'

const Hero = () => {
  return (
    <main className="mb-16">
      <picture>
        <img src={heroImageMob} alt="" />
      </picture>
      <div className="flex flex-col items-center gap-4 my-8">
        <h1 className="text-4xl font-bold text-center">Make remote work</h1>
        <p className="text-center text-mediumGray px-3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-6 py-3 mt-2 bg-almostBlack rounded-2xl text-almostWhite">
          Learn more
        </button>
        <div className="px-6 mt-6 flex items-center justify-between">
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
