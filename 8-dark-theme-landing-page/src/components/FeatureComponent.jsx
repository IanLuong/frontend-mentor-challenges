export default function FeatureComponent({ image, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} className="mb-4" />
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  )
}
