"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, MessageSquare, CheckCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { reveal } from "@/lib/animations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const services = ["Web Tasarım", "Sosyal Medya", "Kamera & Prodüksiyon", "Post Prodüksiyon", "Tüm Hizmetler"];

const inputBase = "w-full bg-transparent border-b border-neutral-200 py-4 px-0 text-black text-base placeholder:text-neutral-300 focus:outline-none focus:border-[#FF5A00] transition-colors duration-300";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Gerçek API entegrasyonu için buraya POST fetch eklenebilir
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    await new Promise(r => setTimeout(r, 900)); // Demo delay
    console.log("Form data:", form);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative z-10 bg-[#050505]">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-[55vh] flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.06)_0%,transparent_60%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="block text-[10px] font-mono uppercase tracking-[0.5em] text-[#FF5A00] mb-8">Bize Ulaşın</span>
          <h1 className="text-[56px] sm:text-[80px] md:text-[112px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase">
            Projeyi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Başlatalım.</span>
          </h1>
        </motion.div>
      </section>

      {/* ── FORM + BİLGİLER — beyaz section ─────── */}
      <section className="bg-white text-black rounded-t-[3rem] relative z-20 -mt-8 shadow-[0_-40px_80px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

            {/* Sol: İletişim Bilgileri */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9] mb-6">
                  İletişim<br />
                  <span className="text-[#FF5A00] italic">Kanalları.</span>
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed">
                  İzmit&apos;in kalbindeki stüdyomuzda sizi ağırlamaktan mutluluk duyarız. Dijital dünyayı bir kahve eşliğinde konuşalım.
                </p>
              </motion.div>

              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="space-y-6">
                {[
                  { icon: Mail, label: "E-posta", value: "hello@izmitsosyalmedya.com", href: "mailto:hello@izmitsosyalmedya.com" },
                  { icon: Phone, label: "Telefon", value: "+90 (532) 000 00 00", href: "tel:+905320000000" },
                  { icon: MapPin, label: "Adres", value: "Körfez Mah. İzmit / Kocaeli", href: "#" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-5 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-400">
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

              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="flex gap-3 pt-8 border-t border-neutral-100">
                {[
                  { icon: Instagram, href: "https://instagram.com/izmitsosyalmedia", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com/company/izmitsosyalmedya", label: "LinkedIn" },
                  { icon: MessageSquare, href: "https://wa.me/905320000000", label: "WhatsApp" },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-400">
                      <Icon size={18} />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* Sağ: Form */}
            <div className="lg:col-span-7">
              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                className="bg-neutral-50 rounded-[3rem] p-8 md:p-12 border border-neutral-100"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <CheckCircle size={56} className="text-[#FF5A00] mb-6" />
                    <h3 className="text-3xl font-bold tracking-tighter uppercase mb-4">Mesajınız Alındı!</h3>
                    <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
                      En kısa sürede size dönüş yapacağız. Teşekkür ederiz.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <h3 className="text-2xl font-bold tracking-tighter uppercase mb-8">Hızlı Teklif Formu</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">Ad Soyad *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Adınızı girin"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">E-posta *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="email@orneksite.com"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+90 5xx xxx xx xx"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">İlgilendiğiniz Hizmet</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputBase} cursor-pointer`}
                        >
                          <option value="">Seçiniz</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">Projenizden Bahsedin *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Projeniz hakkında kısa bir açıklama yapın..."
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full flex items-center justify-center gap-3 bg-black text-white py-5 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-[#FF5A00] disabled:opacity-60 transition-all duration-500"
                    >
                      {loading ? "Gönderiliyor..." : "Mesajı Gönder"}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP ──────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 bg-white border-t border-neutral-100">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-medium tracking-[-0.04em] uppercase leading-[0.9] mb-8">
            Zaman<br />
            <span className="text-[#FF5A00] italic font-medium">Değerlidir.</span>
          </h2>
          <p className="text-neutral-500 text-xl font-light mb-12 max-w-md mx-auto leading-relaxed">
            Form doldurmak istemiyorsanız doğrudan WhatsApp hattımızdan yazın.
          </p>
          <a
            href="https://wa.me/905320000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-green-200"
          >
            <MessageSquare size={22} />
            WhatsApp&apos;tan Yazın
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
