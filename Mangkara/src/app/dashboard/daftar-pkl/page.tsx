import { BookOpen, Clock, MapPin, Star, User } from "lucide-react";

const data = {
    nama: "PT Digital Indonesia",
    kota: "Bandung",
    rating: 4.6,
    jumlahUlasan: 120,
    tag: ["Web Development", "IT"],
    deskripsi:
        "PT Digital Indonesia adalah perusahaan teknologi terkemuka yang berfokus pada pengembangan perangkat lunak berkualitas tinggi, solusi IT enterprise, dan transformasi digital. Kami membuka kesempatan berharga bagi siswa/siswi SMK untuk belajar, berkontribusi, dan berkembang langsung bersama tim engineer profesional kami.",
    jurusan: ["RPL", "TKJ", "SI"],
    kuotaTersedia: 5,
    kuotaTotal: 10,
    durasi: "3 - 6 Bulan",
    alamat: "Jl. Merdeka No. 123, Bandung, Jawa Barat, Indonesia",
};

function InfoItem({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3.5">
            <span className="text-gray-600">{icon}</span>
            <div>
                <p className="text-[10px] text-gray-500">{label}</p>
                <p className="text-xs font-semibold">{value}</p>
            </div>
        </div>
    );
}

export default function DetailPKLPage() {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        data.alamat
    )}`;

    return (
        <div className="mx-auto max-w-[1100px] space-y-5">

            <section className="flex flex-wrap items-center gap-5 rounded-xl border border-gray-200 bg-white p-5">
                <div
                    role="img"
                    aria-label={`Kantor ${data.nama}`}
                    className="h-16 w-[88px] rounded-md bg-gradient-to-br from-slate-400 to-slate-600"
                />
                <div>
                    <h1 className="text-[22px] font-bold">{data.nama}</h1>
                    <div className="mt-2 flex items-center gap-3.5 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <MapPin size={12} /> {data.kota}
                        </span>
                        <span className="flex items-center gap-1 rounded bg-amber-100 px-1.5 py-px font-semibold text-amber-600">
                            <Star size={11} fill="currentColor" /> {data.rating}
                        </span>
                        <span>({data.jumlahUlasan} ulasan)</span>
                    </div>
                </div>
                <div className="flex gap-2 self-start md:ml-auto">
                    {data.tag.map((t, i) => (
                        <span
                            key={t}
                            className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${i === 0 ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-900"
                                }`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </section>

            <div className="grid items-start gap-5 lg:grid-cols-[1fr_280px]">
                <div className="space-y-4">
                    <section className="rounded-xl border border-gray-200 bg-white p-5">
                        <h2 className="mb-3 text-sm font-bold">Deskripsi</h2>
                        <p className="text-xs leading-relaxed text-gray-700">
                            {data.deskripsi}
                        </p>
                    </section>

                    <section className="rounded-xl border border-gray-200 bg-white p-5">
                        <h2 className="mb-3 text-sm font-bold">Informasi Magang</h2>
                        <div className="space-y-3.5">
                            <InfoItem
                                icon={<BookOpen size={18} />}
                                label="Jurusan Tersedia"
                                value={data.jurusan.join(", ")}
                            />
                            <InfoItem
                                icon={<User size={18} />}
                                label="Kuota"
                                value={`${data.kuotaTersedia} dari ${data.kuotaTotal} Tersedia`}
                            />
                            <InfoItem
                                icon={<Clock size={18} />}
                                label="Durasi"
                                value={data.durasi}
                            />
                        </div>
                    </section>
                </div>


                <aside className="rounded-xl border border-gray-200 bg-white p-5">
                    <h2 className="mb-3 text-sm font-bold">Lokasi Perusahaan</h2>
                    <p className="mb-3 text-[11px] leading-normal text-gray-500">
                        {data.alamat}
                    </p>
                    <div
                        role="img"
                        aria-label="Peta lokasi"
                        className="mb-3.5 grid h-36 place-items-center rounded-md bg-blue-100 text-[11px] text-gray-700"
                    >

                        {data.kota}, Jawa Barat
                    </div>
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-3.5 block rounded-md bg-gray-100 py-2.5 text-center text-xs font-semibold hover:bg-gray-200"
                    >
                        Lihat di Google Maps
                    </a>
                    <button
                        type="button"
                        className="w-full rounded-md bg-blue-600 py-3 text-xs font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Ajukan PKL Sekarang
                    </button>
                </aside>
            </div>
        </div>
    );
}
