import { create } from "zustand";
import { type ItemType } from "../types/ItemType";

type OnCharacterType = {
    head: ItemType | null,
    neck: ItemType | null,
    body: ItemType | null,
    legs: ItemType | null,
    rightHand: ItemType | null,
    leftHand: ItemType | null,
    trinket: ItemType | null,
    useItem: (item: ItemType) => ItemType | null
}

export const useOnCharacter = create<OnCharacterType>((set, get) => ({
    body: null,
    head: null,
    leftHand: null,
    legs: null,
    neck: null,
    rightHand: null,
    trinket: null,
    useItem(item: ItemType){
        const oldItem = get()[item.slot]
        set(() => ({[item.slot]: item}))
        return oldItem
    } 
}))