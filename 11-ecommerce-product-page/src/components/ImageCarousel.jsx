import iconNext from '/images/icon-next.svg'
import iconPrevious from '/images/icon-previous.svg'
import imageProduct from '/images/image-product-1.jpg'

const ImageCarousel = () => {
  return (
    <div className="relative">
      <img className="object-cover object-center" src={imageProduct} />
      <div className="py-4 px-5 rounded-full bg-white absolute left-3 top-1/2">
        <img src={iconPrevious} />
      </div>
      <div className="py-4 px-5 rounded-full bg-white absolute right-3 top-1/2">
        <img src={iconNext} />
      </div>
    </div>
  )
}

export default ImageCarousel
