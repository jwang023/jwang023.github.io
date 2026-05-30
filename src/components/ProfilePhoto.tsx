"use client";

import { ImageUp, RotateCcw } from "lucide-react";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

export function ProfilePhoto() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(URL.createObjectURL(file));
  };

  const resetPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="aspect-[4/5] overflow-hidden rounded-md border border-line bg-paper">
        <img
          src={previewUrl ?? profile.portraitUrl}
          alt={profile.portraitAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-md bg-ink px-3 py-2 text-sm font-semibold text-white transition hover:bg-signal"
        >
          <ImageUp aria-hidden size={16} />
          Choose photo
        </button>
        {previewUrl ? (
          <button
            type="button"
            onClick={resetPreview}
            className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
          >
            <RotateCcw aria-hidden size={16} />
            Reset
          </button>
        ) : null}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
      />
    </div>
  );
}
