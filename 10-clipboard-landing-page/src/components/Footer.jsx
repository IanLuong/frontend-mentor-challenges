import clipboardLogo from '/images/logo.svg'
import facebookIcon from '/images/icon-facebook.svg'
import twitterIcon from '/images/icon-twitter.svg'
import instagramIcon from '/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className="w-full bg-gray-200">
      <footer className="mx-auto flex w-full min-w-[172px] max-w-screen-xl flex-col items-center justify-center gap-8 bg-gray-200 p-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-x-28">
          <div>
            <img src={clipboardLogo} className="w-11" />
          </div>
          <nav className="grid gap-3 text-darkGrayishBlue md:grid-flow-col md:grid-cols-3 md:grid-rows-2">
            <a className="md:mx-4">FAQs</a>
            <a className="md:mx-4">Contact Us</a>
            <a className="md:mx-4">Privacy Policy</a>
            <a className="md:mx-4">Press Kit</a>
            <a className="md:mx-4">Install Guide</a>
          </nav>
        </div>
        <nav className="flex justify-center gap-12 md:gap-6">
          <img src={facebookIcon} />

          <img src={twitterIcon} />

          <img src={instagramIcon} />
        </nav>
      </footer>
    </div>
  )
}

export default Footer
