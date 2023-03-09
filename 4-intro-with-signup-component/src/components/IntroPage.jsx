import SignupForm from "./SignupForm"

const IntroPage = () => {
  return (
    <main className="p-6 font-poppins">
      <div className="flex flex-col gap-6 my-14 text-center text-white">
        <h1 className="font-bold text-3xl">Learn to code by watching others</h1>
        <h2 className="text-lg">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center text-center px-8 py-5 rounded-lg shadow-xl bg-customBlue text-white">
          <p className="w-2/3"><span className="font-semibold">Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <SignupForm />
      </div>
    </main>
  )
}

export default IntroPage