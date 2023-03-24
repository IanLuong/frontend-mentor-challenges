import testimonials from '../testimonials.json'
import Testimonial from './Testimonial'

const TestimonialSection = () => {
  return (
    <section className="m-auto flex flex-col items-center justify-center py-12 px-8 max-w-7xl">
      <h3 className="mx-auto mb-8 font-fraunces text-customBlue-400 tracking-[0.3em]">
        CLIENT TESTIMONIALS
      </h3>
      <div className="flex flex-col sm:flex-row sm:gap-5">
        {testimonials.map((test) => (
          <Testimonial testimonial={test} key={test.id} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
