"use client";

import { useRouter } from "next/navigation";

import {
    Building2,
    MapPin,
    Star,
    Users,
    CalendarDays,
    Clock,
    ExternalLink,
} from "lucide-react";

export default function DetailPKLPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#dcecff] px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-7">

            {/* ================= HEADER PERUSAHAAN ================= */}
            <div className="mb-6 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-7 sm:py-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    {/* INFORMASI PERUSAHAAN */}
                    <div className="flex min-w-0 items-center gap-4 sm:gap-5">

                        {/* LOGO */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#eef7fb] sm:h-20 sm:w-20">
                            <Building2
                                size={36}
                                strokeWidth={1.8}
                                className="text-[#78909c] sm:h-[45px] sm:w-[45px]"
                            />
                        </div>

                        {/* NAMA + INFO */}
                        <div className="min-w-0">

                            <h1 className="text-xl font-bold leading-tight text-[#263238] sm:text-2xl">
                                PT Digital Indonesia
                            </h1>

                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:text-sm">

                                <span className="flex items-center gap-1.5">
                                    <MapPin size={14} />
                                    Bandung
                                </span>

                                <span className="flex items-center gap-1.5 text-[#f5a400]">
                                    <Star
                                        size={15}
                                        fill="#f5a400"
                                    />
                                    4.6
                                </span>

                                <span className="text-slate-500">
                                    (120 ulasan)
                                </span>

                            </div>

                        </div>
                    </div>


                    {/* KATEGORI */}
                    <div className="flex flex-wrap items-center gap-2">

                        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs text-[#1677dc] sm:px-5 sm:text-sm">
                            Web Development
                        </span>

                        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs text-[#1677dc] sm:px-5 sm:text-sm">
                            IT
                        </span>

                    </div>

                </div>

            </div>


            {/* ================= CONTENT ================= */}
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">

                {/* ================= BAGIAN KIRI ================= */}
                <div className="min-w-0 space-y-6">

                    {/* DESKRIPSI */}
                    <section className="rounded-xl border border-slate-200 bg-white px-5 py-5 sm:px-7 sm:py-6">

                        <h2 className="mb-4 text-lg font-bold text-[#263238] sm:mb-5">
                            Deskripsi
                        </h2>

                        <p className="text-sm leading-7 text-slate-600">
                            PT Digital Indonesia adalah perusahaan teknologi
                            terkemuka yang berfokus pada pengembangan perangkat
                            lunak berkualitas tinggi, solusi IT enterprise, dan
                            transformasi digital. Kami membuka kesempatan
                            berharga bagi siswa/siswi SMK untuk belajar,
                            berkontribusi, dan berkembang langsung bersama tim
                            engineer profesional kami.
                        </p>

                    </section>


                    {/* INFORMASI MAGANG */}
                    <section className="rounded-xl border border-slate-200 bg-white px-5 py-5 sm:px-7 sm:py-6">

                        <h2 className="mb-5 text-lg font-bold text-[#263238]">
                            Informasi Magang
                        </h2>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                            {/* JURUSAN */}
                            <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eef7fb]">
                                    <Users
                                        size={23}
                                        className="text-[#78909c]"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Jurusan Tersedia
                                    </p>

                                    <p className="mt-1 break-words text-sm font-semibold text-[#263238]">
                                        RPL, TKJ, SI
                                    </p>
                                </div>

                            </div>


                            {/* KUOTA */}
                            <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eef7fb]">
                                    <Users
                                        size={23}
                                        className="text-[#78909c]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Kuota Tersedia
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#263238]">
                                        5 Siswa
                                    </p>
                                </div>

                            </div>


                            {/* PERIODE */}
                            <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eef7fb]">
                                    <CalendarDays
                                        size={23}
                                        className="text-[#78909c]"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Periode Magang
                                    </p>

                                    <p className="mt-1 break-words text-sm font-semibold text-[#263238]">
                                        Juli - Desember 2026
                                    </p>
                                </div>

                            </div>


                            {/* JAM */}
                            <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eef7fb]">
                                    <Clock
                                        size={23}
                                        className="text-[#78909c]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Jam Kerja
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#263238]">
                                        08.00 - 17.00 WIB
                                    </p>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* POSISI */}
                    <section className="rounded-xl border border-slate-200 bg-white px-5 py-5 sm:px-7 sm:py-6">

                        <h2 className="mb-5 text-lg font-bold text-[#263238]">
                            Posisi yang Tersedia
                        </h2>

                        <div className="space-y-3">

                            <div className="rounded-lg bg-[#f5f9ff] px-4 py-4 sm:px-5">
                                <p className="font-semibold text-[#263238]">
                                    Frontend Developer
                                </p>

                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                    Membuat dan mengembangkan tampilan
                                    aplikasi berbasis web.
                                </p>
                            </div>


                            <div className="rounded-lg bg-[#f5f9ff] px-4 py-4 sm:px-5">
                                <p className="font-semibold text-[#263238]">
                                    Backend Developer
                                </p>

                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                    Mengembangkan sistem dan API untuk
                                    kebutuhan aplikasi.
                                </p>
                            </div>

                        </div>

                    </section>

                </div>


                {/* ================= BAGIAN KANAN ================= */}
                <div className="min-w-0 space-y-6">

                    {/* LOKASI */}
                    <section className="rounded-xl border border-slate-200 bg-white px-5 py-5 sm:py-6">

                        <h2 className="mb-4 text-lg font-bold text-[#263238]">
                            Lokasi Perusahaan
                        </h2>

                        <p className="text-sm leading-6 text-slate-500">
                            Jl. Merdeka No. 123, Bandung,
                            Jawa Barat, Indonesia
                        </p>


                        {/* MAP */}
                        <div className="mt-5 h-48 w-full overflow-hidden rounded-lg bg-[#dcebd7] sm:h-52">

                            <iframe
                                src="https://www.google.com/maps?q=Jl.%20Merdeka%20No.%20123,%20Bandung,%20Jawa%20Barat&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>


                        {/* GOOGLE MAPS */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Jl.+Merdeka+No.+123,+Bandung,+Jawa+Barat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50"
                        >
                            <ExternalLink size={16} />
                            Lihat di Google Maps
                        </a>

                    </section>


                    {/* AKSI */}
                    <section className="rounded-xl border border-slate-200 bg-white p-5">

                        <button
                            type="button"
                            onClick={() => router.push("/dashboard/ajukan")}
                            className="w-full rounded-lg bg-[#1478df] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f69c7]"
                        >
                            Ajukan PKL
                        </button>

                    </section>

                </div>

            </div>

        </div>
    );
}