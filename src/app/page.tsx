"use client";

import { Github, Upload } from "lucide-react";
import Link from "next/link";
import Dropzone from "react-dropzone";
export default function Home() {

  function onDrop(acceptedFiles: File[]){
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
  
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file content
        const content = reader.result as string;
        try {
          console.log(content);
        } catch (error) {
          console.log(error);
        }
      };
      reader.readAsText(file); 
    });
  };

  return (
    <div className="mx-auto container p-10">
      <main className="flex items-center justify-center flex-col gap-4 px-12">
        <h1 className="text-5xl">Curious Who Doesn&apos;t Follow You Back?</h1>
        <h2 className="text-xl text-center">
          Safely see your non-followers using your official Instagram data. Your files are processed
          right here in your browser and are never uploaded anywhere.
        </h2>

        {/* Drop Zone */}
        <Dropzone onDrop={onDrop} accept={{ 'application/json': ['.json'] }}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-2 px-1/2 py-30 flex flex-col gap-8 items-center justify-center w-1/2 border-dashed rounded-3xl mt-12 text-lg hover:cursor-pointer"
            >
              <input {...getInputProps()}></input>
              <Upload size={50}></Upload>
              Drag & drop your followers.json & following.json files here
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
      </main>

      <a
        href="https://github.com/Eric-Zhang-Developer/follow-diff"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0 p-5 flex flex-row gap-2 hover:scale-110 transition"
      >
        Open Source & Privacy-First <Github></Github>
      </a>
    </div>
  );
}
