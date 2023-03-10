import IntroPage from "./components/IntroPage"

const App = () => {
  return (
    <div className="App min-h-screen bg-[url('./bg-intro-mobile.png')] md:bg-[url('./bg-intro-desktop.png')] bg-customRed flex items-center justify-center">
      <IntroPage />
    </div>
  )
}

export default App
