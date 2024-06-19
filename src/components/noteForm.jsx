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
    <div className="border border-gray-300 px-5 py-5 rounded-lg shadow-lg space-y-4">
      <input
        value={name_0}
        placeholder="Name Visitor"
        onChange={(e) => setName_0(e.target.value)}
      />
      <input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <select
        value={destination}
        onChange={(e) => setDestinantion(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 font-normal"
      >
        <option disable selected value="">
          Select Floor
        </option>
        <option value="1st Floor">1st Floor</option>
        <option value="2nd Floor">2nd Floor</option>
        <option value="3rd Floor">3rd Floor</option>
        <option value="4th Floor">4th Floor</option>
        <option value="5th Floor">5th Floor</option>
      </select>
      <textarea
        value={information}
        placeholder="Information"
        onChange={(e) => setInformation(e.target.value)}
      ></textarea>
      <button onClick={handleCreateData} className="my-1">
        Create
      </button>
    </div>
  );
};
