const ProductCard = ({item}) => {
  const {mobileImage, desktopImage, category, title, description, price, oldPrice} = item

  const allCapsCategory = category.split('').map(letter => letter.toUpperCase() + ' ')

  return (
    <div className="m-10 rounded-xl overflow-hidden font-fraunces bg-white shadow-sm md:flex md:w-[768px]">
      <picture className="md:w-1/2">
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt={title} />
      </picture>
      <div className="p-5 md:p-10 flex flex-col gap-2 md:gap-7 md:w-1/2 md:justify-center">
        <h2 className="text-darkGrayishBlue text-xs md:text-base font-montserrot">{allCapsCategory}</h2>
        <h1 className="text-3xl md:text-4xl w-3/4">{title}</h1>

        <p className="text-darkGrayishBlue text-sm md:text-lg line font-montserrot leading-relaxed">{description}</p>

        <div className="flex gap-4 items-center my-3">
          <h2 className="text-3xl md:text-4xl text-darkCyan">{price}</h2>
          {oldPrice && <p className="line-through text-darkGrayishBlue text-xs md:text-sm font-montserrot">{oldPrice}</p>}
        </div>
        <button className="flex bg-darkCyan hover:bg-darkerCyan rounded-lg w-full gap-3 p-4 items-center justify-center font-semibold text-white text-sm font-montserrot">  
          <img src="./icon-cart.svg" alt="Add to Cart" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard

