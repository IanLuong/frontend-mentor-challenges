// import Header from './components/Header'
// import Hero from './components/Hero'

import heroImage from '/images/illustration-intro.png'
import logo from '/icons/logo.svg'
import backgroundMobile from '/icons/bg-curvy-mobile.svg'
import Testimonial from './components/Testimonial'
import testimonials from './data/testimonials.json'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import SignupCTA from './components/SignupCTA'

export default function App() {
  return (
    <div className="font-raleway">
      <header className="flex flex-col bg-accentBackground">
        <div className="flex justify-between px-5 py-8">
          <img className="w-1/4" src={logo} alt="Fylo" title="Fylo" />
          <nav>
            <ul className="flex gap-4 text-sm text-gray-300">
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="relative flex flex-col items-center justify-center gap-32 bg-mainBackground">
        <section className="flex flex-col items-center gap-5 p-6 text-center">
          <img className="" src={heroImage} alt="" title="" />
          <div className="relative">
            <img className="absolute bottom-0" src={backgroundMobile} />
          </div>
          <h1 className="relative text-2xl font-semibold text-white">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-sm text-gray-300">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co-workers.
          </p>
          <button className="w-3/4 rounded-full bg-gradient-to-r from-gradientCyan to-gradientBlue py-3 text-sm font-bold text-white">
            Get Started
          </button>
        </section>
        <FeaturesSection />
        <section className="p-6">
          <img src="/images/illustration-stay-productive.png" />
          <div className="flex flex-col gap-3">
            <h4 className="mt-6 text-xl font-semibold text-white">
              Stay productive, wherever you are
            </h4>
            <p className="text-gray-300">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of yout file storage needs.
              <br />
              <br />
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a className="flex w-[45%] items-center justify-between border-b border-gradientCyan pb-1 text-sm text-gradientCyan">
              See how Fylo works <img src="/icons/icon-arrow.svg" />
            </a>
          </div>
        </section>

        <section className="px-6 pb-[22rem]">
          <div className="flex flex-col p-4">
            <img src="/images/bg-quotes.png" className="w-6 self-start" />
            <div className="flex flex-col items-center gap-6">
              {testimonials.map((testimony) => (
                <Testimonial testimony={testimony} />
              ))}
            </div>
          </div>
        </section>
        <SignupCTA />
      </main>
      <Footer />
    </div>
  )
}
