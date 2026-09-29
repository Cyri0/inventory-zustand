import { useInventory } from "../store/useInventory"
import { useOnCharacter } from "../store/useOnCharacter"
import type { ItemSlots } from "../types/ItemType"

const Character = () => {
  const head = useOnCharacter((state) => state.head)
  const body = useOnCharacter((state) => state.body)
  const leftHand = useOnCharacter((state) => state.leftHand)
  const rightHand = useOnCharacter((state) => state.rightHand)
  const trinket = useOnCharacter((state) => state.trinket)
  const neck = useOnCharacter((state) => state.neck)
  const legs = useOnCharacter((state) => state.legs)

  const removeItem = useOnCharacter((state) => state.removeItem)
  const addToInventory = useInventory((state) => state.addToInventory)

  const removeItemFromCharacter = (slot: ItemSlots) => {
    addToInventory(removeItem(slot))
  }

  return (
    <div className="character">
        <div className="head" onClick={()=>removeItemFromCharacter("head")}>
            {head && head.image}
        </div>
        <div className="body" onClick={()=>removeItemFromCharacter("body")}>
            {body && body.image}
        </div>
        <div className="leftHand" onClick={()=>removeItemFromCharacter("leftHand")}>
            {leftHand && leftHand.image}
        </div>
        <div className="rightHand" onClick={()=>removeItemFromCharacter("rightHand")}>
            {rightHand && rightHand.image}
        </div>
        <div className="trinket" onClick={()=>removeItemFromCharacter("trinket")}>
            {trinket && trinket.image}
        </div>
        <div className="neck" onClick={()=>removeItemFromCharacter("neck")}>
            {neck && neck.image}
        </div>
        <div className="legs" onClick={()=>removeItemFromCharacter("legs")}>
            {legs && legs.image}
        </div>
    </div>
  )
}

export default Character