import { db } from "@/common/firebase";
import { IItem } from "@/common/interfaces/items";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getItem = async (userId: string): Promise<IItem[]> => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().items as IItem[];
    } else {
      console.error("No such document!");
      return [];
    }
  } catch (e) {
    console.error("Error getting document: ", e);
    return [];
  }
};

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
