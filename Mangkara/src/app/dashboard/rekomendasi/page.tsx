"use client";

import { useRouter } from "next/navigation";
import { Building2, MapPin, Star, RefreshCw } from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";
import { useApi } from "@/lib/api";

/* ============================================================
   TIPE DATA TEMPAT PKL
============================================================ */
type TempatPKL = {
    id: string;
    nama: string;
    lokasi: string;
    kuota: number | string;
    rating: number | string;
    gambar: string;
};

/* ============================================================
   DATA CADANGAN (FALLBACK)
   Digunakan jika backend belum aktif atau data masih kosong
============================================================ */
const daftarRekomendasiCadangan: TempatPKL[] = [
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
   FUNGSI HELPER: NORMALISASI DATA BACKEND (Strapi / REST API)
============================================================ */
function normalisasiData(raw: any): TempatPKL[] {
    if (!raw) return [];
    
    // Mendukung format Strapi ({ data: [...] }) maupun format JSON REST langsung ([...])
    const list = Array.isArray(raw) 
        ? raw 
        : Array.isArray(raw?.data) 
        ? raw.data 
        : [];

    if (list.length === 0) return [];

    return list.map((item: any, idx: number) => {
        // Handle Strapi attributes wrapping jika ada
        const attr = item?.attributes || item;

        // Ekstraksi URL gambar jika berupa relasi media Strapi atau string URL
        const imgUrl =
            attr?.gambar?.data?.attributes?.url ||
            attr?.gambar?.url ||
            attr?.gambar ||
            attr?.foto ||
            daftarRekomendasiCadangan[idx % daftarRekomendasiCadangan.length]?.gambar;

        // Prefix base URL backend jika gambar berupa relative path (contoh: /uploads/...)
        const finalImgUrl =
            typeof imgUrl === "string" && imgUrl.startsWith("http")
                ? imgUrl
                : typeof imgUrl === "string" && imgUrl.startsWith("/")
                ? `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}${imgUrl}`
                : daftarRekomendasiCadangan[idx % daftarRekomendasiCadangan.length]?.gambar;

        return {
            id: String(item?.id ?? idx + 1),
            nama: attr?.nama || attr?.nama_perusahaan || attr?.name || "Tempat PKL",
            lokasi: attr?.lokasi || attr?.kota || attr?.alamat || "Indonesia",
            kuota: attr?.kuota ?? attr?.sisa_kuota ?? 0,
            rating: attr?.rating ?? 4.5,
            gambar: finalImgUrl,
        };
    });
}

/* ============================================================
   HALAMAN REKOMENDASI PKL
============================================================ */
export default function RekomendasiPage() {
    const router = useRouter();

    // 1. Hubungkan ke backend melalui endpoint /rekomendasi
    //    useApi otomatis menyertakan Bearer Token JWT dari localStorage jika ada
    const { data: responseBackend, error, reload } = useApi("/rekomendasi");

    // 2. Olah data dari backend; jika belum ada atau backend offline, pakai data cadangan
    const dataBackend = normalisasiData(responseBackend);
    const daftarRekomendasi = dataBackend.length > 0 ? dataBackend : daftarRekomendasiCadangan;

    return (
        <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-white px-4 py-6 pb-28 sm:px-6 sm:pb-36 md:px-8 lg:px-10">
            {/* ---------- JUDUL & STATUS KONEKSI ---------- */}
            <header className="max-w-4xl flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-[#263238] sm:text-[22px]">
                        Rekomendasi Untukmu
                    </h1>

                    <p className="mt-1 text-xs leading-relaxed text-[#78909c]">
                        Tempat PKL terbaik yang dikurasi khusus berdasarkan jurusan
                        dan kompetensi keahlianmu.
                    </p>
                </div>

                {/* Tombol reload data dari backend */}
                <button
                    type="button"
                    onClick={() => reload()}
                    title="Muat ulang data dari server"
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition shrink-0"
                >
                    <RefreshCw size={14} />
                </button>
            </header>

            {/* Status jika ada info koneksi atau backend */}
            {dataBackend.length > 0 && (
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Terhubung ke backend ({dataBackend.length} data)
                </div>
            )}

            {/* ---------- DAFTAR KARTU ---------- */}
            <div className="mt-5 max-w-4xl space-y-3.5 sm:mt-7 sm:space-y-4">
                {daftarRekomendasi.map((tempat) => (
                    <article
                        key={tempat.id}
                        className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white p-3.5 shadow-sm transition hover:shadow-md"
                    >
                        {/* BAGIAN ATAS: FOTO + INFORMASI */}
                        <div className="flex items-center gap-3.5">
                            {/* Thumbnail */}
                            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                <Building2 size={22} className="absolute inset-0 m-auto text-slate-300" />

                                <img
                                    src={tempat.gambar}
                                    alt={tempat.nama}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>

                            {/* Teks */}
                            <div className="min-w-0 flex-1">
                                <h2 className="text-sm font-bold text-gray-900 truncate">
                                    {tempat.nama}
                                </h2>

                                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                                    {/* Lokasi */}
                                    <span className="flex shrink-0 items-center gap-1">
                                        <MapPin size={12} className="text-gray-400" />
                                        {tempat.lokasi}
                                    </span>

                                    {/* Kuota */}
                                    <span className="shrink-0">
                                        Sisa Kuota:{" "}
                                        <b className="text-blue-600 font-semibold">
                                            {tempat.kuota}
                                        </b>
                                    </span>

                                    {/* Rating */}
                                    <span className="flex shrink-0 items-center gap-1 font-semibold text-[#f5a400]">
                                        <Star size={12} fill="currentColor" className="shrink-0" />
                                        {tempat.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* BAGIAN BAWAH: TOMBOL KUNING LIHAT DETAIL */}
                        <div>
                            <button
                                type="button"
                                onClick={() => router.push(`/dashboard/detail/${tempat.id}`)}
                                className="rounded-lg border border-[#f5c43b] bg-[#fff082] hover:bg-[#ffe566] px-4 py-1.5 text-xs font-semibold text-[#1976ff] transition active:scale-[0.98] inline-block"
                            >
                                Lihat Detail
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </main>
    );
}
