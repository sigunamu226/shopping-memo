import { IItem } from "@/common/interfaces/items";

export const addItemValidation = (
  inputValue: string,
  items: IItem[]
): boolean => {
  if (!inputValue) {
    alert("買う物を入力してください");
    return false;
  }

  if (items.some((item) => item.name === inputValue)) {
    alert("同じ名前の買う物が既に存在します");
    return false;
  }

  return true;
};
