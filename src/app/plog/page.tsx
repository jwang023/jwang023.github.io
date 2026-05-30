import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Plog",
  description: `Photo log for ${profile.name}`,
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const videoExtensions = new Set([".mp4"]);

type PlogMedia = {
  src: string;
  alt: string;
  title: string;
  type: "image" | "video";
};

function getPlogMedia(): PlogMedia[] {
  const plogDirectory = path.join(process.cwd(), "public", "plog");

  if (!fs.existsSync(plogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(plogDirectory)
    .filter((fileName) => {
      const filePath = path.join(plogDirectory, fileName);
      const extension = path.extname(fileName).toLowerCase();
      return (
        fs.statSync(filePath).isFile() &&
        (imageExtensions.has(extension) || videoExtensions.has(extension))
      );
    })
    .sort((first, second) => first.localeCompare(second))
    .map((fileName) => {
      const extension = path.extname(fileName).toLowerCase();
      const title = path
        .basename(fileName, path.extname(fileName))
        .replace(/[-_]+/g, " ");

      return {
        src: `/plog/${encodeURIComponent(fileName)}`,
        alt: title,
        title,
        type: videoExtensions.has(extension) ? "video" : "image",
      };
    });
}

export default function PlogPage() {
  const media = getPlogMedia();

  return (
    <section className="bg-paper">
      <Container className="py-16 lg:py-20">
        <SectionHeader
          eyebrow="Plog"
          title="Plog"
          description="A quiet photo log for selected photos and short videos."
        />
        {media.length > 0 ? (
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {media.map((item) => (
              <figure
                key={item.src}
                className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-line bg-white shadow-sm"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    preload="metadata"
                    className="w-full bg-ink"
                    aria-label={item.title}
                  />
                )}
                <figcaption className="border-t border-line px-4 py-3 text-sm font-medium text-muted">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-lg border border-dashed border-line bg-white p-8 text-sm leading-7 text-muted">
            Photos and videos will appear here soon.
          </div>
        )}
      </Container>
    </section>
  );
}
