import { setItem } from "./firestore";

export const initializeItems = {};

export const addItem = async (
  inputValue: string,
  userId: string,
  items: string[],
  setItems: React.Dispatch<React.SetStateAction<string[]>>
): Promise<void> => {
  if (!inputValue) return;

  setItem([...items, inputValue], userId);
  setItems([...items, inputValue]);
};

export const deleteItem = async (
  userId: string,
  items: string[],
  setItems: React.Dispatch<React.SetStateAction<string[]>>
): Promise<void> => {
  setItem(items, userId);
  setItems(items);
};
