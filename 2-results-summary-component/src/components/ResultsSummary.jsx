import CategoryResult from "./CategoryResult"

const ResultsSummary = ({data}) => {
  return (
    <div className="font-hanken flex flex-col md:flex-row md:shadow-2xl md:rounded-3xl">

      <div className="flex flex-col p-6 items-center justify-center text-center gap-6 rounded-b-3xl md:rounded-3xl md:w-1/2 bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-white font-semibold">
        <h3 className="text-lightLavender text-lg md:text-xl">Your Result</h3>
        <div className="rounded-full bg-gradient-to-b from-violetBlue w-32 h-32 md:m-4 md:w-44 md:h-44 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl pb-2">76</h1>
          <p className="text-lightLavender/50">of 100</p>
        </div>
        <div className="flex flex-col items-center gap-2 pb-4">
          <h1 className="text-2xl">Great</h1>
          <p className="text-lightLavender font-normal w-3/4 md:w-2/3">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>

      <div className="m-8 md:grow">
        <div className="summary text-xl flex flex-col gap-4 mb-8">
          <h3 className="mb-2 font-bold text-darkGrayBlue">Summary</h3>
          {data.map(entry => (
            <CategoryResult key={entry.id} entry={entry}/>)
          )}
        </div>
      <button className="text-white text-lg bg-darkGrayBlue hover:bg-gradient-to-b hover:from-lightSlateBlue hover:to-lightRoyalBlue w-full p-4 mb-2 rounded-full">Continue</button>
      </div>


    </div>
  )
}

export default ResultsSummary