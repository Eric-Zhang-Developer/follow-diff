import Link from "next/link"

export default function Tutorial() {
  return (
    <main className="mx-auto container flex flex-col items-center">
      <h1 className="text-xl">Tutorial Page</h1>
      <Link href="/" className="text-lg bg-slate-300 p-4 border-2"> Go Back</Link>
    </main>
  );
}
