"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:3001/notes";

export async function createNote(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!title || !body) {
    throw new Error("Both title and note body are required.");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not save the note. Is json-server running?");
  }

  revalidatePath("/notes");
  redirect("/notes");
}

export async function deleteNote(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();

  if (!id) {
    throw new Error("A note ID is required.");
  }

  const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
    method: "DELETE",
    cache: "no-store",
  });

  if (!response.ok && response.status !== 404) {
    throw new Error("Could not delete the note.");
  }

  revalidatePath("/notes");
  revalidatePath(`/notes/${id}`);
}
