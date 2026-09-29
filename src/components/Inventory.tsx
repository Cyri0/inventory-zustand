import { useInventory } from "../store/useInventory"
import { useOnCharacter } from "../store/useOnCharacter"

const Inventory = () => {
  const inventory = useInventory((state) => state.inventory)
  const putItemFromInventory = useInventory((state) => state.putItemFromInventory)
  const addToInventory = useInventory((state) => state.addToInventory)
  const useItem = useOnCharacter((state) => state.useItem)

  const putItem = (id: string) => {
    const oldItem = useItem(putItemFromInventory(id))
    if (oldItem) {
      addToInventory(oldItem)
    }
  }

  return (
    <div className="inventory">
        {inventory.map(item => 
        <button onClick={()=>putItem(item.id)} title={item.name}>{item.image}</button>)}
    </div>
  )
}

export default Inventory