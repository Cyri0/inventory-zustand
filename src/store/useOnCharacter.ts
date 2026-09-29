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
    useItem: (item: ItemType) => void
}

export const useOnCharacter = create<OnCharacterType>((set) => ({
    body: null,
    head: null,
    leftHand: null,
    legs: null,
    neck: null,
    rightHand: null,
    trinket: null,
    useItem: (item: ItemType) => (set((state) => ({})))
}))