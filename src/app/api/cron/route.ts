import { removeOldCheckedItems } from "@/services/firestore_admin";
import { NextResponse } from "next/server";

export const revalidate = 1;

export async function GET() {
  try {
    await removeOldCheckedItems();
    return NextResponse.json({
      message: "Old checked items removed successfully",
    });
  } catch (error) {
    console.error("Cleanup error:", error);
    return NextResponse.json(
      { error: "Failed to remove old checked items" },
      { status: 500 }
    );
  }
}
