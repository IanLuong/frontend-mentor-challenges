// import Header from './components/Header'
// import Hero from './components/Hero'

import heroImage from '/images/illustration-intro.png'
import logo from '/icons/logo.svg'
import backgroundMobile from '/icons/bg-curvy-mobile.svg'

export default function App() {
  return (
    <div className="font-raleway">
      <header className="flex flex-col bg-accentBackground">
        <div className="flex justify-between py-8 px-5">
          <img className="w-1/4" src={logo} alt="Fylo" title="Fylo" />
          <nav>
            <ul className="text-gray-300 text-sm flex gap-4">
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="bg-accentBackground">
        <section className="text-center p-4 flex flex-col items-center gap-5">
          <img className="" src={heroImage} alt="" title="" />
          <div className="relative">
            <img className="absolute bottom-0" src={backgroundMobile} />
          </div>
          <h1 className="relative text-white text-2xl font-semibold">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-gray-300 text-sm">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co-workers.
          </p>
          <button className="bg-gradient-to-r from-gradientCyan to-gradientBlue w-3/4 text-white text-sm font-bold rounded-full py-3">
            Get Started
          </button>
        </section>
        <section className="p-4 flex flex-col gap-16 mt-24">
          <div className="flex flex-col items-center text-center">
            <img src="./icons/icon-access-anywhere.svg" />
            <h3 className="text-white text-xl font-semibold mt-6">
              Access your files, anywhere
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              The ability to use a smartphone, tablet, or computer to accces
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="./icons/icon-security.svg" />
            <h3 className="text-white text-xl font-semibold mt-6">
              Security you can trust
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="./icons/icon-collaboration.svg" />
            <h3 className="text-white text-xl font-semibold mt-6">
              Real-time collaboration
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachements required.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="./icons/icon-any-file.svg" />
            <h3 className="text-white text-xl font-semibold mt-6">
              Store any type of file
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Whether you're sharing holiday photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </section>
        <section className="p-4">
          <img src="/images/illustration-stay-productive.png" />
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xl font-semibold mt-6">
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
            <a className="flex justify-between items-center text-gradientCyan text-sm pb-1 border-b border-gradientCyan w-[45%]">
              See how Fylo works <img src="/icons/icon-arrow.svg" />
            </a>
          </div>
        </section>

        <section className="p-4">
          <div className="p-4 flex flex-col">
            <img src="/images/bg-quotes.png" />
            <div className="p-4 bg-">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex">
                <img className="rounded-full" />
                <div>
                  <h4>Satish Patel</h4>
                  <p>Founder & CEO. Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
