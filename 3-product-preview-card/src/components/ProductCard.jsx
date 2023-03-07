const ProductCard = ({item}) => {
  const {image, category, title, description, price, oldPrice} = item

  const allCapsCategory = category.split('').map(letter => letter.toUpperCase() + ' ')

  return (
    <div className="m-10 rounded-xl overflow-hidden font-fraunces bg-white shadow-sm">
      <img src={image} alt={title}/>
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-darkGrayishBlue text-xs font-montserrot">{allCapsCategory}</h2>
        <h1 className="text-3xl">{title}</h1>

        <p className="text-darkGrayishBlue text-sm font-montserrot">{description}</p>

        <div className="flex gap-4 items-center">
          <h2 className="text-2xl text-emerald-600">{price}</h2>
          {oldPrice && <p className="line-through text-darkGrayishBlue text-xs font-montserrot">{oldPrice}</p>}
        </div>
        <div className="flex bg-emerald-600 rounded-lg w-full gap-3 p-3 items-center justify-center font-semibold text-white text-sm font-montserrot">  
          <img src="./icon-cart.svg" alt="Add to Cart" />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

