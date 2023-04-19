import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import SignupCTA from './components/SignupCTA'
import Hero from './components/Hero'
import TestimonialsSection from './components/TestimonialsSection'
import Header from './components/Header'

export default function App() {
  return (
    <div className="font-raleway">
      <div className="w-full bg-accentBackground">
        <Header />
      </div>
      <main className="relative flex flex-col items-center justify-center gap-32 bg-mainBackground">
        <Hero />
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
            <a className="flex w-[9.5rem] cursor-pointer items-center justify-between border-b border-gradientCyan pb-1 text-sm text-gradientCyan  hover:border-white hover:text-white focus:border-white focus:text-white">
              See how Fylo works
              <img src="/icons/icon-arrow.svg" />
            </a>
          </div>
        </section>
        <TestimonialsSection />
        <SignupCTA />
      </main>
      <div className="w-full bg-footerBackground">
        <Footer />
      </div>
    </div>
  )
}
