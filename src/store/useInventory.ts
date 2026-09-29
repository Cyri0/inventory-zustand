import { create } from 'zustand'
import type { ItemType } from '../types/ItemType'

const starterItems: ItemType[] = [
  {
    id: "iron-helmet",
    name: "Iron Helmet",
    image: "⛑️",
    description: "A sturdy helmet for reliable protection.",
    attack: 0,
    defense: 3,
    power: 0,
    knowledge: 1,
    slot: "head",
  },
  {
    id: "silver-necklace",
    name: "Silver Necklace",
    image: "📿",
    description: "A necklace with a faint magical glow.",
    attack: 0,
    defense: 1,
    power: 2,
    knowledge: 2,
    slot: "neck",
  },
  {
    id: "leather-armor",
    name: "Leather Armor",
    image: "🛡️",
    description: "Light armor that does not restrict movement.",
    attack: 1,
    defense: 4,
    power: 0,
    knowledge: 0,
    slot: "body",
  },
  {
    id: "iron-sword",
    name: "Iron Sword",
    image: "⚔️",
    description: "A dependable blade for close combat.",
    attack: 5,
    defense: 0,
    power: 1,
    knowledge: 0,
    slot: "rightHand",
  },
  {
    id: "ancient-tome",
    name: "Ancient Tome",
    image: "📖",
    description: "A book filled with forgotten knowledge.",
    attack: 0,
    defense: 0,
    power: 2,
    knowledge: 5,
    slot: "trinket",
  },
  {
    id: "leather-boots",
    name: "Leather Boots",
    image: "🥾",
    description: "Sturdy boots for your feet.",
    attack: 0,
    defense: 2,
    power: 0,
    knowledge: 0,
    slot: "legs",
  },
  {
    id: "water-gun",
    name: "Water Gun",
    image: "🔫",
    description: "A playful water gun for fun and games.",
    attack: 1,
    defense: 0,
    power: 0,
    knowledge: 0,
    slot: "rightHand",
  }
]

type InventoryType = {
    inventory: ItemType[],
    addToInventory: (item: ItemType) => void,
    putItemFromInventory: (id: string) => ItemType
}

export const useInventory = create<InventoryType>((set, get) => ({
    inventory: starterItems,
    addToInventory: (item: ItemType) => (set((state) => ({inventory: [...state.inventory, item]}))),
    putItemFromInventory(id) {
      const item = get().inventory.find((e) => e.id === id)
      
      if(!item){
        throw Error("Nincs ilyen item!")
      }
      set((state) => ({inventory: state.inventory.filter((e) => e.id !== id)}))
      
      return item;
    },
}))
