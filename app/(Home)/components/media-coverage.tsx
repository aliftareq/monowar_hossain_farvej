"use client";

import Image from "next/image";
import { useState } from "react";

type CoverageVideo = {
  id: string;
  title: string;
  duration: string;
};

const coverageVideos: CoverageVideo[] = [
  {
    id: "iqlUY4KP9Kc",
    title: "লক্ষ্মীপুর-১ (রামগঞ্জ) আসনের নির্বাচনী জনমত",
    duration: "ভিডিও",
  },
  {
    id: "5mRjfX6C9oQ",
    title: "লক্ষ্মীপুর-১ আসনে নির্বাচনী প্রচারণা",
    duration: "ভিডিও",
  },
  {
    id: "GysCfEbbwMQ",
    title: "লক্ষ্মীপুরে বিএনপির গণসংযোগ ও লিফলেট বিতরণ",
    duration: "ভিডিও",
  },
];

function youtubeThumbnail(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export default function MediaCoverage() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const video = coverageVideos[selectedVideo];

  return (
    <section
      aria-labelledby="media-coverage-heading"
      className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="info-container">
        <h2
          id="media-coverage-heading"
          className="mb-7 text-center text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
        >
          মিডিয়া কাভারেজ
        </h2>

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:gap-6">
          {/* Video playlist */}
          <div className="min-w-0">
            <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-semibold text-primary">Playlist</h3>
              <span className="text-sm text-gray-600">
                {coverageVideos.length} Videos
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {coverageVideos.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedVideo(index);
                    setIsPlaying(true);
                  }}
                  aria-pressed={selectedVideo === index}
                  className={`flex w-full min-w-0 items-center gap-2 p-2 text-left transition-colors ${
                    selectedVideo === index
                      ? "bg-gray-100"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-sm sm:w-28">
                    <Image
                      src={youtubeThumbnail(item.id)}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover"
                    />

                    <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
                      ▶
                    </span>
                  </div>

                  <span
                    className={`min-w-0 flex-1 text-sm leading-6 ${
                      selectedVideo === index
                        ? "text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="line-clamp-2">{item.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main YouTube player */}
          <div className="min-w-0 overflow-hidden border border-gray-200 bg-black">
            <div className="relative aspect-video w-full">
              {isPlaying ? (
                <iframe
                  key={video.id}
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label={`${video.title} ভিডিও চালান`}
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <Image
                    src={youtubeThumbnail(video.id)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                  />

                  <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                    <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-primary transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 size-7"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>

            <div className="bg-white px-4 py-3">
              <h3 className="line-clamp-2 text-base font-semibold text-gray-800 sm:text-lg">
                {video.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
