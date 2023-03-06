const ProductCard = ({image, category, title, price, discount}) => {
  return (
    <div>
      <img src={image} alt={title}/>
      <div>
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>

        <p></p>

        <div></div>
        <div className="">  
          <img src="./icon-cart.svg" alt="Add to Cart" />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard