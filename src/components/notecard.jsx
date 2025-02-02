"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const NoteCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/T6L7lQmSjbqz", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
    <div>
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-sm text-slate-500">{item.content}</p>
      <button onClick={handleDeleteData}>Delete</button>
    </div>
  );
};
