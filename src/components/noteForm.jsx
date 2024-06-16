"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteForm = () => {
  const router = useRouter();

  const [name_0, setName_0] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestinantion] = useState("");
  const [information, setInformation] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/9DbNC11qFUg0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name_0, email, destination, information }]),
    });

    router.refresh();
    setName_0("");
    setEmail("");
    setDestinantion("");
    setInformation("");
  }

  return (
    <div>
      <input value={name_0} onChange={(e) => setName_0(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <select
        value={destination}
        onChange={(e) => setDestinantion(e.target.value)}
      >
        <option value="Lantai.1">Lantai 1</option>
        <option value="Lantai.2">Lantai 2</option>
        <option value="Lantai.3">Lantai 3</option>
        <option value="Lantai.4">Lantai 4</option>
        <option value="Lantai.5">Lantai 5</option>
      </select>
      <textarea
        value={information}
        onChange={(e) => setInformation(e.target.value)}
      ></textarea>
      <button onClick={handleCreateData}>Create</button>
    </div>
  );
};