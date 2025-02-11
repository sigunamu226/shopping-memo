import { firestoreAdmin } from "@/common/firebase_admin";
import { IItem } from "@/common/interfaces/items";

export const removeOldCheckedItems = async (): Promise<boolean> => {
  const usersRef = firestoreAdmin.collection("users");
  const snapshot = await usersRef.get();

  if (snapshot.empty) {
    return false;
  }

  const tasks: Promise<FirebaseFirestore.WriteResult>[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    const items = data.items as IItem[];
    const newItems = items.filter((item) => {
      if (!item.checkedAt) {
        return true;
      }

      return item.checkedAt.seconds >= Date.now() / 1000 - 3 * 24 * 60 * 60;
    });

    tasks.push(doc.ref.update({ items: newItems }));
  });

  await Promise.all(tasks);

  return true;
};
