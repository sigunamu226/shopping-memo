"use client";

import { auth } from "@/common/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });
    return unsubscribe;
  }, [router]);

  return <>{children}</>;
}
