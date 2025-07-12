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
          <h2 className="font-main text-2xl">Step 1</h2>
          <ol className="list-decimal space-y-2 pl-6 text-lg">
            <li>Open Instagram on your mobile device or web browser</li>
            <li>Go to your profile and tap the menu icon (three lines)</li>
            <li>Select Settings and Privacy</li>
            <li>Scroll down and tap Download your information</li>
            <li>Select Request a download</li>
            <li>Choose JSON as the format</li>
            <li>Select Followers and following at minimum</li>
            <li>Submit your request</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="font-main text-2xl">Step 2</h2>
          <p className="text-lg">
            Instagram will process your request, which can take up to 48 hours.
            You&apos;ll receive a notification and email when your data is ready
            to download.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-main text-2xl">Step 3</h2>
          <ol className="list-decimal space-y-2 pl-6 text-lg">
            <li>
              Once notified, go back to Settings and privacy → Download your
              information
            </li>
            <li>Download your data package</li>
            <li>Unzip the downloaded file</li>
            <li>Navigate to the followers_and_following folder</li>
            <li>Find the followers.json and following.json files</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
