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
            <li>
              Select <strong>Accounts Center</strong>
            </li>
            <li>
              Scroll down to <strong>Account settings</strong> and tap{" "}
              <strong>Your information and permissions</strong>
            </li>
            <li>
              Select <strong>Download your information</strong>
            </li>
            <li>
              Tap the <strong>Download or transfer information</strong> button
            </li>
            <li>
              Select the <strong>Some of your information</strong> button
            </li>
            <li>
              Scroll down to the <strong>Connections</strong> section and select{" "}
              <strong>Followers and following</strong>
            </li>
            <li>
              Select the <strong>Download to device</strong> option
            </li>
            <li>
              Select the <strong>JSON</strong> file option in <strong>Format</strong>
            </li>
            <li>
              In <strong>Date range</strong>, select <strong>All time</strong>
            </li>
            <li>
              Tap <strong>Create files</strong> to request your information
            </li>
          </ol>
        </section>
        <section className="bg-light-accent border-accent space-y-2 rounded-3xl border-1 px-4 py-6 shadow-md">
          <p className="font-main text-2xl font-semibold">
            ⚠️ Critical step
          </p>
          <p className="text-secondary text-lg">
            You must select the <strong>JSON</strong> format and <strong>All Time</strong> date range or the app will not work properly
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-main text-2xl font-semibold">Step 2</h2>
          <p className="text-secondary text-lg">
            Instagram will now process your request. While their official notice
            says this can take up to 48 hours, it&apos;s usually ready in about
            <strong> 15 minutes</strong>. You&apos;ll receive an email and a
            notification from Instagram when your data is ready to download.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-main text-2xl font-semibold">Step 3</h2>
          <ol className="text-secondary list-decimal space-y-2 pl-6 text-lg">
            <li>
              Once notified, go back to{" "}
              <strong>
                Accounts Center → Your information and permissions → Download
                your information{" "}
              </strong>
            </li>
            <li>Under <strong>Available downloads</strong>, download your data package</li>
            <li>Unzip the downloaded file</li>
            <li>
              There should be a
              <span className="mx-1 rounded-lg bg-slate-100 px-2 py-1 font-mono text-sm break-all">
                followers_1.json
              </span>
              and
              <span className="mx-1 rounded-lg bg-slate-100 px-2 py-1 font-mono text-sm break-all">
                following.json
              </span>
              , those are your files
            </li>
          </ol>
        </section>

        <section className="bg-light-accent border-accent space-y-2 rounded-3xl border-1 px-4 py-6 shadow-md">
          <p className="font-main text-2xl font-semibold">
            Pro Tip - Finding Your Files
          </p>
          <p className="text-secondary text-lg">
            When you go back to upload, your device&apos;s file browser will
            open. The folder you just unzipped can be tricky to find.
          </p>
          <p className="text-secondary text-lg">
            The easiest way to locate it is to use the search bar and type{" "}
            <strong>followers_and_following</strong>. This will take you
            directly to the folder containing the files required
          </p>
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
