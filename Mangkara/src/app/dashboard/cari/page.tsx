'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, MapPin, Star, ChevronDown } from 'lucide-react';
import BottomOrnament from "../../../components/ui/bottomOrnament";

export default function CariPage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("PT Digital Indonesia");
    const [tersedia, setTersedia] = useState(true);

    return (
        <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6">
            <div className="w-full max-w-2xl mx-auto space-y-4">

                {/* Header */}
                <div>
                    <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Cari Tempat PKL
                    </h1>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Gunakan pencarian dan filter di samping untuk menemukan industri yang ideal.
                    </p>
                </div>

                {/* Input Pencarian */}
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

                {/* Card Filter Berbingkai Biru */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-blue-400 shadow-sm space-y-3.5">
                    {/* Header Filter */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm">
                        <Filter size={15} />
                        <span>Filter</span>
                    </div>

                    {/* Pilih Jurusan */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Pilih Jurusan
                        </label>
                        <div className="relative">
                            <select className="w-full h-10 pl-3.5 pr-8 border border-gray-200 rounded-xl text-xs text-gray-600 bg-white appearance-none outline-none focus:border-blue-500">
                                <option>pilih jurusan anda</option>
                                <option>RPL</option>
                                <option>TKJ</option>
                            </select>
                            <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Pilih Lokasi */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Pilih Lokasi
                        </label>
                        <div className="relative">
                            <select className="w-full h-10 pl-3.5 pr-8 border border-gray-200 rounded-xl text-xs text-gray-600 bg-white appearance-none outline-none focus:border-blue-500">
                                <option>semua lokasi</option>
                                <option>Bandung</option>
                                <option>Jakarta</option>
                            </select>
                            <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Ketersediaan Kuota */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Ketersediaan Kuota
                        </label>
                        <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={tersedia}
                                onChange={(e) => setTersedia(e.target.checked)}
                                className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span>Tersedia</span>
                        </label>
                    </div>

                    {/* Tombol Terapkan Filter */}
                    <button
                        type="button"
                        className="w-full h-10 bg-[#1976ff] hover:bg-[#1565c0] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-blue-200 transition active:scale-[0.99]"
                    >
                        Terapkan Filter
                    </button>
                </div>

                {/* Hasil Pencarian Card */}
                <div className="pt-1">
                    <div className="w-full rounded-2xl border border-gray-200/80 bg-white p-3.5 shadow-sm space-y-3">
                        {/* Atas: Foto + Info */}
                        <div className="flex items-center gap-3.5">
                            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80"
                                    alt="PT Digital Indonesia"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-sm font-bold text-gray-900">
                                    PT Digital Indonesia
                                </h3>

                                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} className="text-gray-400" />
                                        Bandung
                                    </span>

                                    <span>
                                        Sisa Kuota:{" "}
                                        <b className="text-blue-600 font-semibold">5</b>
                                    </span>

                                    <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                                        <Star size={12} fill="currentColor" className="shrink-0" />
                                        4.6
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bawah: Tombol Kuning */}
                        <div>
                            <button
                                type="button"
                                onClick={() => router.push("/dashboard/detail/1")}
                                className="rounded-lg border border-[#f5c43b] bg-[#fff082] hover:bg-[#ffe566] px-4 py-1.5 text-xs font-semibold text-[#1976ff] transition active:scale-[0.98] inline-block"
                            >
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </div>
    );
}