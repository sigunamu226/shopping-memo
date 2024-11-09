import { Header } from "@/components/organisms/Header";
import { InputBody } from "@/components/organisms/List/InputBody";
import { ListBody } from "@/components/organisms/List/ListBody";

export default function Page() {
  return (
    <>
      <Header />
      <div className="container md:mx-auto">
        <InputBody />
        <ListBody />
      </div>
    </>
  );
}
