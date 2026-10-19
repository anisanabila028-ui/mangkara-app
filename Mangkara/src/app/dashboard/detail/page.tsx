
"use client";

import Link from "next/link";
import {
    MapPin,
    Star,
    BookOpen,
    User,
    Clock,
} from "lucide-react";


const perusahaan = {
    nama: "PT Digital Indonesia",
    kota: "Bandung",
    rating: 4.6,
    jumlahUlasan: 120,
    kategori: ["Web Development", "IT"],
    logo: "/fto1.jpeg",
    deskripsi:
        "PT Digital Indonesia adalah perusahaan teknologi terkemuka yang berfokus pada pengembangan perangkat lunak berkualitas tinggi, solusi IT enterprise, dan transformasi digital. Kami membuka kesempatan berharga bagi siswa/siswi SMK untuk belajar, berkontribusi, dan berkembang langsung bersama tim engineer profesional kami.",
    jurusan: "RPL, TKJ, SI",
    kuotaTersedia: 5,
    kuotaTotal: 10,
    durasi: "3 - 6 Bulan",
    jamKerja: "8 pagi - 4 sore",
    alamat: "Sumedang Indonesia",
};

const infoMagang = [
    {
        ikon: BookOpen,
        label: "Jurusan Tersedia",
        nilai: perusahaan.jurusan,
    },
    {
        ikon: User,
        label: "Kuota",
        nilai: `${perusahaan.kuotaTersedia} dari ${perusahaan.kuotaTotal} Tersedia`,
    },
    {
        ikon: Clock,
        label: "Durasi",
        nilai: perusahaan.durasi,
    },
    {
        ikon: Clock,
        label: "Jam kerja",
        nilai: perusahaan.jamKerja,
    },
];

export default function DetailPerusahaanPage() {
    const kueriPeta = encodeURIComponent(
        `${perusahaan.nama} ${perusahaan.alamat}`
    );

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#f0f6ff] px-4 pb-32 pt-5 text-gray-800 sm:px-6 sm:pt-7 lg:px-8 lg:pt-8">
            <main className="relative z-10 mx-auto w-full max-w-[1100px] space-y-4 sm:space-y-5">
                {/* 1. HEADER PERUSAHAAN */}
                <section className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <div className="flex min-w-0 flex-1 items-center gap-3.5">
                            <div className="h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-[60px] sm:w-[76px]">
                                <img
                                    src={perusahaan.logo}
                                    alt={perusahaan.nama}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h1 className="truncate text-base font-bold text-gray-900 sm:text-lg">
                                    {perusahaan.nama}
                                </h1>

                                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-gray-500 sm:text-xs">
                                    <span className="flex items-center gap-1">
                                        <MapPin
                                            size={12}
                                            className="shrink-0 text-gray-400"
                                        />
                                        {perusahaan.kota}
                                    </span>

                                    <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                                        <Star
                                            size={12}
                                            fill="currentColor"
                                        />
                                        {perusahaan.rating}
                                    </span>

                                    <span>
                                        ({perusahaan.jumlahUlasan} ulasan)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* KATEGORI */}
                        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                            {perusahaan.kategori.map((kategori, index) => (
                                <span
                                    key={kategori}
                                    className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold sm:text-[11px] ${index === 0
                                        ? "bg-blue-50 text-blue-600"
                                        : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {kategori}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. GRID RESPONSIVE DESKTOP DAN MOBILE */}
                <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">
                    {/* KOLOM KIRI */}
                    <div className="min-w-0 space-y-4 sm:space-y-5">
                        {/* DESKRIPSI */}
                        <section className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
                            <h2 className="mb-2 text-sm font-bold text-gray-900">
                                Deskripsi
                            </h2>

                            <p className="text-xs leading-[1.8] text-gray-600 sm:text-[13px] sm:leading-relaxed">
                                {perusahaan.deskripsi}
                            </p>
                        </section>

                        {/* INFORMASI MAGANG */}
                        <section className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
                            <h2 className="mb-4 text-sm font-bold text-gray-900">
                                Informasi Magang
                            </h2>

                            <div className="space-y-3.5">
                                {infoMagang.map((item, index) => {
                                    const Ikon = item.ikon;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <Ikon
                                                size={17}
                                                strokeWidth={1.8}
                                                className="mt-0.5 shrink-0 text-gray-500"
                                            />

                                            <div className="min-w-0">
                                                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                                                    {item.label}
                                                </p>

                                                <p className="mt-0.5 text-xs font-bold text-gray-900">
                                                    {item.nilai}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    {/* KOLOM KANAN: LOKASI */}
                    <aside className="min-w-0">
                        <section className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-5">
                            <h2 className="text-sm font-bold text-gray-900">
                                Lokasi Perusahaan
                            </h2>

                            <p className="mt-1.5 text-xs text-gray-500">
                                {perusahaan.alamat}
                            </p>

                            {/* PETA */}
                            <div className="mt-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 lg:aspect-square">
                                <iframe
                                    title={`Peta ${perusahaan.nama}`}
                                    src={`https://www.google.com/maps?q=${kueriPeta}&output=embed`}
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* GOOGLE MAPS */}
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${kueriPeta}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex h-10 w-full items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-700 transition hover:bg-gray-50"
                            >
                                Lihat di Google Maps
                            </a>

                            {/* AJUKAN PKL */}
                            <Link
                                href="/dashboard/ajukan"
                                className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-[#2d8ce8] text-xs font-bold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.99]"
                            >
                                Ajukan PKL
                            </Link>
                        </section>
                    </aside>
                </div>
            </main>

            {/* ORNAMEN BAWAH */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 overflow-hidden sm:h-32 lg:h-40">

            </div>
        </div>
    );
}
