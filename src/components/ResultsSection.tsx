import React from "react";
import { RotateCw } from "lucide-react";
import { ResultsSectionProps } from "@/lib/types";

export default function ResultsSection({
  handleReset,
  userDifference,
}: ResultsSectionProps) {
  return (
    <section className="flex flex-col items-center">
      <button
        onClick={handleReset}
        aria-label="Reset Button"
        className="transform cursor-pointer py-4 transition hover:rotate-90"
      >
        <RotateCw size={40}></RotateCw>
      </button>
      <p className="mb-6 text-center text-2xl">
        Accounts that don&apos;t follow you back -{" "}
        <span className="text-accent">{userDifference.length}</span>
      </p>

      <ol className="container mx-auto flex flex-row flex-wrap justify-center gap-1.5 sm:gap-2.5">
        {userDifference.map((userName) => (
          <li key={userName} aria-label={userName}>
            <a
              className="text-s text-border border-accent m-1 inline-block transform cursor-pointer rounded-full border-2 border-l-8 bg-slate-100 px-3 py-1 shadow-lg transition hover:scale-110"
              href={`https://www.instagram.com/${userName}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userName}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
