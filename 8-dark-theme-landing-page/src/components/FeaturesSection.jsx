import features from '../data/features.json'
import FeatureComponent from './FeatureComponent'

export default function FeaturesSection() {
  return (
    <section className="flex max-w-screen-lg flex-col items-center gap-24 p-6 text-center sm:grid sm:grid-cols-2">
      {features.map((feature) => (
        <FeatureComponent {...feature} />
      ))}
    </section>
  )
}
