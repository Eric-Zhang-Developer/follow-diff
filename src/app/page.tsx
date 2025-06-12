"use client"

import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="text-2xl text-center">FollowDiff</header>
      <main className="flex items-center justify-center flex-col gap-4">
        <h1>Curious Who Doesn&apos;t Follow You Back</h1>
        <h2>Safely see your non-followers using your official Instagram data. Your files are processed right here in your browser and are never uploaded anywhere.</h2>
        {/* Drop Zone */}
        <div className="border-2 px-40 py-40">
          Drop Zone
        </div>
        <Link href="/tutorial" className="underline"> Don&apos;t have your files? Here&apos;s how to get them.</Link>
      </main>
      <footer className="fixed bottom-0 right-0 p-4">
        Open Source & Privacy-First 
      </footer>
    </>
  );
}
  