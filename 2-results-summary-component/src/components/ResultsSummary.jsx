import CategoryResult from "./CategoryResult"

const ResultsSummary = ({data}) => {
  return (
    <div className="font-hanken flex flex-col">

      <div className="flex flex-col p-6 items-center justify-center text-center gap-6 rounded-b-3xl bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-white font-semibold">
        <h3 className="text-lightLavender text-lg">Your Result</h3>
        <div className="rounded-full bg-gradient-to-b from-violetBlue w-32 h-32 flex flex-col justify-center">
          <h1 className="text-5xl pb-2">76</h1>
          <p className="text-lightLavender">of 100</p>
        </div>
        <div className="flex flex-col items-center gap-2 pb-4">
          <h1 className="text-2xl">Great</h1>
          <p className="text-lightLavender w-3/4">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>

      <div className="m-8">
        <div className="summary text-xl flex flex-col gap-4">
          <h3 className="mb-2">Summary</h3>
          {data.map(entry => (
            <CategoryResult key={entry.id} entry={entry}/>)
          )}
        </div>
      </div>
        <button className="text-white bg-darkGrayBlue">Continue</button>
    </div>
  )
}

export default ResultsSummary