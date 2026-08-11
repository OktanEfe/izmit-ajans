"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { reveal } from "@/lib/animations";

const faq = [
  { q: "Proje süresi ne kadar?", a: "Kapsama göre 2–8 hafta. Web projeleri 2–4 hafta, prodüksiyon projeleri 1–2 hafta, sosyal medya yönetimi aylık sözleşmeyle çalışır." },
  { q: "Fiyatlandırma nasıl?", a: "Her proje özel analiz gerektirir. Ücretsiz keşif görüşmemizde ihtiyaçlarınızı dinleyip size özel teklif sunuyoruz." },
  { q: "Tüm hizmetleri birlikte alabilir miyim?", a: "Evet — tam kapsamlı dijital pakette web, sosyal medya ve prodüksiyonu birlikte alanlara özel kampanya fiyatları uygulanır." },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-neutral-500 block mb-4">Şeffaflık</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
            Sıkça<br />
            <span className="text-[#FF5A00] italic">Sorulanlar.</span>
          </h2>
        </motion.div>
        <div className="divide-y divide-white/[0.06]">
          {faq.map((item, i) => (
            <motion.div key={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} transition={{ delay: i * 0.08 }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left gap-4 group"
              >
                <span className="text-lg md:text-xl font-medium text-white">{item.q}</span>
                <motion.div
                  animate={{ rotate: openFaq === i ? 45 : 0 }}
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:border-[#FF5A00] group-hover:text-[#FF5A00] transition-all"
                >
                  <Plus size={14} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-white/80 text-base font-light leading-relaxed">{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
