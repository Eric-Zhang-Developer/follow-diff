import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Tutorial() {
  return (
    <div className="font-text flex min-h-screen flex-col px-2 pt-5 pb-4 md:px-4 md:pt-10 text-primary">
      <main className="container mx-auto flex flex-grow flex-col items-start gap-4 px-2 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center self-start p-4 text-lg"
        >
          <ArrowLeft></ArrowLeft> Go Back
        </Link>

        <h1 className="font-main text-3xl md:text-5xl ">
          How to Get Your Instagram Data Files
        </h1>
        
      </main>
    </div>
  );
}
