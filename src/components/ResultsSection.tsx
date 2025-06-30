import React from "react";
import { RotateCw } from "lucide-react";
import { ResultsSectionProps } from "@/lib/types";

export default function ResultsSection({handleReset, userDifference} : ResultsSectionProps) {
  return (
    <section className="flex flex-col items-center">
      <button
        onClick={handleReset}
        aria-label="Reset Button"
        className="py-4 transform transition hover:rotate-90 cursor-pointer "
      >
        <RotateCw size={40}></RotateCw>
      </button>
      <p className="text-2xl mb-6 text-center">
        Accounts that don&apos;t follow you back - {userDifference.length}
      </p>

      <ol className="flex flex-row flex-wrap container mx-auto  gap-1.5 sm:gap-2.5 justify-center">
        {userDifference.map((userName) => (
          <li key={userName} aria-label={userName}>
            <a
              className="text-s m-1 inline-block rounded-full border-2 border-l-8 bg-slate-100 px-3 py-1 text-border cursor-pointer transition transform hover:scale-110"
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
