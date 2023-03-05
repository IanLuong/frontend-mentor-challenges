const CategoryResult = ({entry}) => {
  const {color, icon, category, score} = entry

  return (
    <div className={`flex justify-between p-4 rounded-xl bg-${color} bg-opacity-5`}>
      <div className="flex gap-2">
        <img src={icon} alt={category || "Category"}/>
        <h4 className={`font-bold text-${color} text-base`}>{category}</h4>
      </div>
      <p className="text-base text-darkGrayBlue/60">
        <span className="font-bold text-darkGrayBlue">{score}</span> / 100
      </p>
    </div>
  )
}

export default CategoryResult