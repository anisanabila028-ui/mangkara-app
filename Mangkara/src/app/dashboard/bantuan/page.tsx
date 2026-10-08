"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export default function BantuanPage() {
  const topics = [
    "Cara mencari tempat PKL",
    "Cara melihat ketersediaan kuota",
    "Cara memberikan ulasan",
    "Cara menambahkan tempat PKL",
    "Akun dan profil",
    "Lainnya",
  ];

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-5rem)]">
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-1">Pusat Bantuan</h1>
        <p className="text-xs text-gray-400 mb-6">Temukan jawaban dari pertanyaan yang sering diajukan.</p>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6">
          <h2 className="text-xs font-bold text-gray-800 mb-3">Topik Bantuan</h2>
          <div className="divide-y divide-gray-100">
            {topics.map((topic, i) => (
              <div key={i} className="py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 rounded-xl transition">
                <span className="flex items-center gap-3 text-xs text-gray-700">
                  <HelpCircle size={16} className="text-gray-400" />
                  {topic}
                </span>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-800 mb-1">Butuh Bantuan Lain?</h2>
          <p className="text-[10px] text-gray-400 mb-3">Hubungi kami melalui kontak berikut.</p>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-sm">
              <Mail size={14} className="text-blue-500" /> Email
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-sm">
              <Phone size={14} className="text-green-500" /> WhatsApp
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-sm">
              <MapPin size={14} className="text-blue-500" /> Lokasi
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bantuan */}
      <footer className="bg-blue-100/70 p-6 rounded-2xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600">
        <div>
          <div className="flex items-center gap-2 font-bold text-blue-600 mb-2">
            <div className="w-5 h-5 bg-blue-600 rounded-md text-white flex items-center justify-center text-[10px]">P</div>
            Mangkara
          </div>
          <p className="text-[10px] text-gray-500 leading-relaxed mb-3">
            Mangkara adalah website yang membantu siswa mencari dan menemukan tempat PKL berdasarkan jurusan, lokasi, dan ketersediaan kuota.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-2">Menu</h4>
          <ul className="space-y-1 text-[11px]">
            <li><Link href="/dashboard/beranda" className="hover:underline">Beranda</Link></li>
            <li><Link href="/dashboard/daftar-pkl" className="hover:underline">Daftar Tempat PKL</Link></li>
            <li><Link href="/dashboard/rekomendasi" className="hover:underline">Rekomendasi</Link></li>
            <li><Link href="/dashboard/bantuan" className="hover:underline">Bantuan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-2">Informasi</h4>
          <ul className="space-y-1 text-[11px]">
            <li>Tentang Mangkara</li>
            <li>Cara Menggunakan</li>
            <li>Kebijakan Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}