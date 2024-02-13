import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { LuX } from "react-icons/lu";
import { UploadFileResponse } from "uploadthing/client";

import "@uploadthing/react/styles.css";
import { FileIcon } from "lucide-react";

interface FileUploadProps {
  endpoint: "serverImage" | "messageFile";
  value: string;
  onChange: (url?: string) => void;
}

export function FileUpload({ endpoint, value, onChange }: FileUploadProps) {
  const fileType = value.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-28 w-28 mt-1">
        <Image
          fill
          sizes="inherit"
          src={value}
          alt="Uploaded Image"
          className="rounded-full"
        />
        <button
          title={"remove"}
          type="button"
          onClick={() => onChange("")}
          className="p-1 rounded-full bg-rose-600 text-white absolute top-0 right-0 shadow-sm"
        >
          <LuX className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          title={"remove"}
          type="button"
          onClick={() => onChange("")}
          className="p-1 rounded-full bg-rose-600 text-white absolute -top-2 -right-2 shadow-sm"
        >
          <LuX className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res: UploadFileResponse[] | undefined) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.error(error);
      }}
      appearance={{
        container:
          "w-max py-3 flex flex-col rounded-md border-2 border-indigo-300 bg-white",
        uploadIcon: "text-indigo-500 h-20 w-20 shrink-0",
        label:
          "text-indigo-500 mt-[-2px]  hover:text-indigo-500 hover:underline hover:underline-offset-4",
        allowedContent:
          "flex h-10 items-center mb-[-6px] justify-center px-2 text-black font-bold",
        button:
          "w-full h-8 mb-4 rounded-md text-white bg-gradient-to-br from-sky-600 to-purple-600 border-none",
      }}
      content={{
        button({ ready, isUploading, fileTypes }) {
          if (isUploading) return "Uploading...";
          if (ready) return "Click to Upload";
          return `Allowed to upload: ${fileTypes.join(", ")}`;
        },
      }}
    />
  );
}
