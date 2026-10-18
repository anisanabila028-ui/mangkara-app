"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    MapPin,
    Star,
    Filter,
    ChevronLeft,
    ChevronRight,
    Building2,
} from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

const dataTempat = [
    {
        id: "1",
        nama: "PT Digital Indonesia",
        lokasi: "Bandung",
        kuota: "5",
        rating: "4.6",
        gambar: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    },
    {
        id: "2",
        nama: "CV Kreatif Nusantara",
        lokasi: "Cimahi",
        kuota: "3",
        rating: "4.4",
        gambar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    },
    {
        id: "3",
        nama: "Telkom Indonesia",
        lokasi: "Jakarta",
        kuota: "2",
        rating: "4.3",
        gambar: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=300&q=80",
    },
    {
        id: "4",
        nama: "PT Solusi digital",
        lokasi: "Bandung",
        kuota: "4",
        rating: "4.5",
        gambar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80",
    },
];

export default function DaftarPKLPage() {
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;
    const totalPages = 5; // disesuaikan agar pagination 1, 2, 3 ... 5 tampil persis Gambar 5

    const currentData = dataTempat;

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36">

            <main className="w-full max-w-2xl mx-auto px-4 py-5 sm:px-6">

                {/* HEADER HALAMAN */}
                <div className="mb-5 flex flex-col gap-3">
                    <div className="min-w-0">
                        <h1 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                            Daftar Tempat PKL
                        </h1>

                        <p className="mt-1 text-xs text-gray-500 leading-relaxed sm:text-sm">
                            Menampilkan daftar tempat PKL aktif dari berbagai bidang industri.
                        </p>
                    </div>

                    {/* FILTER BUTTON */}
                    <div>
                        <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-gray-200 px-3.5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm transition hover:bg-gray-50 active:scale-[0.98]"
                        >
                            <Filter size={14} className="text-blue-600" />
                            Filter
                        </button>
                    </div>
                </div>

                {/* DAFTAR CARD */}
                <div className="space-y-3.5">
                    {currentData.map((item) => (
                        <div
                            key={item.id}
                            className="w-full rounded-2xl border border-gray-200/80 bg-white p-3.5 shadow-sm transition hover:shadow-md space-y-3"
                        >
                            {/* BAGIAN ATAS: GAMBAR + NAMA & META */}
                            <div className="flex items-center gap-3.5">
                                {/* Thumbnail Foto */}
                                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                    <Building2
                                        size={22}
                                        className="absolute inset-0 m-auto text-slate-300"
                                    />
                                    <img
                                        src={item.gambar}
                                        alt={item.nama}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>

                                {/* Informasi */}
                                <div className="min-w-0 flex-1">
                                    <h2 className="truncate text-sm font-bold text-gray-900">
                                        {item.nama}
                                    </h2>

                                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                                        {/* Lokasi */}
                                        <span className="flex items-center gap-1">
                                            <MapPin size={12} className="text-gray-400" />
                                            {item.lokasi}
                                        </span>

                                        {/* Kuota */}
                                        <span>
                                            Sisa Kuota:{" "}
                                            <b className="text-blue-600 font-semibold">{item.kuota}</b>
                                        </span>

                                        {/* Rating */}
                                        <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                                            <Star
                                                size={12}
                                                fill="currentColor"
                                                className="shrink-0"
                                            />
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* BAGIAN BAWAH: TOMBOL KUNING LIHAT DETAIL */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => router.push(`/dashboard/detail/${item.id}`)}
                                    className="rounded-lg border border-[#f5c43b] bg-[#fff082] hover:bg-[#ffe566] px-4 py-1.5 text-xs font-semibold text-[#1976ff] transition active:scale-[0.98]"
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION PERSIS GAMBAR 5: < 1 2 3 ... 5 > */}
                <div className="mt-7 flex items-center justify-center gap-2">
                    {/* PREVIOUS */}
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    {/* HALAMAN 1 */}
                    <button
                        type="button"
                        onClick={() => goToPage(1)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition ${
                            currentPage === 1
                                ? "bg-[#1976ff] text-white shadow-sm"
                                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        1
                    </button>

                    {/* HALAMAN 2 */}
                    <button
                        type="button"
                        onClick={() => goToPage(2)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition ${
                            currentPage === 2
                                ? "bg-[#1976ff] text-white shadow-sm"
                                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        2
                    </button>

                    {/* HALAMAN 3 */}
                    <button
                        type="button"
                        onClick={() => goToPage(3)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition ${
                            currentPage === 3
                                ? "bg-[#1976ff] text-white shadow-sm"
                                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        3
                    </button>

                    {/* DOTS */}
                    <span className="px-0.5 text-xs text-gray-400">...</span>

                    {/* HALAMAN 5 */}
                    <button
                        type="button"
                        onClick={() => goToPage(5)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition ${
                            currentPage === 5
                                ? "bg-[#1976ff] text-white shadow-sm"
                                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        5
                    </button>

                    {/* NEXT */}
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>

            </main>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </div>
    );
}