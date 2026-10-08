"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Star } from "lucide-react";

export default function BerandaPage() {
  const rekomendasi = [
    { id: "1", title: "PT Digital Indonesia", loc: "Bandung", rating: 4.6, quota: 5, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
    { id: "2", title: "CV Kreatif Nusantara", loc: "Cimahi", rating: 4.4, quota: 3, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400" },
    { id: "3", title: "Telkom Indonesia", loc: "Jakarta", rating: 4.3, quota: 3, img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400" },
  ];

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-5rem)] px-4 py-6 max-w-7xl mx-auto w-full">
      <div>
        {/* Banner Hero */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl px-4 py-6 flex flex-col md:flex-row items-center justify-between mb-8 shadow-sm">
          <div className="max-w-xl mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Temukan Tempat PKL yang Tepat untukmu
            </h1>
            <p className="text-gray-500 text-xs mb-6">
              Cari dan temukan tempat PKL sesuai jurusanmu dengan mudah dan cepat.
            </p>

            {/* Input Search */}
            <div className="bg-white p-1.5 rounded-xl border border-gray-200 flex items-center shadow-sm mb-3">
              <Search className="text-gray-400 ml-2 mr-2" size={16} />
              <input
                type="text"
                placeholder="Cari tempat PKL, jurusan, atau perusahaan..."
                className="w-full text-xs focus:outline-none"
              />
              <Link href="/dashboard/cari" className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded-lg text-xs transition">
                Cari
              </Link>
            </div>

            {/* Filters Dropdown */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <label className="text-[10px] text-gray-400 block mb-0.5">pilih jurusan</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs text-gray-600 focus:outline-none">
                  <option>pilih jurusan anda</option>
                  <option>RPL</option>
                  <option>TKJ</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-gray-400 block mb-0.5">pilih lokasi</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs text-gray-600 focus:outline-none">
                  <option>semua lokasi</option>
                  <option>Bandung</option>
                  <option>Jakarta</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-gray-400 block mb-0.5">jenis perusahaan</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs text-gray-600 focus:outline-none">
                  <option>lihat jenis</option>
                  <option>IT / Software</option>
                </select>
              </div>
            </div>
          </div>

          {/* Banner Illustration */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <Image
              src="/illustration-student.png"
              alt="Hero Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Section Rekomendasi */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-800">Rekomendasi Tempat PKL</h2>
            <Link href="/dashboard/rekomendasi" className="text-xs text-blue-500 font-semibold hover:underline">
              Lihat semua &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rekomendasi.map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/daftar-pkl/${item.id}`}
                className="bg-white rounded-2xl p-3 border border-gray-100 hover:shadow-md transition group"
              >
                
                <h3 className="font-bold text-xs text-gray-800 mb-1">{item.title}</h3>
                <div className="flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {item.loc}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                    <Star size={12} fill="currentColor" /> {item.rating}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">Sisa Kuota: <span className="text-blue-600 font-semibold">{item.quota}</span></p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}