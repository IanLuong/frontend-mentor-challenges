import { useState } from 'react'

const SignupCTA = () => {
  const [email, setEmail] = useState('')

  return (
    //TODO: Adjust absolute positioning on desktop viewport
    <div className="absolute -bottom-48 left-auto right-auto mx-8 flex max-w-4xl flex-col items-center gap-6 rounded-xl bg-accentBackground px-6 py-8 text-center text-gray-300 shadow-2xl">
      <h3 className="text-xl font-bold text-white md:text-3xl">
        Get early access today
      </h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex w-full flex-col gap-6 md:flex-row">
        <input
          type="text"
          className="w-full rounded-full bg-white px-4 py-4 text-sm text-black outline-none md:w-2/3 md:flex-grow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
        />
        <button className="w-full rounded-full bg-gradient-to-r from-gradientCyan to-gradientBlue py-4 text-sm font-bold text-white md:w-1/3">
          Get Started For Free
        </button>
      </div>
    </div>
  )
}

export default SignupCTA
