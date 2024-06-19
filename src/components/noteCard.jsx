"use client";

import { useRouter } from "next/navigation";

export const NoteCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/9DbNC11qFUg0", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
    <div className="text-medium font-normal">
      <h3 className="font-semibold">{item.name_0}</h3>
      <h4>{item.email}</h4>
      <h4>{item.destination}</h4>
      <p>{item.information}</p>
      <button onClick={handleDeleteData} className="my-2">
        Delete
      </button>
    </div>
  );
};
