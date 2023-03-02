import QRCard from "./components/QRCard"

const imagePath = "./image-qr-code.png"
const title = "Improve your front-end skills by building projects"
const text = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"


function App() {
  return (
    <div className="bg-blue-300 w-screen h-screen">
      <QRCard path={imagePath} title={title} text={text} />
    </div>
  )
}

export default App
