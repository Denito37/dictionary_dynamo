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
      <div className=" my-4 md:flex md:gap-x-8">
        <Dictionary />
        <div>
          <Flash />
          <WOTD />
          <NOTD />
        </div>
      </div>
    </div>
  )
}

export default App
