import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Tutorial() {
  return (
    <div className="font-text flex min-h-screen flex-col px-2 pt-5 pb-4 md:px-4 md:pt-10">
      <main className="container mx-auto flex flex-grow flex-col items-center gap-4 px-2 md:px-12">
        <Link href="/" className="p-4 text-lg self-start inline-flex items-center"><ArrowLeft></ArrowLeft> Go Back</Link>
          
        <h1 className="text-xl">Tutorial Page</h1>
      </main>
    </div>
  );
}
