import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Tutorial() {
  return (
    <div className="font-text text-primary flex min-h-screen flex-col px-2 pt-5 pb-4 md:px-4 md:pt-10">
      <main className="container mx-auto flex flex-grow flex-col items-start gap-4 px-2 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center self-start p-4 text-lg"
        >
          <ArrowLeft></ArrowLeft> Go Back
        </Link>

        <h1 className="font-main text-3xl md:text-5xl">
          How to Get Your Instagram Data Files
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-main ">Step 1</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </li>
          </ol>
        </section>


      </main>
    </div>
  );
}
