export type ItemSlots = "head"|"neck"|"body"|"legs"|"rightHand"|"leftHand"|"trinket"

export type ItemType = {
    id: string,
    name: string,
    image: string, // use emoji
    description: string,
    attack?: number,
    defense?: number,
    power?: number,
    knowledge?: number,
    slot: ItemSlots
}