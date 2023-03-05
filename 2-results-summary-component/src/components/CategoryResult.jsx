const CategoryResult = ({entry}) => {
  const {color, icon, category, score} = entry

  const colorVariants = {
    lightRed: {
      text: 'text-lightRed',
      background: "bg-lightRed"
    },
    orangeyYellow: {
      text: "text-orangeyYellow",
      background: "bg-orangeyYellow"
    },
    greenTeal: {
      text: "text-greenTeal",
      background: "bg-greenTeal"
    },
    cobaltBlue: {
      text: "text-cobaltBlue",
      background: "bg-cobaltBlue"
    }
  }

  return (
    <div className={`flex justify-between p-4 rounded-xl ${colorVariants[color]['background']} bg-opacity-5`}>
      <div className="flex gap-2">
        <img src={icon} alt={category || "Category"}/>
        <h4 className={`font-bold ${colorVariants[color]['text']} text-base`}>{category}</h4>
      </div>
      <p className="text-base text-darkGrayBlue/60">
        <span className="font-bold text-darkGrayBlue">{score}</span> / 100
      </p>
    </div>
  )
}

export default CategoryResult