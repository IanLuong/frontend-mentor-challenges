export default function Testimonial({ testimony }) {
  const { name, title, quote, image } = testimony

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-testimonialsBackground px-6 py-8">
        <p className="text-xs leading-relaxed text-white lg:text-sm">{quote}</p>
        <div className="mt-5 flex items-center gap-3">
          <img className="h-8 w-8 rounded-full" src={image} />
          <div>
            <h4 className="text-sm font-bold text-white">{name}</h4>
            <p className="text-xs text-white">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
