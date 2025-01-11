import { db } from "@/common/firebase";
import { IItem } from "@/common/interfaces/items";
import { doc, setDoc } from "firebase/firestore";

export const setItem = async (
  items: IItem[],
  userId: string
): Promise<void> => {
  try {
    await setDoc(doc(db, "users", userId), {
      id: userId,
      items: items,
    });
  } catch (e) {
    console.error("Error setting document: ", e);
  }
};
