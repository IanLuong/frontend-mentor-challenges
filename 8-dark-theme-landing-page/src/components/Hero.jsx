import heroImage from '/images/illustration-intro.png'

export default function Hero() {
  return (
    <section className="relative m-auto flex max-w-2xl flex-col items-center text-center">
      <div className="z-10 flex flex-col items-center gap-5 p-6">
        <img
          className="z-10 m-auto p-6 md:p-12"
          src={heroImage}
          alt=""
          title=""
        />
        <h1 className="relative max-w-lg text-2xl font-semibold text-white">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="max-w-md text-sm text-gray-300">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <button className="w-[245px] rounded-full bg-gradient-to-r from-gradientCyan to-gradientBlue py-3 text-sm font-bold text-white hover:from-gradientCyan hover:to-gradientCyan focus:from-gradientCyan focus:to-gradientCyan">
          Get Started
        </button>
      </div>
    </section>
  )
}
