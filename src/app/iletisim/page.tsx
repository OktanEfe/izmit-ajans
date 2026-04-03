"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-[#050505] text-white selection:bg-rose-500 font-sans overflow-x-hidden">
      <Navbar />

      {/* 1. HERO - SİYAHI KIRAN ATMOSFERİK GİRİŞ */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f43f5e08_0%,transparent_65%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-rose-500 font-mono tracking-[0.4em] text-[10px] uppercase mb-6 block underline underline-offset-8">Bize Ulaşın</span>
          <h1 className="text-7xl md:text-[130px] font-bold tracking-tighter leading-none mb-8 uppercase">
            BİRLİKTE <br /> <span className="text-neutral-700 outline-text italic">BAŞLAYALIM.</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Fikirleriniz, bizim vizyonumuzla birleştiğinde dijital bir başyapıta dönüşür. Stüdyomuza davetlisiniz.
          </p>
        </motion.div>
      </section>

      {/* 2. İLETİŞİM KARTLARI VE FORM (ÜST ÜSTE BİNEN KATMANLAR) */}
      <section className="py-20 bg-white text-black rounded-t-[60px] relative z-20 -mt-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sol Kolon: Bilgiler */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8 uppercase italic leading-none">İLETİŞİM <br /> <span className="text-rose-500">KANALLARI.</span></h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed">İzmit’in kalbindeki stüdyomuzda sizi ağırlamaktan mutluluk duyarız. Dijital dünyayı bir kahve eşliğinde konuşalım.</p>
            </div>

            <div className="space-y-8">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">E-posta</p>
                  <p className="text-xl font-bold">hello@izmitajans.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">Telefon</p>
                  <p className="text-xl font-bold">+90 (532) 000 00 00</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">Adres</p>
                  <p className="text-xl font-bold">Körfez Mah. İzmit / Kocaeli</p>
                </div>
              </motion.div>
            </div>

            {/* Sosyal Medya İkonları */}
            <div className="flex gap-4 pt-10 border-t border-neutral-100">
              <a href="#" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><MessageSquare size={20} /></a>
            </div>
          </div>

          {/* Sağ Kolon: Form */}
          <div className="lg:col-span-7 bg-neutral-50 p-8 md:p-16 rounded-[4rem] border border-neutral-100">
            <h3 className="text-3xl font-bold mb-10 tracking-tighter uppercase italic">HIZLI TEKLİF FORMU</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Adınız ve Soyadınız" 
                  className="w-full bg-white border border-neutral-200 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all placeholder:text-neutral-300"
                />
                <input 
                  type="email" 
                  placeholder="E-posta Adresiniz" 
                  className="w-full bg-white border border-neutral-200 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all placeholder:text-neutral-300"
                />
              </div>
              <input 
                type="text" 
                placeholder="Hangi hizmetle ilgileniyorsunuz?" 
                className="w-full bg-white border border-neutral-200 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all placeholder:text-neutral-300"
              />
              <textarea 
                rows={5} 
                placeholder="Projenizden kısaca bahsedin..." 
                className="w-full bg-white border border-neutral-200 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all placeholder:text-neutral-300 resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-6 rounded-full font-bold text-lg hover:bg-rose-500 transition-all flex items-center justify-center gap-3 group"
              >
                GÖNDER <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. BÖLÜM: WHATSAPP QUICK ACCESS */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 border-t border-neutral-100 pt-32">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-10 uppercase italic">ZAMAN <br /> <span className="text-rose-500">DEĞERLİDİR.</span></h2>
          <p className="text-neutral-500 text-xl mb-12 font-light">Form doldurmak istemiyor musunuz? Doğrudan WhatsApp hattımız üzerinden uzmanımızla iletişime geçin.</p>
          <a href="https://wa.me/905320000000" target="_blank" className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-2xl">
            WhatsApp&apos;tan Yazın <ArrowRight size={24} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}