import { NoteCard } from "@/components/noteCard";
import { NoteForm } from "@/components/noteForm";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/9DbNC11qFUg0", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <main className="box-border p-8 border-4 rounded-lg">
      <h1 className="my-4 text-xl font-semibold">Create Data Visitor</h1>
      <NoteForm />
      <h1 className="mt-10 py-4 text-xl font-semibold">Data Visitor</h1>
      <div className="border border-gray-300 rounded-lg shadow-lg p-10 flex flex-wrap mx-auto gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="xl:w-1/4 bg-slate-100 border border-gray-200 px-4 py-4 rounded-md shadow-md m-4"
          >
            <NoteCard item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
