"use client";

import { Search, FileText, Star } from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

const ulasan = [
    {
        nama: "zebran Ramadhani",
        aksi: "merekomendasikan",
        perusahaan: "PT Digital Indonesia",
        waktu: "2 jam lalu",
        tanggal: "12 Apr 2025",
        rating: 5,
        avatar: "👨🏻",
    },
    {
        nama: "Rizky Pratama",
        aksi: "menambahkan",
        perusahaan: "CV Kreatif Nusantara",
        waktu: "5 jam lalu",
        tanggal: "10 Apr 2025",
        rating: 4,
        avatar: "👨🏻‍🦱",
    },
    {
        nama: "Ismail payudi",
        aksi: "memberi ulasan untuk",
        perusahaan: "Telkom Indonesia",
        waktu: "1 hari lalu",
        tanggal: "8 Apr 2025",
        rating: 3,
        avatar: "👨🏻",
    },
];

export default function UlasanPage() {
    return (
        <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#eef6ff] px-5 py-8 md:px-7 lg:px-8">
            {/* =========================
          HEADER
      ========================= */}
            <div className="mb-5">
                <h1 className="text-[18px] font-bold text-[#263238]">
                    Ulasan
                </h1>

                <p className="mt-1 text-[10px] text-[#78909c]">
                    Ulasan dan kelola dari pengguna tentang pkl.
                </p>
            </div>

            {/* =========================
          TOTAL + SEARCH
      ========================= */}
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center">
                {/* TOTAL ULASAN */}
                <div className="flex h-[66px] w-full max-w-[165px] items-center rounded-lg border border-[#e0e5eb] bg-white px-3 shadow-sm">
                    <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#e7f0ff]">
                        <FileText
                            size={18}
                            className="text-[#1976ff]"
                            strokeWidth={2}
                        />
                    </div>

                    <div>
                        <p className="text-[11px] font-bold text-[#607080]">
                            Total Ulasan
                        </p>

                        <p className="mt-1 text-[21px] leading-none text-[#222]">
                            48
                        </p>
                    </div>
                </div>

                {/* SEARCH */}
                <div className="relative w-full md:max-w-[540px]">
                    <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#78909c]"
                    />

                    <input
                        type="text"
                        placeholder="PT Digital Indonesia"
                        className="h-[34px] w-full rounded-md border border-[#dfe5eb] bg-white pl-9 pr-3 text-[10px] text-[#455a64] outline-none transition focus:border-[#1976ff]"
                    />
                </div>
            </div>

            {/* =========================
          KONTRIBUSI TERBARU
      ========================= */}
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[12px] font-bold text-[#263238]">
                    Kontribusi Terbaru
                </h2>

                <button className="text-[9px] font-medium text-[#1976ff] hover:underline">
                    Lihat Semua →
                </button>
            </div>

            {/* =========================
          LIST ULASAN
      ========================= */}
            <div className="relative z-10 space-y-3">
                {ulasan.map((item, index) => (
                    <div
                        key={index}
                        className="flex min-h-[42px] items-center justify-between rounded-md border border-[#edf0f3] bg-white px-3 py-2 shadow-sm"
                    >
                        {/* LEFT */}
                        <div className="flex min-w-0 items-center gap-2.5">
                            {/* AVATAR */}
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffe8f1] text-[14px]">
                                {item.avatar}
                            </div>

                            {/* INFO */}
                            <div className="min-w-0">
                                <p className="truncate text-[9px] text-[#607080]">
                                    <span className="font-bold text-[#263238]">
                                        {item.nama}
                                    </span>{" "}
                                    {item.aksi}{" "}
                                    <span className="font-bold text-[#263238]">
                                        {item.perusahaan}
                                    </span>
                                </p>

                                <p className="mt-0.5 text-[7px] text-[#90a4ae]">
                                    {item.waktu}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="ml-3 flex shrink-0 items-center gap-5">
                            <span className="hidden text-[8px] text-[#607080] sm:block">
                                {item.tanggal}
                            </span>

                            <div className="flex items-center gap-1.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={14}
                                        strokeWidth={1.5}
                                        className={
                                            star <= item.rating
                                                ? "text-[#ffd000]"
                                                : "text-[#d4d8dc]"
                                        }
                                        fill={
                                            star <= item.rating
                                                ? "#ffd000"
                                                : "transparent"
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* =========================
          ORNAMEN BAWAH
      ========================= */}
            <BottomOrnament />
        </main>
    );
}
