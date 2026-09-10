"use client";

import { useState, useRef, useEffect } from "react";

export default function VideoFeature() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section className="w-full px-4 bg-[#E2E0D1] pb-10 pt-6 sm:px-6 md:px-8 lg:pt-10">
      <div
        ref={containerRef}
        className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-3xl sm:rounded-[1.75rem]"
        data-aos="zoom-in-up"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/vid-1.mp4"
          playsInline
          muted
          preload="metadata"
          controls={isPlaying}
          onEnded={handleEnded}
        />
      </div>
    </section>
  );
}
