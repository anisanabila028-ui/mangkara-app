"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, Star, ChevronDown } from "lucide-react";

export default function BerandaPage() {
  const rekomendasi = [
    {
      id: "1",
      title: "PT Digital Indonesia",
      loc: "Bandung",
      rating: 4.6,
      quota: 5,
      img: "/fto5.jpeg",
    },
    {
      id: "2",
      title: "CV Kreatif Nusantara",
      loc: "Cimahi",
      rating: 4.4,
      quota: 3,
      img: "/fto3.jpeg",
    },
    {
      id: "3",
      title: "Telkom Indonesia",
      loc: "Jakarta",
      rating: 4.3,
      quota: 2,
      img: "/fto2.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full space-y-6">

        {/* HERO SECTION (Desktop: Flex Row Kiri-Kanan, Mobile: Flex Column Atas-Bawah) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-2">
          
          {/* Sisi Kiri: Teks, Search Bar, & Dropdown Filter */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
              Temukan Tempat PKL yang Tepat untukmu
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-3.5 leading-relaxed">
              Cari dan temukan tempat PKL sesuai jurusanmu dengan mudah dan cepat.
            </p>

            {/* Search Box */}
            <div className="bg-white p-1 rounded-xl border border-gray-200 flex items-center shadow-sm mb-3">
              <Search className="text-gray-400 ml-2.5 mr-2 shrink-0" size={16} />
              <input
                type="text"
                placeholder="Cari tempat PKL, jurusan, atau perusahaan..."
                className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none py-1.5"
              />
              <Link
                href="/dashboard/cari"
                className="bg-[#fff082] hover:bg-[#ffe566] text-gray-800 font-semibold px-3.5 py-1.5 rounded-lg text-xs sm:text-sm transition shrink-0 border border-[#fde047]"
              >
                Cari
              </Link>
            </div>

            {/* 3 Dropdown Filters */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <label className="text-[10px] sm:text-xs text-gray-400 block mb-0.5 truncate">
                  pilih jurusan
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[11px] sm:text-xs text-gray-600 appearance-none focus:outline-none">
                    <option>pilih jurusan</option>
                    <option>RPL</option>
                    <option>TKJ</option>
                  </select>
                  <ChevronDown size={13} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-xs text-gray-400 block mb-0.5 truncate">
                  pilih lokasi
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[11px] sm:text-xs text-gray-600 appearance-none focus:outline-none">
                    <option>semua lokasi</option>
                    <option>Bandung</option>
                    <option>Jakarta</option>
                  </select>
                  <ChevronDown size={13} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-xs text-gray-400 block mb-0.5 truncate">
                  jenis perusahaan
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[11px] sm:text-xs text-gray-600 appearance-none focus:outline-none">
                    <option>lihat jenis</option>
                    <option>IT / Software</option>
                  </select>
                  <ChevronDown size={13} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Ilustrasi Hero (Desktop di Kanan, Mobile di Tengah) */}
          <div className="flex justify-center lg:justify-end items-center py-2 lg:py-0 shrink-0">
            <img
              src="/Hero Illustration.jpeg"
              alt="Ilustrasi Hero"
              className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[380px] h-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* SECTION REKOMENDASI TEMPAT PKL */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">
              Rekomendasi Tempat PKL
            </h2>
            <Link
              href="/dashboard/rekomendasi"
              className="text-xs sm:text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              Lihat semua &rarr;
            </Link>
          </div>

          {/* GRID KARTU (Mobile: 1 Kolom Menumpuk, Desktop: 3 Kolom Menyamping) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rekomendasi.map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/detail/${item.id}`}
                className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                {/* Thumbnail Gambar */}
                <div className="w-full h-40 rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Judul & Lokasi */}
                <div className="text-center mb-4">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-1">
                    <MapPin size={13} className="shrink-0" />
                    <span>{item.loc}</span>
                  </div>
                </div>

                {/* Footer Kartu (Rating & Sisa Kuota) */}
                <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100 px-1">
                  <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                    <Star size={13} fill="currentColor" className="shrink-0" />
                    {item.rating}
                  </span>

                  <span className="text-gray-500">
                    Sisa Kuota: <b className="text-blue-600 font-semibold">{item.quota}</b>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}