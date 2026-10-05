import Link from "next/link";

function Sparkle({ className }: { className: string }) {
    return (
        <svg className={`absolute text-sky-400 ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c.8 6.2 5.8 11.2 12 12-6.2.8-11.2 5.8-12 12-.8-6.2-5.8-11.2-12-12C6.2 11.2 11.2 6.2 12 0z" />
        </svg>
    );
}

function IlustrasiBerhasil() {
    return (
        <div className="relative mx-auto h-48 w-60" aria-hidden="true">
            <Sparkle className="left-3 top-14 h-5 w-5" />
            <Sparkle className="right-6 top-3 h-6 w-6" />
            <Sparkle className="right-0 top-24 h-4 w-4" />
            <Sparkle className="left-6 bottom-6 h-3 w-3" />

            <svg viewBox="0 0 240 192" className="h-full w-full">
                {/* papan klip */}
                <g transform="rotate(-8 100 96)">
                    <rect x="52" y="22" width="110" height="150" rx="12" fill="#2f6fdc" />
                    <rect x="62" y="36" width="90" height="128" rx="6" fill="#f4f8ff" />
                    <rect x="84" y="14" width="46" height="20" rx="8" fill="#5b9bf5" />
                    {[56, 82, 108, 134].map((y) => (
                        <g key={y}>
                            <rect x="72" y={y} width="14" height="14" rx="3" fill="#2f6fdc" />
                            <path d={`M75 ${y + 7}l3 3 5-6`} stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="94" y={y + 2} width="46" height="4" rx="2" fill="#8bb8f7" />
                            <rect x="94" y={y + 9} width="30" height="4" rx="2" fill="#bcd5fa" />
                        </g>
                    ))}
                </g>
                {/* lencana centang */}
                <circle cx="168" cy="122" r="32" fill="#f7b500" />
                <circle cx="168" cy="122" r="25" fill="#ffc933" />
                <path d="M155 122l9 9 17-19" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default function PengajuanBerhasilPage() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[#eaf3ff] px-4 py-10">
            <section className="w-full max-w-xl rounded-xl bg-white px-6 py-10 text-center shadow-sm sm:px-12">
                <IlustrasiBerhasil />

                <h1 className="mt-2 text-xl font-bold text-blue-700">Pengajuan Berhasil !</h1>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                    Terima kasih! Pengajuan PKL kamu telah terkirim ke PT Digital Indonesia. Pihak perusahaan akan
                    segera menghubungi kamu melalui WhatsApp atau email.
                </p>

                <Link
                    href="/dashboard"
                    className="mt-5 inline-block w-full max-w-sm rounded-md bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                    Kembali Ke Beranda
                </Link>
            </section>
        </div>
    );
}