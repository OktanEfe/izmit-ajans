"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-white text-black rounded-t-[3rem] relative z-20 -mt-8 shadow-[0_-40px_80px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
