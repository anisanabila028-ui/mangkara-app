"use client";

import { useState } from "react";
import { Search, FileText, Star } from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

const ulasanData = [
    {
        nama: "zebran",
        aksi: "merekomendasikan",
        perusahaan: "PT Digital Indonesia",
        waktu: "5 jam lalu",
        tanggal: "12 Apr 2025",
        rating: 5,
        avatarBg: "bg-fuchsia-100",
        avatarImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    },
    {
        nama: "Rizky Pratama",
        aksi: "menambahkan",
        perusahaan: "CV Kreatif Nusantara",
        waktu: "5 jam lalu",
        tanggal: "10 Apr 2025",
        rating: 3,
        avatarBg: "bg-purple-100",
        avatarImg: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
    },
    {
        nama: "Ismai",
        aksi: "memberi ulasan untuk",
        perusahaan: "Telkom Indonesia",
        waktu: "1 hari lalu",
        tanggal: "8 Apr 2025",
        rating: 4,
        avatarBg: "bg-cyan-100",
        avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
];

export default function UlasanPage() {
    const [searchQuery, setSearchQuery] = useState("PT Digital Indonesia");

    return (
        <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6">
            <main className="w-full max-w-2xl mx-auto space-y-4">

                {/* SEARCH BAR */}
                <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="PT Digital Indonesia"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-blue-500 shadow-sm"
                    />
                </div>

                {/* HEADER */}
                <div>
                    <h1 className="text-xl font-bold text-gray-900 sm:text-2xl leading-snug">
                        Ulasan
                    </h1>
                    <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
                        Ulasan dan kelola dari pengguna tentang pkl.
                    </p>
                </div>

                {/* TOTAL ULASAN CARD */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-sm inline-flex items-center gap-3 w-fit pr-10">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <FileText size={18} />
                    </div>
                    <div>
                        <p className="text-base font-bold text-gray-900 leading-none">
                            48
                        </p>
                        <p className="text-[11px] text-gray-500 mt-1">
                            Total Ulasan
                        </p>
                    </div>
                </div>

                {/* SECTION KONTRIBUSI TERBARU */}
                <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-bold text-gray-900">
                            Kontribusi Terbaru
                        </h2>
                        <button className="text-xs text-blue-600 font-semibold hover:underline">
                            Lihat Semua →
                        </button>
                    </div>

                    {/* LIST ULASAN */}
                    <div className="space-y-3">
                        {ulasanData.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-200/80 bg-white p-3.5 shadow-sm"
                            >
                                <div className="flex items-start gap-3">
                                    {/* Avatar */}
                                    <div className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full ${item.avatarBg}`}>
                                        <img
                                            src={item.avatarImg}
                                            alt={item.nama}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="text-xs text-gray-600">
                                                <b className="text-gray-900 font-bold">{item.nama}</b> {item.aksi}
                                            </p>
                                            <span className="text-[10px] text-gray-400 shrink-0">
                                                {item.tanggal}
                                            </span>
                                        </div>

                                        <p className="text-xs font-bold text-gray-900 mt-0.5">
                                            {item.perusahaan}
                                        </p>

                                        <p className="text-[11px] text-gray-400 mt-0.5">
                                            {item.waktu}
                                        </p>

                                        {/* Stars Rating */}
                                        <div className="flex items-center gap-1 mt-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={13}
                                                    className={
                                                        star <= item.rating
                                                            ? "fill-[#ffd000] text-[#ffd000]"
                                                            : "fill-[#e2e8f0] text-[#e2e8f0]"
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </div>
    );
}
