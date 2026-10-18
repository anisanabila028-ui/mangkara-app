"use client";

import { 
  HelpCircle, 
  ChevronRight, 
  Mail, 
  MessageCircle, 
  MapPin 
} from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

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
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6">
      <main className="w-full max-w-2xl mx-auto space-y-5">
        {/* HEADER */}
        <div>
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl leading-snug">
            Pusat Bantuan
          </h1>
          <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
            Temukan jawaban dari pertanyaan yang sering diajukan.
          </p>
        </div>

        {/* KARTU TOPIK BANTUAN */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            Topik Bantuan
          </h2>

          <div className="divide-y divide-gray-100">
            {topics.map((topic, i) => (
              <button
                key={i}
                type="button"
                className="w-full py-3 flex items-center justify-between text-left hover:bg-gray-50/70 transition px-1 rounded-lg"
              >
                <span className="flex items-center gap-3 text-xs font-medium text-gray-700">
                  <HelpCircle size={17} className="text-gray-400 shrink-0" />
                  {topic}
                </span>
                <ChevronRight size={16} className="text-gray-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* SECTION BUTUH BANTUAN LAIN? */}
        <div>
          <h2 className="text-sm font-bold text-gray-900">
            Butuh Bantuan Lain?
          </h2>
          <p className="text-xs text-gray-500 mt-0.5 mb-3">
            Hubungi kami melalui kontak berikut.
          </p>

          <div className="space-y-2.5">
            {/* EMAIL */}
            <a
              href="mailto:support@mangkara.id"
              className="flex items-center gap-3 rounded-xl border border-gray-200/90 bg-white p-3.5 shadow-sm hover:border-blue-400 transition"
            >
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span className="text-xs font-semibold text-gray-800">
                Email
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-gray-200/90 bg-white p-3.5 shadow-sm hover:border-emerald-400 transition"
            >
              <MessageCircle size={18} className="text-emerald-500 shrink-0" />
              <span className="text-xs font-semibold text-gray-800">
                WhatsApp
              </span>
            </a>

            {/* LOKASI */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-200/90 bg-white p-3.5 shadow-sm">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span className="text-xs font-semibold text-gray-800">
                Lokasi
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ---------- ORNAMEN BAWAH ---------- */}
      <BottomOrnament />
    </div>
  );
}