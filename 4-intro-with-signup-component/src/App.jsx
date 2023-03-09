import IntroPage from "./components/IntroPage"

const App = () => {
  return (
    <div className="App h-screen w-screen bg-[url('./bg-intro-mobile.png')] md:bg-[url('./bg-intro-desktop.png')] bg-customRed">
      <IntroPage />
    </div>
  )
}

export default App
