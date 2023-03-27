import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App font-epilogue relative">
      <Sidebar />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
