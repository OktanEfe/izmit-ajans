"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Crosshair, Play, X } from "lucide-react";

interface ShowcaseData {
  tag: string;
  title: string;
  img: string;
  videoSrc?: string;
}

const showcases: ShowcaseData[] = [
  {
    tag: "Reklam Filmi",
    title: "Markanızın En Güçlü\nSahnesi",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000",
    videoSrc: "",
  },
  {
    tag: "Drone Görüntüleme",
    title: "Yukarıdan\nBakış Açısı",
    img: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=2000",
    videoSrc: "",
  },
  {
    tag: "Kurumsal Prodüksiyon",
    title: "Hikaye\nAnlatıcılığı",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000",
    videoSrc: "",
  },
];

function VideoModal({ item, onClose }: { item: ShowcaseData; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          key="modal-content"
          className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.88, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {item.videoSrc ? (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              poster={item.img}
              src={item.videoSrc}
            />
          ) : (
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})`, filter: "brightness(0.5)" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
                  Video Yakında Eklenecek
                </span>
                <span className="flex items-center gap-2 text-[#FF5A00] text-[9px] tracking-[0.4em] font-mono uppercase">
                  <Crosshair size={10} /> {item.tag}
                </span>
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            aria-label="Kapat"
          >
            <X size={16} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ShowcaseItem({
  item,
  index,
  onPlay,
}: {
  item: ShowcaseData;
  index: number;
  onPlay: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const width = useTransform(scrollYProgress, [0, 0.35], ["80%", "100%"]);
  const scale = useTransform(scrollYProgress, [0.35, 0.7], [1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={ref} className="h-[110vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, scale, opacity }}
          className="h-[80vh] md:h-screen relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})`, filter: "brightness(0.45)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={onPlay}
              aria-label="Videoyu oynat"
              className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/20 transition-all duration-500 group"
            >
              <Play fill="white" size={22} className="ml-1 text-white group-hover:text-[#FF5A00] transition-colors" />
            </button>
          </div>

          <div className="absolute bottom-12 left-8 md:left-16 z-30">
            <span className="flex items-center gap-2 text-[#FF5A00] text-[9px] tracking-[0.4em] font-mono uppercase mb-4">
              <Crosshair size={12} /> {item.tag} — {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9] whitespace-pre-line">
              {item.title}
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div>
        {showcases.map((item, i) => (
          <ShowcaseItem
            key={i}
            item={item}
            index={i}
            onPlay={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <VideoModal
            item={showcases[activeIndex]}
            onClose={() => setActiveIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
