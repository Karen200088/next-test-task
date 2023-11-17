"use client";

import React, { useState, ChangeEvent, DragEvent, FC } from "react";

export const ImageUpload: FC = () => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    setDragOver(false);

    const droppedFiles = Array.from(event.dataTransfer.files) as File[];
    setFiles([...files, ...droppedFiles]);
    handleFiles(droppedFiles);
  };

  const handleFiles = (files: File[]) => {
    const promises = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        setLoading(true);
        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (event.target?.result) {
            resolve(event.target?.result as string);
            setLoading(false);
          } else {
            setUploadStatus("Upload failed. Please try again.");
            setLoading(false);
          }
        };

        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then(() => {
      setUploadStatus("Upload complete!");
    });
  };

  return (
    <div
      className={`upload-container border border-gray-500 border-dashed rounded-md text-center ${
        dragOver ? "drag-over" : ""
      }`}
    >
      <div
        onDragOver={allowDrop}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className="drop-area p-5 flex flex-col items-center cursor-pointer"
      >
        <p className={"cursor-pointer text-xl font-semibold"}>Drag and drop</p>
        <input
          className="cursor-pointer"
          type="file"
          id="file-input"
          accept="image/*"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleFiles(Array.from(event.target.files || []) as File[])
          }
        />
      </div>
      <div className="upload-status my-5 text-green-500 text-lg font-bold ">
        {uploadStatus}
        {loading && "Loading..."}
      </div>
    </div>
  );
};
