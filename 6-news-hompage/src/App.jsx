import { useState } from 'react'
import MainArticle from './components/MainArticle'
import Navbar from './components/Navbar'
import NewArticleSection from './components/NewArticleSection'
import Sidebar from './components/Sidebar'
import TopArticleSection from './components/TopArticleSection'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="App">
      <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
      <Navbar setVisible={setSidebarVisible} />
      <main className="main-section">
        <MainArticle />
        <NewArticleSection />
      </main>
      <TopArticleSection />
    </div>
  )
}

export default App
