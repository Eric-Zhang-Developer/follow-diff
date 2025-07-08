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
    <section className="flex flex-col container items-center gap-4 text-accent">
      <p className="text-lg md:text-xl text-center text-secondary">
        Safely see your non-followers using your official Instagram data. Your files are processed
        right here in your browser and are never uploaded anywhere.
      </p>
      <Dropzone onDrop={onDrop}  disabled={errorFlag} accept={{ "application/json": [".json"] }}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="shadow-md border-2 px-2 md:px-10 py-10 md:py-30 flex flex-col gap-4 md:gap-8 items-center justify-center w-full md:w-3/5 border-dashed rounded-3xl  mt-6 md:mt-12 text-lg hover:cursor-pointer"
          >
            <input {...getInputProps()} data-testid="file-input"></input>

            {/* Conditional rendering to show if a user has uploaded single files*/}
            {hasProcessedFollowers && (
              <div
                className="bg-light-accent px-5 md:px-20 py-2 border-1 rounded-2xl border-accent"
                aria-label="Followers List Uploaded!"
              >
                Followers List Uploaded!
              </div>
            )}

            {hasProcessedFollowing && (
              <div className="bg-light-accent px-5 md:px-20 py-2 border-1 rounded-2xl border-accent">
                Following List Uploaded!
              </div>
            )}

            {errorFlag ? (
              <section className="flex flex-col items-center gap-4 md:gap-6 text-center text-primary">
                <h2 className="text-3xl">Upload Failed!</h2>
                <p className="text-xl">
                  The file doesn&apos;t look like a proper Instagram followers.json or following.json file
                </p>
                <button
                  onClick={() => setErrorFlag(false)}
                  className="border-1 px-4 py-2 text-lg rounded-xl hover:cursor-pointer transition hover:scale-105 shadow-sm"
                >
                  Try Again
                </button>
              </section>
            ) : (
              <section className="flex flex-col items-center gap-4 md:gap-8">
                <Upload size={50}></Upload>
                <p className="text-center whitespace-normal break-words text-primary">
                  Drag&nbsp;&amp;&nbsp;drop&nbsp;your
                  <br />
                  <span className="bg-slate-100 text-sm font-mono mx-1 px-2 py-1 rounded break-all">
                    followers.json
                  </span>
                  &amp;
                  <span className="bg-slate-100 text-sm font-mono mx-1 px-2 py-1 rounded break-all">
                    following.json
                  </span>
                  <br />
                  files&nbsp;here
                </p>
                <span className="text-secondary">or</span>
                <button className="border-1 px-4 py-2 text-lg rounded-xl hover:cursor-pointer transition hover:scale-105 bg-light-accent shadow-sm">
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
