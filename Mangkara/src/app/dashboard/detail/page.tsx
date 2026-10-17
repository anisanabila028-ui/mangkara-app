import Link from "next/link";
import {
    MapPin,
    Star,
    GraduationCap,
    Users,
    Clock,
    Building2,
} from "lucide-react";

/**
 * Data sementara (dummy). Nanti ganti dengan data dari backend,
 * misalnya lewat useApi("/perusahaan/ID") dari "@/lib/api".
 */
const perusahaan = {
    nama: "PT Digital Indonesia",
    kota: "Bandung",
    rating: 4.6,
    jumlahUlasan: 120,
    kategori: ["Web Development", "IT"],
    logo: "", // isi dengan alamat gambar, kosong = tampil gambar placeholder
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
    { ikon: GraduationCap, label: "Jurusan Tersedia", nilai: perusahaan.jurusan },
    {
        ikon: Users,
        label: "Kuota",
        nilai: `${perusahaan.kuotaTersedia} dari ${perusahaan.kuotaTotal} Tersedia`,
    },
    { ikon: Clock, label: "Durasi", nilai: perusahaan.durasi },
    { ikon: Clock, label: "Jam kerja", nilai: perusahaan.jamKerja },
];

export default function DetailPerusahaanPage() {
    const kueriPeta = encodeURIComponent(
        `${perusahaan.nama} ${perusahaan.kota}`
    );

    return (
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Header perusahaan */}
            <section className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="h-20 w-full sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                    {perusahaan.logo ? (
                        <img
                            src={perusahaan.logo}
                            alt={perusahaan.nama}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <Building2 size={28} className="text-gray-400" />
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#263238]">
                        {perusahaan.nama}
                    </h1>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {perusahaan.kota}
                        </span>
                        <span className="flex items-center gap-1">
                            <Star size={12} className="fill-amber-400 text-amber-400" />
                            <span className="font-semibold text-amber-500">
                                {perusahaan.rating}
                            </span>
                            <span>({perusahaan.jumlahUlasan} ulasan)</span>
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:justify-end">
                    {perusahaan.kategori.map((k, i) => (
                        <span
                            key={k}
                            className={`rounded-full px-3 py-1 text-[11px] font-medium ${i === 0
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {k}
                        </span>
                    ))}
                </div>
            </section>

            {/* Isi: kiri (deskripsi + info) dan kanan (lokasi) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
                <div className="space-y-6">
                    {/* Deskripsi */}
                    <section className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                        <h2 className="text-sm font-bold text-[#263238]">Deskripsi</h2>
                        <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-gray-500">
                            {perusahaan.deskripsi}
                        </p>
                    </section>

                    {/* Informasi magang */}
                    <section className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                        <h2 className="text-sm font-bold text-[#263238]">
                            Informasi Magang
                        </h2>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                            {infoMagang.map((item, i) => {
                                const Ikon = item.ikon;
                                return (
                                    <div key={i} className="flex items-start gap-3">
                                        <Ikon size={16} className="mt-0.5 text-gray-500 shrink-0" />
                                        <div>
                                            <p className="text-[11px] text-gray-400">{item.label}</p>
                                            <p className="text-xs font-semibold text-[#263238]">
                                                {item.nilai}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Lokasi perusahaan */}
                <aside className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                    <h2 className="text-sm font-bold text-[#263238]">
                        Lokasi Perusahaan
                    </h2>
                    <p className="mt-3 text-xs text-gray-500">{perusahaan.alamat}</p>

                    <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                        <iframe
                            title={`Peta ${perusahaan.nama}`}
                            src={`https://www.google.com/maps?q=${kueriPeta}&output=embed`}
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${kueriPeta}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex h-9 w-full items-center justify-center rounded-lg bg-gray-100 text-xs font-medium text-gray-600 hover:bg-gray-200 transition"
                    >
                        Lihat di Google Maps
                    </a>

                    <Link
                        href="/dashboard/ajukan"
                        className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-[#2f8de4] text-xs font-semibold text-white hover:bg-[#2580d3] transition"
                    >
                        Ajukan PKL
                    </Link>
                </aside>
            </div>
        </div>
    );
}