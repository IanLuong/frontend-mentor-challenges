import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'

import devicesImage from '/images/image-devices.png'
import blacklistIcon from '/images/icon-blacklist.svg'
import textIcon from '/images/icon-text.svg'
import previewIcon from '/images/icon-preview.svg'

import googleIcon from '/images/logo-google.png'
import ibmIcon from '/images/logo-ibm.png'
import microsoftIcon from '/images/logo-microsoft.png'
import hpIcon from '/images/logo-hp.png'
import vectorGraphicsIcon from '/images/logo-vector-graphics.png'

const App = () => {
  return (
    <div className="font-baiJamjuree">
      <main className="w-full bg-white bg-[url('images/bg-header-mobile.png')] bg-cover bg-center bg-no-repeat">
        <div className="m-auto max-w-screen-xl">
          <Hero />
          <Features />

          <section className="m-auto p-16 px-8">
            <div className="pb-16 pt-4 text-center">
              <h2 className="text-3xl font-bold text-darkGrayishBlue">
                Access Clipboard anywhere
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[1.01rem] text-grayishBlue">
                Whether you're on the go, or at your computer, you can access
                all your Clipboard snippets in a few simple clicks.
              </p>
            </div>

            <div className="pb-16">
              <img src={devicesImage} className="m-auto" />
            </div>

            <div className="pb-24 pt-4 text-center">
              <h2 className="text-3xl font-bold text-darkGrayishBlue">
                Supercharge your workflow
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[1.01rem] text-grayishBlue">
                We've got the tools to boost your productibity.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row">
              <div className="flex flex-1 flex-col items-center">
                <div>
                  <img src={blacklistIcon} />
                </div>
                <h3 className="mt-8 text-3xl font-bold text-darkGrayishBlue">
                  Create blacklists
                </h3>
                <p className="mt-4 text-grayishBlue">
                  Ensure sensitive information never makes its way to your
                  clipboard by excluding certain sources.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <div>
                  <img src={textIcon} />
                </div>
                <h3 className="mt-8 text-3xl font-bold text-darkGrayishBlue">
                  Plain text snippets
                </h3>
                <p className="mt-4 text-grayishBlue">
                  Remove unwanted formatting from copied text for a consistent
                  look.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <div>
                  <img src={previewIcon} />
                </div>
                <h3 className="mt-8 text-3xl font-bold text-darkGrayishBlue">
                  Sneak preview
                </h3>
                <p className="mt-4 text-grayishBlue">
                  Quick preview of all snippets on your Clipboard for easy
                  access.
                </p>
              </div>
            </div>
          </section>

          <section className="m-auto p-16 px-8 md:py-32">
            <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
              <div>
                <img src={googleIcon} />
              </div>
              <div>
                <img src={ibmIcon} />
              </div>
              <div>
                <img src={microsoftIcon} />
              </div>
              <div>
                <img src={hpIcon} />
              </div>
              <div>
                <img src={vectorGraphicsIcon} />
              </div>
            </div>
          </section>

          <section className="m-auto px-8 pb-32 pt-16">
            <div className="flex flex-col items-center gap-10 text-center">
              <div>
                <h2 className="text-3xl font-bold text-darkGrayishBlue">
                  Clipboard for iOS and Mac OS
                </h2>
                <p className="mt-4 max-w-lg text-[1.01rem] text-grayishBlue">
                  Available for free on the App Store. Download for Mac or iOS,
                  sync with iCloud and you're ready to start adding to your
                  clipboard.
                </p>
              </div>
              <div className="flex w-full max-w-md flex-col items-center gap-4 font-bold text-white md:flex-row">
                <button className="w-full rounded-3xl bg-strongCyan px-3 py-3 shadow-xl">
                  Download for iOS
                </button>
                <button className="w-full rounded-3xl bg-lightBlue px-3 py-3 shadow-xl">
                  Download for Mac
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
