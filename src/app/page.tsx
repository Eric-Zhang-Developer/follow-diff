"use client";

import { useEffect, useState } from "react";
import { FollowerListSchema, FollowingListSchema } from "@/lib/types";
import { Github, RotateCw, Upload } from "lucide-react";
import Link from "next/link";
import Dropzone from "react-dropzone";
import ExtractNamesFromJson from "@/lib/extractNamesFromJson";
import Compare from "@/lib/comparison";
export default function Home() {
  const [followers, setFollowers] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [userDifference, setUserDifference] = useState<string[]>([]);

  const [hasProcessedFollowers, setHasProcessedFollowers] = useState(false);
  const [hasProcessedFollowing, setHasProcessedFollowing] = useState(false);
  const [hasProcessedDifference, setHasProcessedDifference] = useState(false);

  // This function exists to compete the user life cycle on the page
  function handleReset() {
    setHasProcessedFollowers(false);
    setHasProcessedDifference(false);
    setHasProcessedFollowing(false);
    setFollowers([]);
    setFollowing([]);
    setUserDifference([]);
  }

  function onDrop(acceptedFiles: File[]) {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        try {
          const input = JSON.parse(reader.result as string);

          const followingResult = FollowingListSchema.safeParse(input);
          if (followingResult.success) {
            setFollowing(ExtractNamesFromJson(followingResult.data.relationships_following));
            setHasProcessedFollowing(true);
            return;
          }

          const followerResult = FollowerListSchema.safeParse(input);
          if (followerResult.success) {
            setFollowers(ExtractNamesFromJson(followerResult.data));
            setHasProcessedFollowers(true);
            return;
          }
        } catch (error) {
          console.error("File is not a valid followers or following JSON:", error);
        }
      };
      reader.readAsText(file);
    });
  }

  // Calculate Diff
  useEffect(() => {
    if (hasProcessedFollowers && hasProcessedFollowing) {
      setUserDifference(Compare(following, followers));
      setHasProcessedDifference(true);
    }
  }, [hasProcessedFollowers, hasProcessedFollowing, following, followers]);

  return (
    <div className="px-2 md:px-4 pt-5 pb-4 md:pt-10 flex flex-col min-h-screen">
      <main className="container mx-auto flex items-center flex-col gap-4 px-2 md:px-12 flex-grow">
        <h1 className="md:text-5xl text-3xl text-center">
          Curious Who Doesn&apos;t Follow You Back?
        </h1>

        {/* TODO: Refactor this conditional rendering into separate components to improve readability. For now, leaving it in-line to focus on styling and theming. */}
        {!hasProcessedDifference ? (
          <section className="flex flex-col container items-center gap-4">
            <h2 className="text-lg md:text-xl text-center">
              Safely see your non-followers using your official Instagram data. Your files are
              processed right here in your browser and are never uploaded anywhere.
            </h2>
            <Dropzone onDrop={onDrop} accept={{ "application/json": [".json"] }}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border-2 px-2 md:px-10 py-10 md:py-30 flex flex-col gap-4 md:gap-8 items-center justify-center w-full md:w-3/5 border-dashed rounded-3xl  mt-6 md:mt-12 text-lg hover:cursor-pointer"
                >
                  <input {...getInputProps()} data-testid="file-input"></input>
                  <Upload size={50}></Upload>
                  <p className="text-center whitespace-normal break-words">
                    Drag&nbsp;&amp;&nbsp;drop&nbsp;your<br />
                    <span className="bg-slate-100 text-sm font-mono mx-1 px-2 py-1 rounded break-all">
                      followers.json
                    </span>
                    &amp;
                    <span className="bg-slate-100 text-sm font-mono mx-1 px-2 py-1 rounded break-all">
                      following.json
                    </span><br />
                    files&nbsp;here
                  </p>
                  <span>or</span>
                  <button className="border-1 px-4 py-2 text-lg rounded-xl hover:cursor-pointer transition hover:scale-105">
                    Select Files
                  </button>
                </div>
              )}
            </Dropzone>
            <Link href="/tutorial" className="underline">
              {" "}
              Don&apos;t have your files? Here&apos;s how to get them.
            </Link>
          </section>
        ) : (
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
        )}
      </main>

      <a
        href="https://github.com/Eric-Zhang-Developer/follow-diff"
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-0 right-0 flex flex-row gap-2 hover:scale-110 transition self-center md:self-end mt-4 lg:mt-0"
      >
        Open Source & Privacy-First <Github></Github>
      </a>
    </div>
  );
}
