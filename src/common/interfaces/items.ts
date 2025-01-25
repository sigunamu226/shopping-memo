import { Timestamp } from "firebase/firestore";

export interface IItem {
  id: string;
  name: string;
  check: boolean;
  checkedAt: Timestamp | null;
}
