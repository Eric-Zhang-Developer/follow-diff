"use client";

import { useEffect, useState } from "react";
import { FollowerListSchema, FollowingListSchema } from "@/lib/types";
import { Github } from "lucide-react";
import ExtractNamesFromJson from "@/lib/extractNamesFromJson";
import Compare from "@/lib/comparison";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
export default function Home() {
  const [followers, setFollowers] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [userDifference, setUserDifference] = useState<string[]>([]);

  const [hasProcessedFollowers, setHasProcessedFollowers] = useState(false);
  const [hasProcessedFollowing, setHasProcessedFollowing] = useState(false);
  const [hasProcessedDifference, setHasProcessedDifference] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  // This function exists to compete the user life cycle on the page
  function handleReset() {
    setHasProcessedFollowers(false);
    setHasProcessedDifference(false);
    setHasProcessedFollowing(false);
    setFollowers([]);
    setFollowing([]);
    setUserDifference([]);
  }

  // Helper function for onDrop
  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.onabort = () => reject(new Error("File reading was aborted."));
      reader.readAsText(file);
    });
  };

  // On Drop reads files then checks them against the schemas and throws an error if broke
  // Extremely Robust for wrong json
  async function onDrop(acceptedFiles: File[]) {
    let foundAtLeastOneValidFile = false;

    for (const file of acceptedFiles) {
      try {
        const fileContent = await readFileAsText(file);

        const input = JSON.parse(fileContent);

        const followingResult = FollowingListSchema.safeParse(input);
        if (followingResult.success) {
          setFollowing(
            ExtractNamesFromJson(followingResult.data.relationships_following),
          );
          setHasProcessedFollowing(true);
          foundAtLeastOneValidFile = true;
          continue;
        }

        const followerResult = FollowerListSchema.safeParse(input);
        if (followerResult.success) {
          setFollowers(ExtractNamesFromJson(followerResult.data));
          setHasProcessedFollowers(true);
          foundAtLeastOneValidFile = true;
          continue;
        }
      } catch {
        /* The file failed to parse, which is fine. We do nothing and let the loop continue */
      }
    }

    if (!foundAtLeastOneValidFile) {
      setErrorFlag(true);
    }
  }

  // Calculate Diff
  useEffect(() => {
    if (hasProcessedFollowers && hasProcessedFollowing) {
      setUserDifference(Compare(following, followers));
      setHasProcessedDifference(true);
    }
  }, [hasProcessedFollowers, hasProcessedFollowing, following, followers]);

  return (
    <div className="font-text flex min-h-screen flex-col px-2 pt-5 pb-4 md:px-4 md:pt-10">
      <main className="container mx-auto flex flex-grow flex-col items-center gap-4 px-2 md:px-12">
        <h1 className="text-primary font-main text-center text-3xl md:text-5xl">
          Curious Who Doesn&apos;t Follow You Back?
        </h1>

        {!hasProcessedDifference ? (
          <HeroSection
            onDrop={onDrop}
            errorFlag={errorFlag}
            setErrorFlag={setErrorFlag}
            hasProcessedFollowers={hasProcessedFollowers}
            hasProcessedFollowing={hasProcessedFollowing}
          ></HeroSection>
        ) : (
          <ResultsSection
            handleReset={handleReset}
            userDifference={userDifference}
          ></ResultsSection>
        )}
      </main>

      {/* Disclaimer Footer */}
      <a
        href="https://github.com/Eric-Zhang-Developer/follow-diff"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary right-0 bottom-0 mt-4 flex flex-row gap-2 self-center transition hover:scale-110 md:self-end lg:mt-0"
      >
        Open Source & Privacy-First <Github></Github>
      </a>
    </div>
  );
}
