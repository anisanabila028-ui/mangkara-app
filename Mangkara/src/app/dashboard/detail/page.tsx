import Link from "next/link";
import {
    MapPin,
    Star,
    BookOpen,
    User,
    Clock,
    Building2,
} from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

const perusahaan = {
    nama: "PT Digital Indonesia",
    kota: "Bandung",
    rating: 4.6,
    jumlahUlasan: 120,
    kategori: ["Web Development", "IT"],
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
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
    { ikon: BookOpen, label: "Jurusan Tersedia", nilai: perusahaan.jurusan },
    {
        ikon: User,
        label: "Kuota",
        nilai: `${perusahaan.kuotaTersedia} dari ${perusahaan.kuotaTotal} Tersedia`,
    },
    { ikon: Clock, label: "Durasi", nilai: perusahaan.durasi },
    { ikon: Clock, label: "Jam kerja", nilai: perusahaan.jamKerja },
];

export default function DetailPerusahaanPage() {
    const kueriPeta = encodeURIComponent(
        `${perusahaan.nama} ${perusahaan.alamat}`
    );

    return (
        <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6">
            <div className="w-full max-w-2xl mx-auto space-y-4">

                {/* 1. Header Perusahaan Card */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-sm space-y-3">
                    <div className="flex items-center gap-3.5">
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                            <img
                                src={perusahaan.logo}
                                alt={perusahaan.nama}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h1 className="text-base font-bold text-gray-900 truncate">
                                {perusahaan.nama}
                            </h1>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                    <MapPin size={12} className="text-gray-400" />
                                    {perusahaan.kota}
                                </span>
                                <span>
                                    Sisa Kuota:{" "}
                                    <b className="text-blue-600 font-semibold">{perusahaan.kuotaTersedia}</b>
                                </span>
                                <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                                    <Star size={12} fill="currentColor" className="shrink-0" />
                                    {perusahaan.rating}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Kategori Tags */}
                    <div className="flex items-center gap-2 pt-1">
                        <span className="rounded-lg bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                            Web Development
                        </span>
                        <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                            IT
                        </span>
                    </div>
                </div>

                {/* 2. Card Deskripsi */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-sm space-y-2">
                    <h2 className="text-sm font-bold text-gray-900">
                        Deskripsi
                    </h2>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600">
                        {perusahaan.deskripsi}
                    </p>
                </div>

                {/* 3. Card Informasi Magang */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-sm space-y-3.5">
                    <h2 className="text-sm font-bold text-gray-900">
                        Informasi Magang
                    </h2>
                    <div className="space-y-3">
                        {infoMagang.map((item, i) => {
                            const Ikon = item.ikon;
                            return (
                                <div key={i} className="flex items-start gap-3">
                                    <Ikon size={18} className="mt-0.5 text-gray-600 shrink-0" />
                                    <div>
                                        <p className="text-[11px] text-gray-400">{item.label}</p>
                                        <p className="text-xs font-bold text-gray-900">
                                            {item.nilai}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Card Lokasi Perusahaan */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-sm space-y-3">
                    <div>
                        <h2 className="text-sm font-bold text-gray-900">
                            Lokasi Perusahaan
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">{perusahaan.alamat}</p>
                    </div>

                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-100">
                        <iframe
                            title={`Peta ${perusahaan.nama}`}
                            src={`https://www.google.com/maps?q=${kueriPeta}&output=embed`}
                            className="h-full w-full border-0"
                            loading="lazy"
                        />
                    </div>

                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${kueriPeta}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-full items-center justify-center rounded-xl border border-gray-200 bg-white text-xs font-bold text-gray-800 hover:bg-gray-50 transition shadow-sm"
                    >
                        Lihat di Google Maps
                    </a>
                </div>

                {/* 5. Card Tombol Ajukan PKL */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-sm">
                    <Link
                        href="/dashboard/ajukan"
                        className="flex h-11 w-full items-center justify-center rounded-xl bg-[#1976ff] hover:bg-[#1565c0] text-sm font-bold text-white shadow-md shadow-blue-200 transition active:scale-[0.99]"
                    >
                        Ajukan PKL
                    </Link>
                </div>

            </div>

            {/* ---------- ORNAMEN BAWAH ---------- */}
            <BottomOrnament />
        </div>
    );
}