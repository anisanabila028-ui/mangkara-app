
"use client";

import { useState } from "react";
import { Search, FileText, Star } from "lucide-react";

const ulasanData = [
    {
        nama: "zebran Ramadhani",
        aksi: "merekomendasikan",
        perusahaan: "PT Digital Indonesia",
        waktu: "2 jam lalu",
        tanggal: "12 Apr 2025",
        rating: 5,
        avatarBg: "bg-pink-100",
        avatarImg:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    },
    {
        nama: "Rizky Pratama",
        aksi: "menambahkan",
        perusahaan: "CV Kreatif Nusantara",
        waktu: "5 jam lalu",
        tanggal: "10 Apr 2025",
        rating: 3,
        avatarBg: "bg-purple-100",
        avatarImg:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
    },
    {
        nama: "Ismail payudi",
        aksi: "memberi ulasan untuk",
        perusahaan: "Telkom Indonesia",
        waktu: "1 hari lalu",
        tanggal: "8 Apr 2025",
        rating: 4,
        avatarBg: "bg-cyan-100",
        avatarImg:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
];

export default function UlasanPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);

    const filteredUlasan = ulasanData.filter((item) =>
        `${item.nama} ${item.perusahaan} ${item.aksi}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    const displayedUlasan = showAll
        ? filteredUlasan
        : filteredUlasan.slice(0, 3);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#f0f6ff] px-4 pb-32 pt-7 text-gray-800 sm:px-7 sm:pt-9 lg:px-10 lg:pt-9 xl:px-12">
            <main className="relative z-10 mx-auto w-full max-w-[1100px]">
                {/* HEADER ULASAN */}
                <div className="mb-7">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-[28px]">
                        Ulasan
                    </h1>
                    <p className="mt-1 text-xs text-gray-500 sm:text-[13px]">
                        Ulasan dan kelola dari pengguna tentang pkl.
                    </p>
                </div>

                {/* TOTAL ULASAN DAN PENCARIAN */}
                <section className="mb-8 grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_minmax(0,1fr)]">
                    <div className="flex min-h-[64px] w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm md:w-fit md:min-w-[190px]">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FileText size={19} />
                        </div>

                        <div>
                            <p className="text-lg font-bold leading-none text-gray-900">
                                48
                            </p>
                            <p className="mt-1 text-[11px] text-gray-500">
                                Total Ulasan
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <Search
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            placeholder="Cari nama pengguna atau perusahaan..."
                            className="h-[50px] w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-xs text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-50 sm:text-sm"
                        />
                    </div>
                </section>

                {/* KONTRIBUSI TERBARU */}
                <section>
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-sm font-bold text-gray-900 sm:text-[15px]">
                                Kontribusi Terbaru
                            </h2>
                            <p className="mt-1 text-[11px] text-gray-400">
                                Aktivitas ulasan terbaru dari pengguna
                            </p>
                        </div>

                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="shrink-0 text-[11px] font-semibold text-blue-600 transition hover:text-blue-800 sm:text-xs"
                        >
                            {showAll ? "Lihat Sedikit" : "Lihat Semua"} →
                        </button>
                    </div>

                    {/* DAFTAR ULASAN */}
                    <div className="space-y-3">
                        {displayedUlasan.length > 0 ? (
                            displayedUlasan.map((item, index) => (
                                <article
                                    key={`${item.perusahaan}-${index}`}
                                    className="rounded-xl border border-gray-200/90 bg-white px-4 py-4 shadow-sm transition duration-200 hover:border-blue-200 hover:shadow-md sm:px-5"
                                >
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                        {/* AVATAR */}
                                        <div
                                            className={`h-10 w-10 shrink-0 overflow-hidden rounded-full ${item.avatarBg}`}
                                        >
                                            <img
                                                src={item.avatarImg}
                                                alt={item.nama}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* INFORMASI ULASAN */}
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs leading-relaxed text-gray-500">
                                                <span className="font-bold text-gray-900">
                                                    {item.nama}
                                                </span>{" "}
                                                {item.aksi}
                                            </p>

                                            <p className="mt-0.5 truncate text-xs font-bold text-gray-800">
                                                {item.perusahaan}
                                            </p>

                                            <p className="mt-0.5 text-[10px] text-gray-400">
                                                {item.waktu}
                                            </p>
                                        </div>

                                        {/* TANGGAL DAN RATING */}
                                        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-gray-100 pt-3 sm:flex-col sm:items-end sm:gap-2 sm:border-0 sm:pt-0">
                                            <span className="text-[10px] text-gray-400">
                                                {item.tanggal}
                                            </span>

                                            <div
                                                className="flex items-center gap-1"
                                                aria-label={`Rating ${item.rating} dari 5`}
                                            >
                                                {[1, 2, 3, 4, 5].map(
                                                    (star) => (
                                                        <Star
                                                            key={star}
                                                            size={15}
                                                            strokeWidth={1.5}
                                                            className={
                                                                star <= item.rating
                                                                    ? "fill-[#ffd000] text-[#ffd000]"
                                                                    : "fill-[#d9dee7] text-[#d9dee7]"
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="rounded-xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
                                <Search
                                    size={28}
                                    className="mx-auto text-gray-300"
                                />
                                <p className="mt-3 text-sm font-semibold text-gray-700">
                                    Ulasan tidak ditemukan
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                    Coba kata kunci pengguna atau perusahaan lain.
                                </p>
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="mt-4 text-xs font-semibold text-blue-600 hover:underline"
                                >
                                    Hapus pencarian
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {/* ORNAMEN BAWAH */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 overflow-hidden sm:h-40">

            </div>
        </div>
    );
}
