"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { reveal } from "@/lib/animations";

const contactItems = [
  { icon: Mail, label: "E-posta", value: "info@izmitsosyalmedya.com", href: "mailto:info@izmitsosyalmedya.com" },
  { icon: Phone, label: "Telefon", value: "0552 666 03 06", href: "tel:+905526660306" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/izmitsosyalmedia", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/izmitsosyalmedya", label: "LinkedIn" },
  { icon: MessageSquare, href: "https://wa.me/905526660306", label: "WhatsApp" },
];

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-12">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}>
        <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] uppercase leading-[0.9] mb-6">
          İletişim<br />
          <span className="text-[#FF5A00] italic">Kanalları.</span>
        </h2>
        <p className="text-white font-light leading-relaxed">
          İzmit&apos;in kalbindeki stüdyomuzda sizi ağırlamaktan mutluluk duyarız. Dijital dünyayı bir kahve eşliğinde konuşalım.
        </p>
      </motion.div>

      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="space-y-6">
        {contactItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ x: 8 }}
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-300">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 mb-0.5">{item.label}</p>
                <p className="font-semibold text-lg">{item.value}</p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="flex gap-3 pt-8 border-t border-neutral-100">
        {socialLinks.map((s, i) => {
          const Icon = s.icon;
          return (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <Icon size={18} />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
