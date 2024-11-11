export const addItem = (
  inputValue: string,
  items: string[],
  setItems: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  if (!inputValue) return;
  setItems([...items, inputValue]);
};
