import { NoteCard } from "@/components/noteCard";
import { NoteForm } from "@/components/noteForm";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/9DbNC11qFUg0", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <main className="max-w-2xl m-auto py-12 font-bold space-y-2">
      <h1 className="text-xl py-2">Data Visitor</h1>
      <div className="space-y-4">
        {data.map((item) => {
          return <NoteCard key={item._id} item={item} />;
        })}
      </div>
      <NoteForm />
    </main>
  );
}
