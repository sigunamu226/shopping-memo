import { v4 as uuidv4 } from "uuid";
import { IItem } from "@/common/interfaces/items";
import { setItem } from "./firestore";

export const initializeItems = {};

export const addItem = async (
  inputValue: string,
  userId: string,
  items: IItem[],
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
): Promise<void> => {
  if (!inputValue) return;

  const newItem: IItem = {
    id: uuidv4(),
    name: inputValue,
    check: false,
  };

  setItem([...items, newItem], userId);
  setItems([...items, newItem]);
};

export const deleteItem = async (
  userId: string,
  items: IItem[],
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
): Promise<void> => {
  setItem(items, userId);
  setItems(items);
};
