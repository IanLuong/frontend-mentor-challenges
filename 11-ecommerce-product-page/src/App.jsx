import ImageCarousel from './components/ImageCarousel'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="w-screen font-kumbhSans">
      <Navbar />
      <main>
        <ImageCarousel />
      </main>
    </div>
  )
}
