import { Button, Input } from "@nextui-org/react";
import React from "react";

export const InputBody: React.FC = () => {
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
        />
      </div>
      <div className="ml-2 flex items-center">
        <Button color="secondary" variant="bordered">
          追加
        </Button>
      </div>
    </div>
  );
};
