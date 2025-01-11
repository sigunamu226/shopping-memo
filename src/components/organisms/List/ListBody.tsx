import { DeleteIcon } from "@/assets/images/DeleteIcon";
import { IItem } from "@/common/interfaces/items";
import { deleteItem } from "@/services/todolist";
import { Button, Checkbox } from "@nextui-org/react";
import { User } from "firebase/auth";

interface IListBodyProps {
  items: IItem[];
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
  user: User;
}

export const ListBody: React.FC<IListBodyProps> = (props) => {
  const { items, setItems, user } = props;

  const onClick = async (index: number): Promise<void> => {
    await deleteItem(
      user.uid,
      items.filter((_, i) => i !== index),
      setItems
    );
  };

  return (
    <div className="mt-4 flex justify-center">
      <ul className="w-full max-w-2xl max-h-[calc(100vh-10rem)] rounded-lg p-4 space-y-3 overflow-y-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex bg-white/80 text-gray-800 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <Checkbox>{item.name}</Checkbox>
            <Button
              className="ml-auto"
              isIconOnly
              color="danger"
              variant="bordered"
              onClick={() => onClick(index)}
            >
              <DeleteIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
