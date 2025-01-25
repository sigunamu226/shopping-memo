import { v4 as uuidv4 } from "uuid";
import { IItem } from "@/common/interfaces/items";
import { setItem } from "./firestore";
import { addItemValidation } from "@/validations/todolist";

export const addItem = async (
  inputValue: string,
  userId: string,
  items: IItem[],
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
): Promise<void> => {
  const validationCheck = addItemValidation(inputValue, items);
  if (!validationCheck) return;

  const newItem: IItem = {
    id: uuidv4(),
    name: inputValue,
    check: false,
  };

  setItem([...items, newItem], userId);
  setItems([...items, newItem]);
};

export const updateItem = async (
  e: React.ChangeEvent<HTMLInputElement>,
  itemId: string,
  userId: string,
  items: IItem[],
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
): Promise<void> => {
  const newItems = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, check: e.target.checked };
    }
    return item;
  });

  setItem(newItems, userId);
  setItems(newItems);
};

export const deleteItem = async (
  userId: string,
  items: IItem[],
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
): Promise<void> => {
  setItem(items, userId);
  setItems(items);
};
