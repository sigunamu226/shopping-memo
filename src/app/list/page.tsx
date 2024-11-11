"use client";

import { Header } from "@/components/organisms/Header";
import { InputBody } from "@/components/organisms/List/InputBody";
import { ListBody } from "@/components/organisms/List/ListBody";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
      <Header />
      <div className="container md:mx-auto">
        <InputBody items={items} setItems={setItems} />
        <ListBody items={items} setItems={setItems} />
      </div>
    </>
  );
}
