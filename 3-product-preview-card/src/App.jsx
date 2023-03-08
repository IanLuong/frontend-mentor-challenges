import ProductCard from "./components/ProductCard"

const item = {
  desktopImage: './image-product-desktop.jpg',
  mobileImage: './image-product-mobile.jpg',
  category: 'perfume',
  title: 'Gabrielle Essence Eau De Parfum',
  description: 'A floral, soral and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  oldPrice: '$169.99',
  price: '$149.99'
}

function App() {

  return (
    <div className="App w-screen h-screen flex items-center justify-center bg-cream">
      <ProductCard item={item}/>
    </div>
  )
}

export default App
