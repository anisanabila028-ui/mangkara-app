"use client";

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
    return (
        <div className="min-h-screen bg-[#dcecff] px-10 py-7">

            {/* HEADER PERUSAHAAN */}
            <div className="mb-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-7 py-6 shadow-sm">
                <div className="flex items-center gap-5">

                    {/* LOGO */}
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-[#eef7fb]">
                        <Building2
                            size={45}
                            strokeWidth={1.8}
                            className="text-[#78909c]"
                        />
                    </div>

                    {/* INFORMASI PERUSAHAAN */}
                    <div>
                        <h1 className="text-2xl font-bold text-[#263238]">
                            PT Digital Indonesia
                        </h1>

                        <div className="mt-2 flex items-center gap-5 text-sm text-slate-500">

                            <span className="flex items-center gap-1.5">
                                <MapPin size={16} />
                                Bandung
                            </span>

                            <span className="flex items-center gap-1.5 text-[#f5a400]">
                                <Star
                                    size={16}
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
                <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#eef6ff] px-5 py-2 text-sm text-[#1677dc]">
                        Web Development
                    </span>

                    <span className="rounded-full bg-[#eef6ff] px-5 py-2 text-sm text-[#1677dc]">
                        IT
                    </span>
                </div>
            </div>


            {/* CONTENT */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

                {/* BAGIAN KIRI */}
                <div className="space-y-6">

                    {/* DESKRIPSI */}
                    <section className="rounded-xl border border-slate-200 bg-white px-7 py-6">
                        <h2 className="mb-5 text-lg font-bold text-[#263238]">
                            Deskripsi
                        </h2>

                        <p className="text-sm leading-8 text-slate-600">
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
                    <section className="rounded-xl border border-slate-200 bg-white px-7 py-6">

                        <h2 className="mb-6 text-lg font-bold text-[#263238]">
                            Informasi Magang
                        </h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {/* JURUSAN */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef7fb]">
                                    <Users
                                        size={23}
                                        className="text-[#78909c]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Jurusan Tersedia
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#263238]">
                                        RPL, TKJ, SI
                                    </p>
                                </div>
                            </div>


                            {/* KUOTA */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef7fb]">
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
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef7fb]">
                                    <CalendarDays
                                        size={23}
                                        className="text-[#78909c]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Periode Magang
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#263238]">
                                        Juli - Desember 2026
                                    </p>
                                </div>
                            </div>


                            {/* JAM */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef7fb]">
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
                    <section className="rounded-xl border border-slate-200 bg-white px-7 py-6">

                        <h2 className="mb-5 text-lg font-bold text-[#263238]">
                            Posisi yang Tersedia
                        </h2>

                        <div className="space-y-3">

                            <div className="rounded-lg bg-[#f5f9ff] px-5 py-4">
                                <p className="font-semibold text-[#263238]">
                                    Frontend Developer
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Membuat dan mengembangkan tampilan
                                    aplikasi berbasis web.
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#f5f9ff] px-5 py-4">
                                <p className="font-semibold text-[#263238]">
                                    Backend Developer
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Mengembangkan sistem dan API untuk
                                    kebutuhan aplikasi.
                                </p>
                            </div>

                        </div>
                    </section>

                </div>


                {/* BAGIAN KANAN */}
                <div className="space-y-6">

                    {/* LOKASI */}
                    <section className="rounded-xl border border-slate-200 bg-white px-5 py-6">

                        <h2 className="mb-5 text-lg font-bold text-[#263238]">
                            Lokasi Perusahaan
                        </h2>

                        <p className="text-sm leading-6 text-slate-500">
                            Jl. Merdeka No. 123, Bandung,
                            Jawa Barat, Indonesia
                        </p>

                        {/* MAP */}
                        <div className="mt-5 flex h-36 items-center justify-center rounded-lg bg-[#dcebd7]">

                            <div className="text-center">
                                <MapPin
                                    size={42}
                                    className="mx-auto text-red-500"
                                />

                                <p className="mt-2 text-sm font-medium text-red-500">
                                    Lokasi Perusahaan
                                </p>
                            </div>

                        </div>

                        <button
                            type="button"
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50"
                        >
                            <ExternalLink size={16} />
                            Lihat di Google Maps
                        </button>

                    </section>


                    {/* AKSI */}
                    <section className="rounded-xl border border-slate-200 bg-white p-5">

                        <button
                            type="button"
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