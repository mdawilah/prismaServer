"use server";

export async function createNoteAction(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  console.log({ title, content });
}
