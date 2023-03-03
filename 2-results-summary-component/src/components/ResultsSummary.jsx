const ResultsSummary = () => {
  return (
    <div className="font-hanken">

      <div className="result rounded-b-lg">
        <h3>Your Result</h3>
        <div>
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h1>Great</h1>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className="summary">
        <h3>Summary</h3>
        {/* TODO: Add mapped components for summary breakdown */}
      </div>

      <button className="text-white bg-darkGrayBlue">Continue</button>
    </div>
  )
}

export default ResultsSummary