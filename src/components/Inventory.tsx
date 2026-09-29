import { useInventory } from "../store/useInventory"
import { useOnCharacter } from "../store/useOnCharacter"

const Inventory = () => {
  const inventory = useInventory((state) => state.inventory)
  const putItemFromInventory = useInventory((state) => state.putItemFromInventory)

  const useItem = useOnCharacter((state) => state.useItem)

  const putItem = (id: string) => {
    useItem(putItemFromInventory(id))
  }

  return (
    <div>
        {inventory.map(item => 
        <button onClick={()=>putItem(item.id)} title={item.name}>{item.image}</button>)}
    </div>
  )
}

export default Inventory