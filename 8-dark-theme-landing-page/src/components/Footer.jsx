import logo from '/icons/logo.svg'
import locationIcon from '/icons/logo-location.svg'
import phoneIcon from '/icons/logo-phone.svg'
import emailIcon from '/icons/logo-email.svg'

export const Footer = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
        <div>
          <img src={locationIcon} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img src={phoneIcon} alt="" />
          <p>+1-543-123-4567</p>
        </div>
        <div>
          <img src={emailIcon} alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </nav>

      <div>{/* TODO: Add social icons */}</div>
    </div>
  )
}
