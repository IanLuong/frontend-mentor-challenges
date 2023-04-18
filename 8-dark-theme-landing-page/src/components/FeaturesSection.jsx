import features from '../data/features.json'
import FeatureComponent from './FeatureComponent'

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center gap-24 p-6 text-center">
      {features.map((feature) => (
        <FeatureComponent {...feature} />
      ))}
    </section>
  )
}
