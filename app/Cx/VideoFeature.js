"use client";

import { FaPlay } from "react-icons/fa";
import { useState, useRef } from "react";

export default function VideoFeature() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleToggle = () => {
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
      return;
    }

    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section className="w-full px-4 bg-[#E2E0D1] pb-10 pt-6 sm:px-6 md:px-8 lg:pt-10">
      <div
        className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-3xl sm:rounded-[1.75rem]"
        data-aos="zoom-in-up"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/printa.mp4"
          playsInline
          preload="metadata"
          onEnded={handleEnded}
          onClick={handleToggle}
        />

        {!isPlaying && (
          <>
            <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
              <button
                type="button"
                onClick={handleToggle}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-normal text-neutral-900 shadow-lg transition duration-200 ease-out hover:scale-105 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-8 sm:py-3.5 sm:text-base"
                aria-label="Play video"
              >
                <FaPlay className="size-3.5 shrink-0 text-red-600 sm:size-4" />
                Play video
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
