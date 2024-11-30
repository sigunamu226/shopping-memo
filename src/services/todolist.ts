export const initializeItems = {};

export const save = (
  inputValue: string,
  userId: string,
  items: string[],
  setItems: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  if (!inputValue) return;

  setItems([...items, inputValue]);
};
