"use client";

import React from "react";
import { 
  HelpCircle, 
  ChevronRight, 
  Mail, 
  MessageCircle, 
  MapPin 
} from "lucide-react";

const topics = [
  "Cara mencari tempat PKL",
  "Cara melihat ketersediaan kuota",
  "Cara memberikan ulasan",
  "Cara menambahkan tempat PKL",
  "Akun dan profil",
  "Lainnya",
];

export default function BantuanPage() {
  return (
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6 md:px-8">
      <main className="w-full max-w-4xl mx-auto space-y-6">
        
        {/* HEADER */}
        <div>
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl leading-snug">
            Pusat Bantuan
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
            Temukan jawaban dari pertanyaan yang sering diajukan.
          </p>
        </div>

        {/* KARTU TOPIK BANTUAN */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 sm:p-6 shadow-sm">
          <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-3">
            Topik Bantuan
          </h2>

          <div className="divide-y divide-gray-100">
            {topics.map((topic, i) => (
              <button
                key={i}
                type="button"
                className="w-full py-3 sm:py-3.5 flex items-center justify-between text-left hover:bg-gray-50/80 transition px-2 rounded-lg"
              >
                <span className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
                  <HelpCircle size={18} className="text-gray-400 shrink-0" />
                  {topic}
                </span>
                <ChevronRight size={16} className="text-gray-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* SECTION BUTUH BANTUAN LAIN? */}
        <div className="pt-2">
          <h2 className="text-sm sm:text-base font-bold text-gray-900">
            Butuh Bantuan Lain?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 mb-4">
            Hubungi kami melalui kontak berikut.
          </p>

          {/* KONTAK: Responsif (1 Kolom di Mobile, 3 Kolom di Desktop/Layar Lebar) */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
            
            {/* EMAIL */}
            <a
              href="mailto:support@mangkara.id"
              className="flex-1 flex items-center justify-center sm:justify-start gap-3 rounded-xl border border-gray-200/90 bg-white p-3.5 sm:px-5 shadow-sm hover:border-blue-400 transition"
            >
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                Email
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center sm:justify-start gap-3 rounded-xl border border-gray-200/90 bg-white p-3.5 sm:px-5 shadow-sm hover:border-emerald-400 transition"
            >
              <MessageCircle size={18} className="text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                WhatsApp
              </span>
            </a>

            {/* LOKASI */}
            <div className="flex-1 flex items-center justify-center sm:justify-start gap-3 rounded-xl border border-gray-200/90 bg-white p-3.5 sm:px-5 shadow-sm">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                Lokasi
              </span>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}