"use client";

import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoFeature() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => setCurrentTime(v.currentTime);
    const onLoaded = () => setDuration(v.duration || 0);
    const onDurationChange = () => setDuration(v.duration || 0);

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("durationchange", onDurationChange);

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("durationchange", onDurationChange);
    };
  }, []);

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

  const handleMuteToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const next = Number(e.target.value);
    v.currentTime = next;
    setCurrentTime(next);
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="w-full px-4 bg-[#E2E0D1] pb-10 pt-6 sm:px-6 md:px-8 lg:pt-10">
      <div className="mx-auto max-w-5xl" data-aos="zoom-in-up">
        <div className="relative aspect-video overflow-hidden rounded-3xl sm:rounded-[1.75rem]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/printa.mp4"
            playsInline
            preload="metadata"
            onEnded={handleEnded}
          />
        </div>

        {/* Custom controls — outside the video */}
        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-neutral-950/90 px-3 py-2.5 text-white shadow-lg sm:gap-4 sm:px-4 sm:py-3">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-950 transition hover:bg-neutral-100 sm:size-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <FaPause className="size-3.5 sm:size-4" />
            ) : (
              <FaPlay className="size-3.5 sm:size-4" />
            )}
          </button>

          <span className="shrink-0 text-xs tabular-nums text-white/90 sm:text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="relative min-w-0 flex-1">
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-[#D4AF37] [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4AF37]"
              style={{
                background: `linear-gradient(to right, #D4AF37 ${progress}%, rgba(255,255,255,0.25) ${progress}%)`,
              }}
              aria-label="Seek video"
            />
          </div>

          <button
            type="button"
            onClick={handleMuteToggle}
            className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition hover:bg-white/10 sm:size-10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <FaVolumeMute className="size-4 sm:size-4.5" />
            ) : (
              <FaVolumeUp className="size-4 sm:size-4.5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
