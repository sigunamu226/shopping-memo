import { DeleteIcon } from "@/assets/images/DeleteIcon";
import { Button, Checkbox } from "@nextui-org/react";

interface IListBodyProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ListBody: React.FC<IListBodyProps> = (props) => {
  const { items, setItems } = props;

  return (
    <div className="mt-4 flex justify-center">
      <ul className="w-full max-w-2xl max-h-[calc(100vh-10rem)] rounded-lg p-4 space-y-3 overflow-y-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex bg-white/80 text-gray-800 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <Checkbox>{item}</Checkbox>
            <Button
              className="ml-auto"
              isIconOnly
              color="danger"
              variant="bordered"
            >
              <DeleteIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
