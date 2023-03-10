import SignupForm from "./SignupForm"

const IntroPage = () => {
  return (
    <main className="md:flex md:justify-center gap-16 p-6 font-poppins items-center max-w-[1600px]">
      <div className="md:w-1/3 md:text-left flex flex-col gap-6 my-14 text-center text-white">
        <h1 className="font-bold text-3xl md:text-5xl">Learn to code by watching others</h1>
        <h2 className="text-lg">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h2>
      </div>
      <div className="flex flex-col gap-6 md:w-1/3">
        <div className="flex justify-center text-center px-8 py-5 rounded-lg shadow-xl bg-customBlue text-white">
          <p className="w-2/3"><span className="font-semibold">Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <SignupForm />
      </div>
    </main>
  )
}

export default IntroPage