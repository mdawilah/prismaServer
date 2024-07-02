"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNoteAction } from "@/actions/createnote";

export const Noteform = () => {
  // const router = useRouter();

  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  // async function handleCreateData() {
  //   router.refresh();
  //   setTitle("");
  //   setContent("");
  // }

  return (
    <form action={createNoteAction}>
      <input name="title" />
      <textarea name="content"></textarea>
      <button>Create</button>
    </form>
  );
};
