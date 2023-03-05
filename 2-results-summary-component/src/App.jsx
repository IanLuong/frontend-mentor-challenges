import ResultsSummary from "./components/ResultsSummary"
import data from './data.json'

const App = () => {

  return (
    <div className="App">
      <ResultsSummary data={data}/>
    </div>
  )
}

export default App
