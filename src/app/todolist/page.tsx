"use client";

import { auth } from "@/common/firebase";
import { Header } from "@/components/organisms/Header";
import { InputBody } from "@/components/organisms/List/InputBody";
import { ListBody } from "@/components/organisms/List/ListBody";
import { useMemo, useState } from "react";

export default function Page() {
  const [items, setItems] = useState<string[]>([]);

  const user = useMemo(() => {
    return auth.currentUser;
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className="container md:mx-auto">
        <InputBody items={items} setItems={setItems} user={user} />
        <ListBody items={items} setItems={setItems} />
      </div>
    </>
  );
}
