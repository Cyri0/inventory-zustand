import { useOnCharacter } from "../store/useOnCharacter"

const Character = () => {
  const head = useOnCharacter((state) => state.head)
  const body = useOnCharacter((state) => state.body)
  const leftHand = useOnCharacter((state) => state.leftHand)
  const rightHand = useOnCharacter((state) => state.rightHand)
  const trinket = useOnCharacter((state) => state.trinket)
  const neck = useOnCharacter((state) => state.neck)
  const legs = useOnCharacter((state) => state.legs)

  return (
    <div className="character">
        <div className="head">
            {head && head.image}
        </div>
        <div className="body">
            {body && body.image}
        </div>
        <div className="leftHand">
            {leftHand && leftHand.image}
        </div>
        <div className="rightHand">
            {rightHand && rightHand.image}
        </div>
        <div className="trinket">
            {trinket && trinket.image}
        </div>
        <div className="neck">
            {neck && neck.image}
        </div>
        <div className="legs">
            {legs && legs.image}
        </div>
    </div>
  )
}

export default Character