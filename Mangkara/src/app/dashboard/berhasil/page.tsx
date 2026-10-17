"use client";

import { useRouter } from "next/navigation";
import { Clock3, FileCheck2 } from "lucide-react";

export default function BerhasilPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#dcecff] flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10">

            <div className="w-full max-w-[650px]">

                {/* ICON BERHASIL */}
                <div className="mb-5 flex justify-center">
                    <img
                        src="/berhasil.png"
                        alt="Berhasil"
                        className="h-auto w-3/5 max-w-[390px] object-contain"
                    />
                </div>

                {/* JUDUL */}
                <div className="mb-6 text-center">
                    <h1 className="text-xl font-bold text-[#263238] sm:text-2xl">
                        Pengajuan Berhasil!
                    </h1>


                </div>

                {/* STATUS 1 */}
                <div className="mb-3 flex items-start gap-3 rounded-lg bg-white px-4 py-4 shadow-sm sm:gap-4 sm:px-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1683ed] sm:h-11 sm:w-11">
                        <Clock3
                            size={21}
                            color="white"
                            strokeWidth={2}
                        />
                    </div>

                    <div className="min-w-0">
                        <h2 className="text-sm font-bold text-[#263238]">
                            Sedang diproses oleh Admin
                        </h2>

                        <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
                            Pengajuan PKL kamu sudah terkirim melalui
                            Google Form dan sedang dalam tahap
                            pemeriksaan oleh admin.
                        </p>
                    </div>
                </div>

                {/* STATUS 2 */}
                <div className="mb-5 flex items-start gap-3 rounded-lg bg-white px-4 py-4 shadow-sm sm:gap-4 sm:px-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#287fe0] sm:h-11 sm:w-11">
                        <FileCheck2
                            size={21}
                            color="white"
                            strokeWidth={2}
                        />
                    </div>

                    <div className="min-w-0">
                        <h2 className="text-sm font-bold text-[#263238]">
                            Yang akan dilakukan selanjutnya
                        </h2>

                        <div className="mt-1 space-y-1 text-xs leading-5 text-gray-600 sm:text-sm">
                            <p>
                                1. Admin akan memeriksa data dan
                                dokumen yang kamu kirim.
                            </p>

                            <p>
                                2. Jika sudah sesuai, kamu akan
                                mendapatkan notifikasi melalui akun
                                MANGKARA.
                            </p>
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <button
                    type="button"
                    onClick={() => router.push("/dashboard/beranda")}
                    className="w-full rounded-md bg-[#1683ed] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#096dcc] active:scale-[0.99]"
                >
                    Kembali Ke Beranda
                </button>

            </div>
        </div>
    );
}