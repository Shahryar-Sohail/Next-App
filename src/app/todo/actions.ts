"use server";
import { revalidatePath } from "next/cache";

export async function addTodo(data: FormData) {
  const task = data.get("task") as string;

  const res = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });

  if (!res.ok) {
    throw new Error("Failed to add todo");
  }

  revalidatePath("/todo");
}


