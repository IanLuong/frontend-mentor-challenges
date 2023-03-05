import ResultsSummary from "./components/ResultsSummary"
import data from './data.json'

const App = () => {

  return (
    <div className="App md:h-screen md:w-screen md:flex md:justify-center md:items-center md:p-4">
      <ResultsSummary data={data}/>
    </div>
  )
}

export default App
