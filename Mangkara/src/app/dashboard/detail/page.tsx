"use client";

import { useRouter } from "next/navigation";

import {
    Building2,
    MapPin,
    Star,
    BookOpen,
    User,
    Clock,
    ExternalLink,
} from "lucide-react";

/* ================= DATA ================= */

// Isi dengan URL / path foto perusahaan (contoh: "/images/pt-digital.jpg").
// Kalau dikosongkan, otomatis tampil ikon gedung.
const LOGO_URL = "";

const INFO_MAGANG = [
    { label: "Jurusan Tersedia", value: "PPLG", icon: BookOpen },
    { label: "Kuota", value: "5 dari 10 Tersedia", icon: User },
    { label: "Durasi", value: "4 Bulan", icon: Clock },
    { label: "Jam kerja", value: "8 pagi - 4 sore", icon: Clock },
];

// Jumlah ulasan untuk bintang 1 sampai 5
const DISTRIBUSI_RATING = [
    { bintang: 1, jumlah: 0 },
    { bintang: 2, jumlah: 0 },
    { bintang: 3, jumlah: 0 },
    { bintang: 4, jumlah: 33 },
    { bintang: 5, jumlah: 34 },
];

const ULASAN = [
    {
        nama: "Jane Doe",
        tanggal: "08/10/26",
        bintang: 5,
        isi: "Sangat direkomendasikan karena siswa langsung belajar koding, framework modern, dan merasakan alur proyek nyata.",
    },
    {
        nama: "Tina",
        tanggal: "04/10/26",
        bintang: 5,
        isi: "Suasana kerjanya dinamis dan cepat, sangat bagus untuk belajar full-stack development sekaligus desain UI/UX.",
    },
    {
        nama: "Nina",
        tanggal: "03/10/26",
        bintang: 5,
        isi: "Fokusnya lebih ke pemeliharaan sistem internal, jaringan kantor, atau pengelolaan database operasional.",
    },
];

/* ================= KOMPONEN KECIL ================= */

function Bintang({ jumlah, size = 12 }: { jumlah: number; size?: number }) {
    return (
        <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    strokeWidth={1.5}
                    fill={i < jumlah ? "#fde047" : "none"}
                    className={i < jumlah ? "text-[#a16207]" : "text-slate-300"}
                />
            ))}
        </span>
    );
}

function Avatar({ size = "h-9 w-9" }: { size?: string }) {
    return (
        <div
            className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#1677dc]`}
        >
            <User size={18} />
        </div>
    );
}

/* ================= HALAMAN ================= */

export default function DetailPKLPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-8">

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">

                {/* ================= HEADER PERUSAHAAN ================= */}
                <div className="min-w-0 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:col-span-2">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex min-w-0 items-center gap-4">

                            {/* LOGO / FOTO */}
                            <div className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#eef7fb]">
                                {LOGO_URL ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={LOGO_URL}
                                        alt="PT Digital Indonesia"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <Building2
                                        size={30}
                                        strokeWidth={1.8}
                                        className="text-[#78909c]"
                                    />
                                )}
                            </div>

                            {/* NAMA + INFO */}
                            <div className="min-w-0">
                                <h1 className="text-xl font-bold leading-tight text-[#263238]">
                                    PT Digital Indonesia
                                </h1>

                                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={13} />
                                        Bandung
                                    </span>

                                    <span className="flex items-center gap-1 font-semibold text-[#f5a400]">
                                        <Star size={13} fill="#f5a400" />
                                        4,6
                                    </span>

                                    <span>(120 ulasan)</span>
                                </div>
                            </div>
                        </div>

                        {/* KATEGORI */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[11px] text-[#1677dc]">
                                Web Development
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
                                IT
                            </span>
                        </div>

                    </div>
                </div>


                {/* ================= DESKRIPSI ================= */}
                <section className="min-w-0 rounded-xl border border-slate-200 bg-white px-5 py-4 lg:col-start-1">

                    <h2 className="mb-2 text-sm font-bold text-[#263238]">
                        Deskripsi
                    </h2>

                    <p className="text-xs leading-6 text-slate-600">
                        PT Digital Indonesia adalah perusahaan teknologi
                        terkemuka yang berfokus pada pengembangan perangkat
                        lunak berkualitas tinggi, solusi IT enterprise, dan
                        transformasi digital. Kami membuka kesempatan berharga
                        bagi siswa/siswi SMK untuk belajar, berkontribusi, dan
                        berkembang langsung bersama tim engineer profesional
                        kami.
                    </p>

                </section>


                {/* ================= INFORMASI MAGANG ================= */}
                <section className="min-w-0 rounded-xl border border-slate-200 bg-white px-5 py-4 lg:col-start-1">

                    <h2 className="mb-3 text-sm font-bold text-[#263238]">
                        Informasi Magang
                    </h2>

                    <div className="space-y-3">
                        {INFO_MAGANG.map(({ label, value, icon: Icon }) => (
                            <div key={label} className="flex items-start gap-3">
                                <Icon
                                    size={16}
                                    className="mt-0.5 shrink-0 text-[#455a64]"
                                />
                                <div className="min-w-0">
                                    <p className="text-[10px] leading-tight text-slate-500">
                                        {label}
                                    </p>
                                    <p className="text-xs font-bold text-[#263238]">
                                        {value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>


                {/* ================= RINGKASAN RATING ================= */}
                <section className="min-w-0 rounded-xl border border-slate-200 bg-white px-5 py-4 lg:col-start-1">

                    <div className="flex flex-wrap items-center gap-6 sm:gap-10">

                        {/* NILAI RATA-RATA */}
                        <div className="flex flex-col items-center">
                            <p className="text-3xl font-bold leading-none text-[#263238]">
                                4,5
                            </p>
                            <div className="mt-1.5">
                                <Bintang jumlah={5} size={11} />
                            </div>
                            <p className="mt-1 text-[10px] font-semibold text-[#263238]">
                                total 67 ulasan
                            </p>
                        </div>

                        {/* DISTRIBUSI BINTANG */}
                        <div className="flex items-center gap-2">
                            {DISTRIBUSI_RATING.map(({ bintang, jumlah }) => (
                                <div
                                    key={bintang}
                                    className="flex h-12 w-12 flex-col items-center justify-between rounded-lg bg-[#7575f7] pb-0.5 pt-1.5 sm:h-14 sm:w-14"
                                >
                                    <span className="text-xl font-extrabold leading-none text-black sm:text-2xl">
                                        {jumlah}
                                    </span>
                                    <span className="text-[10px] font-bold leading-none text-white">
                                        {bintang}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                </section>


                {/* ================= RATING DAN ULASAN ================= */}
                <section className="min-w-0 rounded-xl border border-slate-200 bg-white px-5 py-4 lg:col-start-1">

                    <h2 className="mb-4 text-sm font-bold text-[#263238]">
                        Rating dan ulasan
                    </h2>

                    <div className="space-y-4">
                        {ULASAN.map((u) => (
                            <div key={u.nama} className="flex items-start gap-3">
                                <Avatar />

                                <div className="min-w-0">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[9px] text-slate-500">
                                            {u.tanggal}
                                        </span>
                                        <Bintang jumlah={u.bintang} size={10} />
                                    </div>

                                    <p className="text-xs font-bold text-[#263238]">
                                        {u.nama}
                                    </p>

                                    <p className="mt-1.5 text-[11px] leading-5 text-slate-600">
                                        {u.isi}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/ulasan")}
                        className="mt-4 text-[10px] font-medium text-[#1677dc] hover:underline"
                    >
                        Lihat semua ulasan →
                    </button>

                </section>


                {/* ================= BERIKAN ULASAN ================= */}
                <div className="flex min-w-0 items-center gap-3 rounded-[28px] border border-[#3b82f6] bg-[#e8eeff] px-4 py-4 lg:col-start-1">

                    <Avatar size="h-10 w-10" />

                    <input
                        type="text"
                        placeholder="Berikan Ulasan..."
                        className="h-8 min-w-0 flex-1 rounded-full bg-white px-4 text-xs font-semibold text-[#263238] outline-none placeholder:text-[#263238] focus:ring-2 focus:ring-[#3b82f6]"
                    />

                </div>


                {/* ================= LOKASI (KANAN, sejajar rating) ================= */}
                <section className="min-w-0 self-start rounded-md border border-slate-200 bg-white px-4 py-4 lg:col-start-2 lg:row-span-3 lg:row-start-4">

                    <h2 className="mb-2 text-xs font-bold text-[#263238]">
                        Lokasi Perusahaan
                    </h2>

                    <p className="text-[10px] leading-4 text-slate-600">
                        Jl. Merdeka No. 123, Bandung, Jawa Barat, Indonesia
                    </p>

                    {/* MAP */}
                    <div className="mx-auto mt-4 h-28 w-4/5 overflow-hidden rounded-sm bg-[#dcebd7]">
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
                        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                        <ExternalLink size={12} />
                        Lihat di Google Maps
                    </a>

                    {/* KEMBALI */}
                    <button
                        type="button"
                        onClick={() => router.push("/dashboard")}
                        className="mt-3 w-full rounded-md bg-[#2f8cf0] px-4 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#1478df]"
                    >
                        Kembali Ke Beranda
                    </button>

                </section>

            </div>

        </div>
    );
}
