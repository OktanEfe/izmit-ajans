"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
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

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Bir hata oluştu. Lütfen tekrar deneyin.");
        return;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-7">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
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
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Adınızı girin" className={inputBase} />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">E-posta *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@orneksite.com" className={inputBase} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">Telefon</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+90 5xx xxx xx xx" className={inputBase} />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">İlgilendiğiniz Hizmet</label>
                <select name="service" value={form.service} onChange={handleChange} className={`${inputBase} cursor-pointer`}>
                  <option value="">Seçiniz</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 block mb-2">Projenizden Bahsedin *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Projeniz hakkında kısa bir açıklama yapın..." className={`${inputBase} resize-none`} />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-red-600 text-sm font-medium"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}

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
  );
}
