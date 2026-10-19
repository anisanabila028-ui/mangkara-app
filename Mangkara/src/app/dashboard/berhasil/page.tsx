"use client";

import { useRouter } from "next/navigation";
import { Check, Clock3 } from "lucide-react";

export default function BerhasilPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f0f6ff] flex flex-col items-center justify-center py-4 px-4">
            {/* KONTAINER UTAMA (TANPA CARD PEMBUNGKUS BESAR) */}
            <div className="w-full max-w-[440px] flex flex-col space-y-5">

                {/* JUDUL */}
                <div>
                    <h1 className="text-[17px] font-bold text-black mb-1 ml-1 text-center sm:text-left">
                        Pengajuan PKL
                    </h1>
                </div>

                {/* ILUSTRASI BERHASIL */}
                <div className="flex justify-center py-2">
                    <img
                        src="/berhasil.png"
                        alt="Pengajuan Berhasil"
                        className="w-full max-w-[200px] h-auto object-contain"
                    />
                </div>

                {/* STATUS CARD 1: SEDANG DIPROSES */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1976ff] text-white">
                        <Clock3 size={20} strokeWidth={2.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-bold text-gray-900">
                            Sedang di proses oleh Admin
                        </h2>
                        <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                            Pengajuan PKL kamu sudah terkirim melalui Google Form dan sedang dalam tahap pemeriksaan oleh admin.
                        </p>
                    </div>
                </div>

                {/* STATUS CARD 2: YANG AKAN DILAKUKAN */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1976ff] text-white">
                        <Check size={20} strokeWidth={2.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-bold text-gray-900">
                            Yang akan dilakukan selanjutnya
                        </h2>
                        <div className="mt-1 text-xs text-gray-600 leading-relaxed space-y-0.5">
                            <p>1. Admin akan memeriksa data dan dokumen yang kamu kirim.</p>
                            <p>2. Jika sudah sesuai, kamu akan mendapatkan notifikasi melalui akun MANGKARA.</p>
                        </div>
                    </div>
                </div>

                {/* BUTTON KEMBALI KE BERANDA */}
                <div className="pt-2">
                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/beranda")}
                        className="w-full h-11 bg-[#1976ff] hover:bg-[#1565c0] text-white text-sm font-bold rounded-xl shadow-md shadow-blue-200 transition active:scale-[0.99]"
                    >
                        Kembali Ke Beranda
                    </button>
                </div>

            </div>
        </div>
    );
}