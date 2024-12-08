import { db } from "@/common/firebase";
import { doc, setDoc } from "firebase/firestore";

export const addItem = async (
  items: string[],
  userId: string
): Promise<void> => {
  try {
    await setDoc(doc(db, "users", userId), {
      id: userId,
      items: items,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
