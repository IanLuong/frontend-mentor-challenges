import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="min-w-[320px] font-epilogue relative">
      <Sidebar isVisible={sidebarVisible} setIsVisible={setSidebarVisible} />
      <Navbar setSidebarVisible={setSidebarVisible} />
      <Hero />
    </div>
  )
}

export default App
