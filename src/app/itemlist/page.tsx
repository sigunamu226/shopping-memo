"use client";

import { User } from "firebase/auth";
import { auth } from "@/common/firebase";
import { Header } from "@/components/organisms/Header";
import { InputBody } from "@/components/organisms/List/InputBody";
import { ListBody } from "@/components/organisms/List/ListBody";
import { useEffect, useState } from "react";
import { IItem } from "@/common/interfaces/items";
import { getItem } from "@/services/firestore";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // クリーンアップ
  }, []);

  useEffect(() => {
    (async () => {
      if (!user) return;
      const data = await getItem(user.uid);
      setItems(data);
    })();
  }, [user]);

  if (!user) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className="container md:mx-auto">
        <InputBody items={items} setItems={setItems} user={user} />
        <ListBody items={items} setItems={setItems} user={user} />
      </div>
    </>
  );
}
