import { useInventory } from "../store/useInventory"

const Inventory = () => {
  const inventory = useInventory((state) => state.inventory)
  const putItemFromInventory = useInventory((state) => state.putItemFromInventory)

  const putItem = (id: string) => {
    console.log(putItemFromInventory(id));
  }

  return (
    <div>
        {inventory.map(item => 
        <button onClick={()=>putItem(item.id)} title={item.name}>{item.image}</button>)}
    </div>
  )
}

export default Inventory