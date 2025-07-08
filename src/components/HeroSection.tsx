// components/FileUploadZone.tsx
import React from "react";
import { Upload } from "lucide-react";
import Link from "next/link";
import Dropzone from "react-dropzone";
import { HeroSectionProps } from "../lib/types";

export default function HeroSection({
  hasProcessedFollowers,
  hasProcessedFollowing,
  onDrop,
  errorFlag,
  setErrorFlag,
}: HeroSectionProps) {
  return (
    <section className="text-accent container flex flex-col items-center gap-4">
      <p className="text-secondary text-center text-lg md:text-xl">
        Safely see your non-followers using your official Instagram data. Your
        files are processed right here in your browser and are never uploaded
        anywhere.
      </p>
      <Dropzone
        onDrop={onDrop}
        disabled={errorFlag}
        accept={{ "application/json": [".json"] }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="mt-6 flex w-full flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed px-2 py-10 text-lg shadow-md hover:cursor-pointer md:mt-12 md:w-3/5 md:gap-8 md:px-10 md:py-30"
          >
            <input {...getInputProps()} data-testid="file-input"></input>

            {/* Conditional rendering to show if a user has uploaded single files*/}
            {hasProcessedFollowers && (
              <div
                className="bg-light-accent border-accent rounded-2xl border-1 px-5 py-2 md:px-20"
                aria-label="Followers List Uploaded!"
              >
                Followers List Uploaded!
              </div>
            )}

            {hasProcessedFollowing && (
              <div className="bg-light-accent border-accent rounded-2xl border-1 px-5 py-2 md:px-20">
                Following List Uploaded!
              </div>
            )}

            {errorFlag ? (
              <section className="text-primary flex flex-col items-center gap-4 text-center md:gap-6">
                <h2 className="text-3xl">Upload Failed!</h2>
                <p className="text-xl">
                  The file doesn&apos;t look like a proper Instagram
                  followers.json or following.json file
                </p>
                <button
                  onClick={() => setErrorFlag(false)}
                  className="rounded-xl border-1 px-4 py-2 text-lg shadow-sm transition hover:scale-105 hover:cursor-pointer"
                >
                  Try Again
                </button>
              </section>
            ) : (
              <section className="flex flex-col items-center gap-4 md:gap-8">
                <Upload size={50}></Upload>
                <p className="text-primary text-center break-words whitespace-normal">
                  Drag&nbsp;&amp;&nbsp;drop&nbsp;your
                  <br />
                  <span className="mx-1 rounded bg-slate-100 px-2 py-1 font-mono text-sm break-all">
                    followers.json
                  </span>
                  &amp;
                  <span className="mx-1 rounded bg-slate-100 px-2 py-1 font-mono text-sm break-all">
                    following.json
                  </span>
                  <br />
                  files&nbsp;here
                </p>
                <span className="text-secondary">or</span>
                <button className="bg-light-accent rounded-xl border-1 px-4 py-2 text-lg shadow-sm transition hover:scale-105 hover:cursor-pointer">
                  Select Files
                </button>
              </section>
            )}
          </div>
        )}
      </Dropzone>
      <Link href="/tutorial" className="underline">
        {" "}
        Don&apos;t have your files? Here&apos;s how to get them.
      </Link>
    </section>
  );
}
