"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, Star, ChevronDown } from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

export default function BerandaPage() {
  const rekomendasi = [
    {
      id: "1",
      title: "PT Digital Indonesia",
      loc: "Bandung",
      rating: 4.6,
      quota: 5,
      img: "/fto5.jpeg"    ,
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
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-4 sm:px-6 md:px-8">
      <div className="max-w-2xl mx-auto w-full space-y-4">

        {/* Banner Hero */}
        <div className="bg-[#f0f6ff] pt-2">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900 leading-snug">
            Temukan Tempat PKL yang Tepat untukmu
          </h1>
          <p className="text-xs text-gray-500 mt-1 mb-3.5 leading-relaxed">
            Cari dan temukan tempat PKL sesuai jurusanmu dengan mudah dan cepat.
          </p>

          {/* Search Box */}
          <div className="bg-white p-1 rounded-xl border border-gray-200 flex items-center shadow-sm mb-3">
            <Search className="text-gray-400 ml-2.5 mr-2 shrink-0" size={16} />
            <input
              type="text"
              placeholder="Cari tempat PKL, jurusan, atau perusahaan..."
              className="w-full text-xs text-gray-800 placeholder-gray-400 focus:outline-none py-1.5"
            />
            <Link
              href="/dashboard/cari"
              className="bg-[#fff082] hover:bg-[#ffe566] text-gray-800 font-semibold px-3.5 py-1.5 rounded-lg text-xs transition shrink-0 border border-[#fde047]"
            >
              Cari
            </Link>
          </div>

          {/* 3 Dropdown Filters */}
          <div className="grid grid-cols-3 gap-2 text-xs mb-4">
            <div>
              <label className="text-[10px] text-gray-400 block mb-0.5 truncate">
                pilih jurusan
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[11px] text-gray-600 appearance-none focus:outline-none">
                  <option>pilih jurusan</option>
                  <option>RPL</option>
                  <option>TKJ</option>
                </select>
                <ChevronDown size={13} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-gray-400 block mb-0.5 truncate">
                pilih lokasi
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[11px] text-gray-600 appearance-none focus:outline-none">
                  <option>semua lokasi</option>
                  <option>Bandung</option>
                  <option>Jakarta</option>
                </select>
                <ChevronDown size={13} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-gray-400 block mb-0.5 truncate">
                jenis perusahaan
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[11px] text-gray-600 appearance-none focus:outline-none">
                  <option>lihat jenis</option>
                  <option>IT / Software</option>
                </select>
                <ChevronDown size={13} className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Ilustrasi Hero di tengah */}
          <div className="flex justify-center items-center py-2">
            <img
              src="/Hero Illustration.jpeg"
              alt="Ilustrasi Hero"
              className="w-full max-w-[260px] h-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Section Rekomendasi Tempat PKL */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-gray-900">
              Rekomendasi Tempat PKL
            </h2>
            <Link
              href="/dashboard/rekomendasi"
              className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              Lihat semua &rarr;
            </Link>
          </div>

          {/* Cards List */}
          <div className="space-y-3">
            {rekomendasi.map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/detail/${item.id}`}
                className="bg-white rounded-xl p-3 border border-gray-200/80 shadow-sm hover:shadow-md transition flex items-center gap-3.5 block"
              >
                {/* Thumbnail Gambar */}
                <div className="relative w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Info Text */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm text-gray-900 truncate">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="shrink-0 text-gray-400" />
                      {item.loc}
                    </span>

                    <span>
                      Sisa Kuota:{" "}
                      <b className="text-blue-600 font-semibold">{item.quota}</b>
                    </span>

                    <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                      <Star size={12} fill="currentColor" className="shrink-0" />
                      {item.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ---------- ORNAMEN BAWAH ---------- */}
      <BottomOrnament />
    </div>
  );
}