import Testimonial from './Testimonial'
import testimonials from '../data/testimonials.json'

export default function TestimonialsSection() {
  return (
    <section className="max-w-screen-lg px-6 pb-[22rem]">
      <div className="relative flex flex-col p-4">
        <img
          src="/images/bg-quotes.png"
          className="-left-[-4px] -top-4 w-6 self-start md:absolute md:w-12"
        />
        <div className="z-10 flex flex-col items-center gap-6 md:flex-row">
          {testimonials.map((testimony) => (
            <Testimonial testimony={testimony} />
          ))}
        </div>
      </div>
    </section>
  )
}
