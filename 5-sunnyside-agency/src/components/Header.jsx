import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="w-full h-screen sm:bg-[url(/desktop/image-header.jpg)] bg-[url(/mobile/image-header.jpg)] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-between mt-24 gap-20 sm:gap-36 items-center">
        <h1 className="font-fraunces tracking-widest sm:text-6xl text-5xl text-center text-white">
          WE ARE CREATIVES
        </h1>
        <img src="/icons/icon-arrow-down.svg" alt="" />
      </div>
    </div>
  )
}

export default Header
