import Dictionary from "./components/dictionary"
import WOTD from "./components/wordOTD"

function App() {

  return (
    <div className="App md:grid md:grid-cols-2">
      <Dictionary />
      <WOTD />
    </div>
  )
}

export default App
