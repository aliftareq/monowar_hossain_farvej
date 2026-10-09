"use client";

import Image from "next/image";
import { useState } from "react";

import { ourAimContent } from "@/data/our-aim";

function youtubeThumbnail(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function OurAimSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="our-aim-heading"
      className="bg-muted py-16 md:py-24"
    >
      <div className="info-container">
        <h2
          id="our-aim-heading"
          className="text-center text-3xl font-bold tracking-tight text-primary md:text-4xl"
        >
          {ourAimContent.heading}
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ourAimContent.videos.map((video) => (
            <li
              key={video.id}
              className="group relative aspect-3/5 overflow-hidden rounded-md bg-secondary shadow-sm"
            >
              {activeVideo === video.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideo(video.youtubeId)}
                  className="relative block h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`${video.title} ভিডিও চালান`}
                >
                  <Image
                    src={youtubeThumbnail(video.youtubeId)}
                    alt={video.title}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover"
                  />

                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
                    <span className="flex size-12 items-center justify-center rounded-full bg-black/65 text-white transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 size-6"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
