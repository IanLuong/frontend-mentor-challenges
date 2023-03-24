const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-barlow font-semibold mb-8">
      <img
        className="rounded-full w-16 m-6"
        src={testimonial.imageUrl}
        alt={testimonial.name}
      />
      <p className="text-customBlue-700 mb-4 sm:w-4/5 sm:m-8">
        {testimonial.quote}
      </p>
      <h2 className="text-lg font-fraunces font-extrabold mb-2">
        {testimonial.name}
      </h2>
      <p className="text-sm text-customBlue-400">{testimonial.position}</p>
    </div>
  )
}

export default Testimonial
