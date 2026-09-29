import Character from "./components/Character"
import Inventory from "./components/Inventory"
import Stats from "./components/Stats"

const App = () => {
  return (
    <div>
      <Stats/>
      <Character/>
      <Inventory/>
    </div>
  )
}

export default App