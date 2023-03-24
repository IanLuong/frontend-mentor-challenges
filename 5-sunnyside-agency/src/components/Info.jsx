const Info = () => {
  // TODO: Add responsive image changes
  return (
    <main className="font-fraunces">
      <section className="sm:grid sm:grid-cols-2 text-center sm:text-left">
        <img className="sm:order-2" src="/desktop/image-transform.jpg" />
        <section className="flex flex-col sm:order-1 items-center sm:items-start justify-center gap-7 px-8 py-24 sm:p-8 text-customBlue-300 font-extrabold">
          <h2 className="text-4xl">Transform your brand</h2>
          <p className="font-barlow font-semibold text-customBlue-600">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href="#"
            className="text-lg tracking-wide relative group cursor-pointer"
          >
            LEARN MORE
            <div className="bg-customYellow/30 group-hover:bg-customYellow absolute -left-2 top-4 -z-10 py-[.35rem] w-[110%] rounded-3xl"></div>
          </a>
        </section>
        <img className="sm:order-3" src="/desktop/image-stand-out.jpg" />
        <section className="flex flex-col sm:order-4 items-center sm:items-start justify-center gap-7 px-8 py-24 sm:p-8 text-customBlue-300 font-extrabold">
          <h2 className="text-4xl">Stand out to the right audience</h2>
          <p className="font-barlow font-semibold text-customBlue-600">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brain in digital places.
          </p>
          <a
            href="#"
            className="text-lg tracking-wide relative group cursor-pointer"
          >
            LEARN MORE
            <div className="bg-softRed/30 group-hover:bg-softRed absolute left-[-6px] top-4 -z-10 py-[.35rem] w-[110%] rounded-3xl"></div>
          </a>
        </section>
      </section>
      <section className="sm:flex">
        <section className="relative text-center text-customCyan-700">
          <img
            className="w-full"
            srcSet="/mobile/image-graphic-design.jpg 750w, /desktop/image-graphic-design.jpg 720w"
            sizes="(min-width: 640px) 720px, 750px"
            alt=""
          />
          <div className="absolute bottom-12 px-6">
            <h2 className="text-3xl mb-6 font-extrabold">Graphic Design</h2>
            <p className="font-barlow m-auto font-semibold">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </section>
        <section className="relative text-center text-customBlue-500">
          <img
            className="w-full"
            srcSet="/mobile/image-photography.jpg 750w, /desktop/image-photography.jpg 720w"
            sizes="(min-width: 640px) 720px, 750px"
            alt=""
          />
          <div className="absolute bottom-12 px-6">
            <h2 className="text-3xl mb-6 font-extrabold">Photography</h2>
            <p className="font-barlow m-auto font-semibold">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Info
