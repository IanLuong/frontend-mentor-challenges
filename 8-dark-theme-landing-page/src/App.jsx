import heroImage from '/images/illustration-intro.png'
import logo from '/icons/logo.svg'
import backgroundMobile from '/icons/bg-curvy-mobile.svg'
import backgroundDesktop from '/icons/bg-curvy-desktop.svg'
import Testimonial from './components/Testimonial'
import testimonials from './data/testimonials.json'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import SignupCTA from './components/SignupCTA'

export default function App() {
  return (
    <div className="font-raleway">
      <div className="w-full bg-accentBackground">
        <header className="m-auto flex max-w-screen-xl flex-col bg-accentBackground">
          <div className="flex justify-between px-5 py-8">
            <img className="w-20 sm:w-32" src={logo} alt="Fylo" title="Fylo" />
            <nav>
              <ul className="flex gap-4 text-sm text-gray-300 md:gap-12">
                <li className="cursor-pointer hover:text-white hover:underline focus:text-white focus:underline">
                  Features
                </li>
                <li className="cursor-pointer hover:text-white hover:underline focus:text-white focus:underline">
                  Team
                </li>
                <li className="cursor-pointer hover:text-white hover:underline focus:text-white focus:underline">
                  Sign In
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <main className="relative flex flex-col items-center justify-center gap-32 bg-mainBackground">
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
        <FeaturesSection />
        <section className="m-auto w-full max-w-screen-lg items-center justify-between gap-6 p-6 md:flex">
          <div className="p-6">
            <img src="/images/illustration-stay-productive.png" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="mt-6 max-w-md text-xl font-semibold text-white md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-gray-300">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
              <br />
              <br />
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a className="flex w-[9.5rem] items-center justify-between border-b border-gradientCyan pb-1 text-sm text-gradientCyan">
              See how Fylo works <img src="/icons/icon-arrow.svg" />
            </a>
          </div>
        </section>

        <section className="max-w-screen-lg px-6 pb-[22rem]">
          <div className="relative flex flex-col p-4">
            <img
              src="/images/bg-quotes.png"
              className="-left-[-4px] -top-4 w-6 self-start md:absolute md:w-12"
            />
            <div className="z-10 flex flex-col items-center gap-6 md:flex-row">
              {testimonials.map((testimony) => (
                <Testimonial testimony={testimony} />
              ))}
            </div>
          </div>
        </section>
        <SignupCTA />
      </main>
      <div className="w-full bg-footerBackground">
        <Footer />
      </div>
    </div>
  )
}
