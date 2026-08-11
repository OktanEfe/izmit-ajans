"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoItem {
  src: string;
  label: string;
}

const videos: VideoItem[] = [
  { src: "/videos/websitevideo1.mp4",        label: "Prodüksiyon" },
  { src: "/videos/website drone.mp4",         label: "Drone Çekim" },
  { src: "/videos/website foto video.mp4",    label: "Fotoğraf & Video" },
];

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <motion.div
      key="modal-backdrop"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        key="modal-content"
        className="relative w-full max-w-[min(380px,90vw)] rounded-2xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: "9/16" }}
        initial={{ scale: 0.88, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 40 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video only mounts when modal is open (lazy mount = Görev 6) */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black"
          controls
          autoPlay
          playsInline
          src={video.src}
        />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
          aria-label="Kapat"
        >
          <X size={15} />
        </button>
      </motion.div>
    </motion.div>
  );
}

function VideoCard({
  video,
  index,
  onOpen,
}: {
  video: VideoItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
      transition={{ delay: index * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer rounded-xl overflow-hidden border border-white/[0.07] hover:border-[#FF5A00]/40 transition-colors duration-500"
      style={{ aspectRatio: "9/16" }}
      onClick={onOpen}
    >
      {/* Poster-only video — does not preload media (Görev 6) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        preload="none"
        playsInline
        muted
        tabIndex={-1}
        src={video.src}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
          <Play fill="white" size={18} className="ml-0.5 text-white group-hover:text-[#FF5A00] transition-colors" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-[#FF5A00] block mb-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="text-white text-sm font-medium tracking-tight">{video.label}</p>
      </div>
    </motion.div>
  );
}

export default function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = useCallback((i: number) => setActiveIndex(i), []);
  const handleClose = useCallback(() => setActiveIndex(null), []);

  return (
    <section className="py-24 md:py-36 px-6 bg-transparent relative z-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.06]"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] uppercase leading-[0.9] text-white">
            Çekimlerimizden<br />
            <span className="text-[#FF5A00] italic font-medium">Kareler.</span>
          </h2>
          <p className="text-neutral-500 text-sm font-light max-w-xs leading-relaxed">
            Her karenin arkasında bir hikaye, her sahnenin ardında bir his var.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} video={v} index={i} onOpen={() => handleOpen(i)} />
          ))}
        </div>
      </div>

      {/* Modal mounts only when a video is selected — lazy DOM (Görev 6) */}
      <AnimatePresence>
        {activeIndex !== null && (
          <VideoModal video={videos[activeIndex]} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}