import { IItem } from "@/common/interfaces/items";
import { addItem } from "@/services/itemlist";
import { Button, Input } from "@nextui-org/react";
import { User } from "firebase/auth";
import React, { useState } from "react";

interface IInputBodyProps {
  items: IItem[];
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
  user: User;
}

export const InputBody: React.FC<IInputBodyProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { items, setItems, user } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onClick = async (): Promise<void> => {
    await addItem(inputValue, user.uid, items, setItems);
    setInputValue("");
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="w-2/3">
        <Input
          type="text"
          size="sm"
          label="買う物"
          isClearable
          placeholder="買う物を入力してください"
          classNames={{
            label: "text-black/50",
            input: [
              "bg-transparent",
              "text-black/90",
              "placeholder:text-default-700/50",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-white/80",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "group-data-[focus=true]:bg-white/80",
              "!cursor-text",
            ],
          }}
          value={inputValue}
          onChange={onChange}
          onClear={() => setInputValue("")}
        />
      </div>
      <div className="ml-2 flex items-center">
        <Button color="secondary" variant="bordered" onClick={onClick}>
          追加
        </Button>
      </div>
    </div>
  );
};
