export default function Testimonial({ testimony }) {
  const { name, title, quote, image } = testimony

  return (
    <div className="flex flex-col gap-5">
      <div className="px-6 py-8 bg-testimonialsBackground">
        <p className="text-xs text-white leading-relaxed">{quote}</p>
        <div className="flex items-center gap-3 mt-5">
          <img className="rounded-full w-8 h-8" src={image} />
          <div>
            <h4 className="text-sm font-bold text-white">{name}</h4>
            <p className="text-xs text-white">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
