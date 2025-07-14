import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Tutorial() {
  return (
    <div className="font-text text-primary flex min-h-screen flex-col px-2 pt-5 pb-4 md:px-4 md:pt-10">
      <main className="container mx-auto flex flex-grow flex-col items-start gap-8 px-2 md:px-24">
        <Link
          href="/"
          className="text-secondary inline-flex items-center space-x-1 self-start py-2 pr-3 text-lg transition hover:scale-105"
        >
          <ArrowLeft></ArrowLeft>
          <p>Go Back</p>
        </Link>

        <h1 className="font-main text-3xl md:text-5xl">
          How to Get Your Instagram Data Files
        </h1>

        <section className="space-y-4">
          <h2 className="font-main text-2xl font-semibold">Step 1</h2>
          <ol className="text-secondary list-decimal space-y-2 pl-6 text-lg">
            <li>Open Instagram on your mobile device or web browser</li>
            <li>Go to your profile and tap the menu icon (three lines)</li>
            <li>Select Accounts Center</li>
            <li>
              Scroll down to Account settings and tap Your information and
              permissions
            </li>
            <li>Select Download your information</li>
            <li>Tap the Download or transform information button</li>
            <li>Select the Some of your information button</li>
            <li>
              Scroll down to the Connections section and select Followers and
              following
            </li>
            <li>Select the Download to device option</li>
            <li>Select the JSON file option in Format</li>
            <li>Tap Create files to request your information</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="font-main text-2xl font-semibold">Step 2</h2>
          <p className="text-secondary text-lg">
            Instagram will process your request, which can take up to 48 hours.
            You&apos;ll receive a notification and email when your data is ready
            to download.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-main text-2xl font-semibold">Step 3</h2>
          <ol className="text-secondary list-decimal space-y-2 pl-6 text-lg">
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

        <section className="bg-light-accent border-accent space-y-2 rounded-3xl border-1 px-4 py-6 shadow-md">
          <p className="font-main text-2xl font-semibold">Privacy Note</p>
          <p className="text-secondary text-lg">
            Remember, this application processes these files entirely in your
            browser. Your data is never uploaded to any server or stored
            anywhere else.
          </p>
        </section>

        <Link
          href="/"
          className="text-accent bg-light-accent self-center rounded-2xl border-1 px-5 py-3 text-lg shadow-sm transition hover:scale-105 hover:cursor-pointer sm:self-auto"
        >
          Return to Home
        </Link>
      </main>
    </div>
  );
}
