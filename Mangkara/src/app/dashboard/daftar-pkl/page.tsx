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

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    const totalPages = Math.ceil(
        dataTempat.length / itemsPerPage
    );

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const currentData = dataTempat.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="min-h-screen bg-[#dcecff]">

            <main className="w-full px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8">

                {/* HEADER HALAMAN */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0">
                        <h1 className="text-xl font-bold leading-tight text-[#263238] sm:text-2xl">
                            Daftar Tempat PKL
                        </h1>

                        <p className="mt-2 max-w-xl text-xs leading-5 text-gray-600 sm:text-sm">
                            Menampilkan daftar tempat PKL aktif
                            dari berbagai bidang industri.
                        </p>
                    </div>

                    {/* FILTER */}
                    <button
                        type="button"
                        className="flex w-fit shrink-0 items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
                    >
                        <Filter size={15} />
                        Filter
                    </button>

                </div>


                {/* DAFTAR CARD */}
                <div className="mx-auto w-full max-w-4xl">

                    <div className="grid grid-cols-1 gap-3">

                        {currentData.map((item, index) => (
                            <div
                                key={index}
                                className="w-full rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                            >

                                <div className="flex items-center gap-3 sm:gap-4">

                                    {/* ICON PERUSAHAAN */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-12 sm:w-12">
                                        <Building2
                                            size={21}
                                            className="text-[#78909c]"
                                        />
                                    </div>


                                    {/* INFORMASI */}
                                    <div className="min-w-0 flex-1">

                                        <h2 className="truncate text-sm font-bold text-[#263238] sm:text-base">
                                            {item.nama}
                                        </h2>

                                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-gray-500 sm:text-xs">

                                            <span className="flex items-center gap-1">
                                                <MapPin size={11} />
                                                {item.lokasi}
                                            </span>

                                            <span>
                                                Sisa Kuota: {item.kuota}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Star
                                                    size={11}
                                                    className="fill-yellow-400 text-yellow-400"
                                                />
                                                {item.rating}
                                            </span>

                                        </div>

                                    </div>


                                    {/* BUTTON */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            router.push(
                                                "/dashboard/detail"
                                            )
                                        }
                                        className="shrink-0 rounded-md border border-[#1478df] px-2 py-2 text-[9px] font-medium leading-tight text-[#1478df] transition hover:bg-[#1478df] hover:text-white sm:px-4 sm:text-xs"
                                    >
                                        <span className="hidden sm:inline">
                                            Lihat Detail
                                        </span>

                                        <span className="sm:hidden">
                                            Detail
                                        </span>
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>


                    {/* PAGINATION */}
                    <div className="mt-6 flex items-center justify-center gap-2">

                        {/* PREVIOUS */}
                        <button
                            type="button"
                            onClick={() =>
                                goToPage(currentPage - 1)
                            }
                            disabled={currentPage === 1}
                            className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-gray-500 shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ChevronLeft size={17} />
                        </button>


                        {/* NOMOR HALAMAN */}
                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => goToPage(page)}
                                className={`flex h-9 w-9 items-center justify-center rounded-md text-xs font-medium transition ${currentPage === page
                                        ? "bg-[#1478df] text-white"
                                        : "bg-white text-gray-600 shadow-sm hover:bg-gray-50"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}


                        {/* NEXT */}
                        <button
                            type="button"
                            onClick={() =>
                                goToPage(currentPage + 1)
                            }
                            disabled={
                                currentPage === totalPages
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-gray-500 shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ChevronRight size={17} />
                        </button>

                    </div>

                </div>

            </main>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </div>
    );
}