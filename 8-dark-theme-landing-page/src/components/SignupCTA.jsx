import { useState } from 'react'

const emailRegex = /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SignupCTA = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="absolute -bottom-48 left-auto right-auto mx-8 flex max-w-4xl flex-col items-center gap-6 rounded-xl bg-accentBackground px-6 py-8 text-center text-gray-300 shadow-2xl md:-bottom-32">
      <h3 className="text-xl font-bold text-white md:text-3xl">
        Get early access today
      </h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex w-full flex-col items-start gap-2 md:flex-row md:gap-6">
        <div className="flex w-full flex-col md:w-2/3">
          <input
            type="email"
            className="w-full rounded-full bg-white px-4 py-4 text-sm text-black outline-none md:flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <span
            className={`${
              !email.match(emailRegex) ? 'visible' : 'invisible'
            } ml-4 mt-1 self-start text-xs font-bold text-errorRed`}
          >
            Please enter a valid email address
          </span>
        </div>
        <button className="w-full rounded-full bg-gradient-to-r from-gradientCyan to-gradientBlue py-4 text-sm font-bold text-white hover:from-gradientCyan hover:to-gradientCyan focus:from-gradientCyan focus:to-gradientCyan md:w-1/3">
          Get Started For Free
        </button>
      </div>
    </div>
  )
}

export default SignupCTA
