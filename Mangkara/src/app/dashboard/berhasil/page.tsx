"use client";

import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

export default function BerhasilPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-[#eef6ff] flex items-center justify-center px-5">
            <div className="w-full max-w-[500px]">
                {/* CARD */}
                <div className="bg-white rounded-[14px] px-10 py-8 text-center shadow-sm">

                    {/* ILUSTRASI */}
                    <div className="flex justify-center mb-5">
                        <div className="relative w-[140px] h-[130px]">

                            {/* Bintang kiri */}
                            <span className="absolute left-[5px] top-[35px] text-[#72b6f5] text-[25px]">
                                ✦
                            </span>

                            {/* Bintang atas */}
                            <span className="absolute right-[25px] top-[5px] text-[#72b6f5] text-[22px]">
                                ✦
                            </span>

                            {/* Bintang kanan */}
                            <span className="absolute right-[0px] bottom-[35px] text-[#72b6f5] text-[18px]">
                                ✦
                            </span>

                            {/* CLIPBOARD */}
                            <div className="absolute left-[32px] top-[18px]">
                                <div className="relative">

                                    {/* Badan clipboard */}
                                    <div className="w-[75px] h-[92px] bg-[#2580ed] rounded-[10px] rotate-[-5deg] flex items-center justify-center shadow-md">
                                        <div className="w-[57px] h-[70px] bg-white rounded-[4px] p-[9px]">

                                            {/* Baris 1 */}
                                            <div className="flex items-center gap-[5px] mb-[8px]">
                                                <div className="w-[9px] h-[9px] border-[2px] border-[#2580ed] rounded-[2px]" />
                                                <div className="w-[28px] h-[5px] bg-[#2580ed] rounded-full" />
                                            </div>

                                            {/* Baris 2 */}
                                            <div className="flex items-center gap-[5px] mb-[8px]">
                                                <div className="w-[9px] h-[9px] border-[2px] border-[#2580ed] rounded-[2px]" />
                                                <div className="w-[31px] h-[5px] bg-[#69aff3] rounded-full" />
                                            </div>

                                            {/* Baris 3 */}
                                            <div className="flex items-center gap-[5px] mb-[8px]">
                                                <div className="w-[9px] h-[9px] border-[2px] border-[#2580ed] rounded-[2px]" />
                                                <div className="w-[26px] h-[5px] bg-[#69aff3] rounded-full" />
                                            </div>

                                            {/* Baris 4 */}
                                            <div className="flex items-center gap-[5px]">
                                                <div className="w-[9px] h-[9px] border-[2px] border-[#2580ed] rounded-[2px]" />
                                                <div className="w-[29px] h-[5px] bg-[#69aff3] rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Jepitan clipboard */}
                                    <div className="absolute top-[-4px] left-[19px] w-[38px] h-[13px] bg-[#2580ed] rounded-[7px] border-[3px] border-[#7bbcff]" />

                                    {/* Lingkaran checklist */}
                                    <div className="absolute right-[-25px] bottom-[-3px] w-[48px] h-[48px] bg-[#ffc928] rounded-full border-[4px] border-[#ffe477] flex items-center justify-center shadow-md">
                                        <Check
                                            size={27}
                                            strokeWidth={4}
                                            className="text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* JUDUL */}
                    <h1 className="text-[20px] font-bold text-[#0875e1] mb-3">
                        Pengajuan Berhasil!
                    </h1>

                    {/* DESKRIPSI */}
                    <p className="text-[13px] leading-[1.55] text-[#53657a] mb-6">
                        Terima kasih! Pengajuan PKL kamu telah terkirim ke
                        <br />
                        PT Digital Indonesia. Pihak perusahaan akan segera
                        <br />
                        menghubungi kamu melalui WhatsApp atau email.
                    </p>

                    {/* BUTTON */}
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="w-full h-[42px] bg-[#1976ed] hover:bg-[#1265cf] text-white text-[13px] font-semibold rounded-[6px] transition duration-200"
                    >
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </main>
    );
}