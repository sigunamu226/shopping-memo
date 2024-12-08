"use client";

import { User } from "firebase/auth";
import { auth } from "@/common/firebase";
import { Header } from "@/components/organisms/Header";
import { InputBody } from "@/components/organisms/List/InputBody";
import { ListBody } from "@/components/organisms/List/ListBody";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // クリーンアップ
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
