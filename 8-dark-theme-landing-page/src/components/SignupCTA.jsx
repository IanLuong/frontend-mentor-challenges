import { useState } from 'react'

const SignupCTA = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="absolute -bottom-48 left-0 right-0 mx-8 flex flex-col items-center gap-6 rounded-xl bg-accentBackground px-6 py-8 text-center text-gray-300 shadow-2xl">
      <h3 className="text-xl font-bold">Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <input
        type="text"
        className="w-full rounded-full bg-white px-4 py-4 text-sm text-black outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
      />
      <button className="w-full rounded-full bg-gradient-to-r from-gradientCyan to-gradientBlue py-4 text-sm font-bold text-white">
        Get Started For Free
      </button>
    </div>
  )
}

export default SignupCTA
