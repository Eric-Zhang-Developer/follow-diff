"use client"

import Link from "next/link";


export default function Home() {
  return (
    <div className="mx-auto container p-2">
      <header className="text-3xl text-center mb-8">FollowDiff</header>
      <main className="flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl">Curious Who Doesn&apos;t Follow You Back?</h1>
        <h2 className="text-xl text-center">Safely see your non-followers using your official Instagram data. Your files are processed right here in your browser and are never uploaded anywhere.</h2>
        {/* Drop Zone */}
        <div className="border-2 px-1/2 py-40 flex flex-col gap-8 items-center justify-center w-1/2">
          Drag & drop your followers.json & following.json files here
          <span>or</span>
          <button className="border-1 p-2">Select Files</button>
        </div>
        <Link href="/tutorial" className="underline"> Don&apos;t have your files? Here&apos;s how to get them.</Link>
      </main>
      <footer className="fixed bottom-0 right-0 p-4">
        Open Source & Privacy-First 
      </footer>
    </div>
  );
}
  