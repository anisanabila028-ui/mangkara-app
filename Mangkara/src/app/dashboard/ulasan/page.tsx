"use client";

import { Search, FileText, Star } from "lucide-react";

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
        <main className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-[#eef6ff] px-5 py-8 md:px-7 lg:px-8">
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
            <BottomDecoration />
        </main>
    );
}

/* =========================
   ORNAMEN
========================= */

function BottomDecoration() {
    return (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[95px] overflow-hidden">
            {/* LEFT */}
            <svg
                className="absolute bottom-0 left-0 h-[90px] w-[190px]"
                viewBox="0 0 190 90"
                fill="none"
            >
                <path
                    d="M0 73C22 63 31 82 48 69C63 58 75 74 91 63C107 52 120 71 137 61C153 51 171 63 190 53"
                    stroke="#69a9ef"
                    strokeWidth="3"
                />

                <path
                    d="M0 83C25 72 35 88 53 77C69 67 82 83 99 72C116 62 130 80 146 70C162 61 177 72 190 65"
                    stroke="#69a9ef"
                    strokeWidth="2"
                />

                <circle cx="53" cy="70" r="4" fill="#69a9ef" />
                <circle cx="78" cy="75" r="3" fill="#f5c43b" />
                <circle cx="105" cy="63" r="3" fill="#69a9ef" />
            </svg>

            {/* CENTER */}
            <svg
                className="absolute bottom-0 left-1/2 h-[70px] w-[190px] -translate-x-1/2"
                viewBox="0 0 190 70"
                fill="none"
            >
                <path
                    d="M0 47C22 36 37 57 55 45C71 34 82 50 96 41C112 31 126 49 142 40C159 31 172 43 190 35"
                    stroke="#69a9ef"
                    strokeWidth="3"
                />

                <path
                    d="M95 50C83 43 82 34 88 30C92 28 95 34 95 38C96 32 100 27 104 30C109 35 106 45 95 50Z"
                    fill="#69a9ef"
                />

                <circle cx="95" cy="47" r="4" fill="#f5c43b" />
                <circle cx="65" cy="42" r="3" fill="#f5c43b" />
                <circle cx="124" cy="38" r="3" fill="#f5c43b" />
            </svg>

            {/* RIGHT */}
            <svg
                className="absolute bottom-0 right-0 h-[95px] w-[200px]"
                viewBox="0 0 200 95"
                fill="none"
            >
                <path
                    d="M0 66C23 55 34 76 51 63C68 51 79 70 95 58C112 47 127 66 143 55C161 44 178 57 200 45"
                    stroke="#69a9ef"
                    strokeWidth="3"
                />

                <path
                    d="M20 88C31 73 39 62 51 62C43 52 46 43 52 40C59 45 61 54 56 61C66 52 73 54 76 59C71 68 61 72 53 69C44 79 32 86 20 88Z"
                    fill="#72acf0"
                />

                <path
                    d="M151 92C157 76 168 65 181 65C173 55 177 46 184 44C191 50 191 60 186 66C195 60 201 64 197 73C190 80 181 82 173 79C166 87 159 91 151 92Z"
                    fill="#72acf0"
                />

                <circle cx="92" cy="63" r="4" fill="#69a9ef" />
                <circle cx="114" cy="55" r="3" fill="#f5c43b" />
            </svg>
        </div>
    );
}