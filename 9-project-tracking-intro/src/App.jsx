import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative flex h-screen flex-col">
      <Header />
      <Hero />

      <div className="absolute right-0 -z-20 h-[55%] w-1/2 rounded-bl-3xl bg-lightGrayishBlue" />
    </div>
  )
}

export default App
