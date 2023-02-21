import Header from "./components/aHeader"
import Dictionary from "./components/dictionary"
import WOTD from "./components/wordOTD"
import NOTD from "./components/numberOTD"
import FOTD from "./components/factOTD"
import Flash from "./components/flashCard"

function App() {

  return (
    <div className="App m-4">
      <Header />
      <div className=" my-4 md:grid md:grid-cols-2 md:grid-rows-3">
      <Dictionary />
      <WOTD />
      <NOTD />
      <Flash />
      <FOTD />
      </div>
    </div>
  )
}

export default App
