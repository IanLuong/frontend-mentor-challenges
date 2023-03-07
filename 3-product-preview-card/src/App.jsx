import ProductCard from "./components/ProductCard"

const item = {
  image: './image-product-mobile.jpg',
  category: 'perfume',
  title: 'Gabrielle Essence Eau De Parfum',
  description: 'A floral, soral and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  oldPrice: '$169.99',
  price: '$149.99'
}

function App() {

  return (
    <div className="App w-screen h-screen flex items-center justify-center bg-yellow-50">
      <ProductCard item={item}/>
    </div>
  )
}

export default App
