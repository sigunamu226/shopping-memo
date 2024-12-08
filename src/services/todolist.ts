import { addItem } from "./firestore";

export const initializeItems = {};

export const save = async (
  inputValue: string,
  userId: string,
  items: string[],
  setItems: React.Dispatch<React.SetStateAction<string[]>>
): Promise<void> => {
  if (!inputValue) return;

  addItem([...items, inputValue], userId);
  setItems([...items, inputValue]);
};
