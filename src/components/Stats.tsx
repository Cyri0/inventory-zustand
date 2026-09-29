import { useOnCharacter } from "../store/useOnCharacter"

const Stats = () => {
  const head = useOnCharacter((state) => state.head)
  const body = useOnCharacter((state) => state.body)
  const leftHand = useOnCharacter((state) => state.leftHand)
  const rightHand = useOnCharacter((state) => state.rightHand)
  const trinket = useOnCharacter((state) => state.trinket)
  const neck = useOnCharacter((state) => state.neck)
  const legs = useOnCharacter((state) => state.legs)

  const getStat = (stat: "attack" | "defense" | "power" | "knowledge") => {
    return (head?.[stat] || 0) + (body?.[stat] || 0) + (leftHand?.[stat] || 0) + (rightHand?.[stat] || 0) + (trinket?.[stat] || 0) + (neck?.[stat] || 0) + (legs?.[stat] || 0)
  }

    return (
    <div className="stats">
        <div>⚔️ {getStat("attack")}</div>
        <div>🛡️ {getStat("defense")}</div>
        <div>⚡ {getStat("power")}</div>
        <div>📚 {getStat("knowledge")}</div>
    </div>
  )
}

export default Stats