import heroImage from '/images/illustration-intro.png'

export default function Hero() {
  return (
    <section className="text-center mt-4 p-4 flex flex-col items-center gap-5">
      <img src={heroImage} alt="" title="" />

      <h1 className="text-white text-2xl font-semibold">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-gray-300 text-sm">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family and
        co-workers.
      </p>
      <button className="bg-gradient-to-r from-gradientCyan to-gradientBlue w-3/4 text-white text-sm font-bold rounded-full py-3">
        Get Started
      </button>
    </section>
  )
}
