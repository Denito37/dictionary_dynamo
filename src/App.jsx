import Header from "./components/aHeader"
import Dictionary from "./components/dictionary"
import WOTD from "./components/wordOTD"
import Flash from "./components/flashCard"
import Footer from "./components/zfooter"

function App() {

  return (
    <div className=" m-4">
      <Header />
      <div className=" my-4 md:flex md:gap-x-8">
        <Dictionary />
        <div className=" bg-gray-800 p-4 rounded-2xl border-2">
          <Flash />
          <WOTD />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
