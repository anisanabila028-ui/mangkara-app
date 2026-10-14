"use client";

import { useRouter } from "next/navigation";
import { Building2, MapPin, Star } from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

/* ============================================================
   TIPE DATA
============================================================ */
type TempatPKL = {
    id: string;
    nama: string;
    lokasi: string;
    kuota: number;
    rating: number;
    gambar: string;
};

/* ============================================================
   DATA REKOMENDASI (masih statis, bisa dipindah ke src/data)
============================================================ */
const daftarRekomendasi: TempatPKL[] = [
    {
        id: "1",
        nama: "PT Digital Indonesia",
        lokasi: "Bandung",
        kuota: 5,
        rating: 4.6,
        gambar:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    },
    {
        id: "2",
        nama: "CV Kreatif Nusantara",
        lokasi: "Cimahi",
        kuota: 3,
        rating: 4.4,
        gambar:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    },
    {
        id: "3",
        nama: "Telkom Indonesia",
        lokasi: "Jakarta",
        kuota: 2,
        rating: 4.3,
        gambar:
            "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=300&q=80",
    },
];

/* ============================================================
   HALAMAN REKOMENDASI
============================================================ */
export default function RekomendasiPage() {
    const router = useRouter();

    return (
        <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-white px-5 py-8 md:px-8 lg:px-10">
            {/* ---------- JUDUL ---------- */}
            <header className="max-w-4xl">
                <h1 className="text-[22px] font-bold text-[#263238]">
                    Rekomendasi Untukmu
                </h1>

                <p className="mt-1 text-xs text-[#78909c]">
                    Tempat PKL terbaik yang dikurasi khusus berdasarkan jurusan
                    dan kompetensi keahlianmu.
                </p>
            </header>

            {/* ---------- DAFTAR KARTU ---------- */}
            <div className="mt-7 max-w-4xl space-y-4">
                {daftarRekomendasi.map((tempat) => (
                    <article
                        key={tempat.id}
                        className="flex flex-col gap-4 rounded-xl border border-[#eef1f5] bg-white px-4 py-3 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                    >
                        {/* BAGIAN KIRI: FOTO + INFORMASI */}
                        <div className="flex min-w-0 items-center gap-4">
                            {/* Thumbnail (icon sebagai cadangan jika gambar gagal dimuat) */}
                            <div className="relative flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-100">
                                <Building2 size={22} className="text-slate-400" />

                                <img
                                    src={tempat.gambar}
                                    alt={tempat.nama}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    onError={(e) => {
                                        // Sembunyikan gambar kalau URL-nya gagal,
                                        // biar icon Building2 di belakangnya tampil.
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>

                            {/* Teks */}
                            <div className="min-w-0">
                                <h2 className="truncate text-sm font-bold text-[#263238]">
                                    {tempat.nama}
                                </h2>

                                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#78909c]">
                                    {/* Lokasi */}
                                    <span className="flex items-center gap-1">
                                        <MapPin size={13} />
                                        {tempat.lokasi}
                                    </span>

                                    {/* Kuota */}
                                    <span>
                                        Sisa Kuota:{" "}
                                        <b className="text-[#1976ff]">
                                            {tempat.kuota}
                                        </b>
                                    </span>

                                    {/* Rating */}
                                    <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                                        <Star size={13} fill="currentColor" />
                                        {tempat.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* BAGIAN KANAN: TOMBOL DETAIL */}
                        <button
                            type="button"
                            onClick={() => router.push("/dashboard/detail")}
                            className="shrink-0 self-start rounded-lg border border-[#f5c43b] bg-[#fffdf0] px-4 py-2 text-xs font-medium text-[#1976ff] transition hover:bg-[#fff7d6] sm:self-auto"
                        >
                            Lihat Detail
                        </button>
                    </article>
                ))}
            </div>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </main>
    );
}
