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

const dataTempat = [
    {
        nama: "PT Digital Indonesia",
        lokasi: "Bandung",
        kuota: "5",
        rating: "4.6",
    },
    {
        nama: "CV Kreatif Nusantara",
        lokasi: "Cimahi",
        kuota: "3",
        rating: "4.4",
    },
    {
        nama: "Telkom Indonesia",
        lokasi: "Jakarta",
        kuota: "2",
        rating: "4.3",
    },
    {
        nama: "PT Solusi Digital",
        lokasi: "Bandung",
        kuota: "4",
        rating: "4.5",
    },
];

export default function DaftarPKLPage() {
    const router = useRouter();

    // Halaman yang sedang aktif
    const [currentPage, setCurrentPage] = useState(1);

    // Untuk sekarang 4 data tampil dalam 1 halaman
    const itemsPerPage = 4;

    // Jumlah halaman otomatis dihitung dari jumlah data
    const totalPages = Math.ceil(
        dataTempat.length / itemsPerPage
    );

    // Menentukan data yang ditampilkan di halaman aktif
    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const currentData = dataTempat.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    // Fungsi pindah halaman
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f8ff]">

            {/* CONTENT */}
            <main className="min-h-[calc(100vh-80px)] bg-[#dcecff] px-10 py-7">

                {/* JUDUL + FILTER */}
                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h1 className="text-2xl font-bold text-[#263238]">
                            Daftar Tempat PKL
                        </h1>

                        <p className="mt-1 text-sm text-gray-600">
                            Menampilkan daftar tempat PKL aktif dari berbagai bidang industri.
                        </p>
                    </div>

                    {/* FILTER */}
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition hover:bg-gray-50"
                    >
                        <Filter size={16} />
                        Filter
                    </button>

                </div>

                {/* DAFTAR PERUSAHAAN */}
                <div className="space-y-3">

                    {currentData.map((tempat, index) => (
                        <div
                            key={index}
                            className="flex min-h-[70px] items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
                        >

                            {/* BAGIAN KIRI */}
                            <div className="flex items-center gap-4">

                                {/* ICON PERUSAHAAN */}
                                <div className="flex h-12 w-14 items-center justify-center overflow-hidden rounded-md bg-gray-100">
                                    <Building2
                                        size={28}
                                        color="#78909c"
                                    />
                                </div>

                                {/* INFORMASI PERUSAHAAN */}
                                <div>
                                    <h2 className="text-base font-bold text-[#263238]">
                                        {tempat.nama}
                                    </h2>

                                    <div className="mt-1 flex items-center gap-4 text-xs text-gray-600">

                                        {/* LOKASI */}
                                        <span className="flex items-center gap-1">
                                            <MapPin size={13} />
                                            {tempat.lokasi}
                                        </span>

                                        {/* KUOTA */}
                                        <span>
                                            Sisa Kuota: {tempat.kuota}
                                        </span>

                                        {/* RATING */}
                                        <span className="flex items-center gap-1 text-[#f5a400]">
                                            <Star
                                                size={13}
                                                fill="#f5a400"
                                            />
                                            {tempat.rating}
                                        </span>

                                    </div>
                                </div>
                            </div>

                            {/* TOMBOL DETAIL */}
                            <button
                                type="button"
                                onClick={() =>
                                    router.push("/dashboard/detail")
                                }
                                className="rounded-md border border-[#1683ed] bg-white px-4 py-2 text-xs font-medium text-[#1683ed] transition hover:bg-[#1683ed] hover:text-white"
                            >
                                Lihat Detail
                            </button>

                        </div>
                    ))}

                </div>

                {/* PAGINATION */}
                <div className="mt-5 flex justify-center gap-2">

                    {/* SEBELUMNYA */}
                    <button
                        type="button"
                        onClick={() =>
                            goToPage(currentPage - 1)
                        }
                        disabled={currentPage === 1}
                        className="flex h-10 w-10 items-center justify-center rounded bg-white text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* NOMOR HALAMAN */}
                    {Array.from(
                        { length: totalPages },
                        (_, index) => {
                            const page = index + 1;

                            return (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() =>
                                        goToPage(page)
                                    }
                                    className={`h-10 w-10 rounded text-sm transition ${currentPage === page
                                            ? "bg-[#1478df] text-white"
                                            : "bg-white text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        }
                    )}

                    {/* BERIKUTNYA */}
                    <button
                        type="button"
                        onClick={() =>
                            goToPage(currentPage + 1)
                        }
                        disabled={
                            currentPage === totalPages
                        }
                        className="flex h-10 w-10 items-center justify-center rounded bg-white text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ChevronRight size={18} />
                    </button>

                </div>

                {/* BAGIAN BAWAH */}
                <div className="mt-8 h-20 overflow-hidden rounded-b-lg">
                    <div className="h-full w-full bg-gradient-to-t from-[#d3e7ff] to-transparent" />
                </div>

            </main>
        </div>
    );
}