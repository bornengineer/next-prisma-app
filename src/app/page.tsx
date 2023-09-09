import Link from "next/link";

export default function Home() {
  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todos</h1>
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none rounded"
        href="/new"
      >
        New
      </Link>
    </header>
  );
}
