import { auth } from "@/common/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const login = async (
  email: string,
  password: string,
  router: AppRouterInstance
): Promise<void> => {
  if (!email || !password) {
    alert("メールアドレスとパスワードを入力してください");
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/list");
  } catch (error) {
    console.error("Error logging in:", error);
    alert("ログインに失敗しました");
  }
};
