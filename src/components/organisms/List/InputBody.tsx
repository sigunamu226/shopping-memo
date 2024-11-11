import { addItem } from "@/services/inputbody";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

interface IInputBodyProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InputBody: React.FC<IInputBodyProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { items, setItems } = props;

  const onClick = (): void => {
    addItem(inputValue, items, setItems);
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
          onChange={(e) => setInputValue(e.target.value)}
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
