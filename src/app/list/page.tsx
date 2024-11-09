import { Header } from "@/components/organisms/Header";
import { Button, Input } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <Header />
      <div className="container md:mx-auto">
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
        <div className="mt-4 flex justify-center">
          <ul className="w-full max-w-2xl max-h-[calc(100vh-10rem)] rounded-lg p-4 space-y-4 overflow-y-auto">
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 1</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 2</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 3</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 4</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 1</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 2</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 3</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 4</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 1</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 2</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 3</span>
            </li>
            <li className="bg-white/80 text-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <input type="checkbox" className="mr-2" />
              <span>Todo項目 4</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
