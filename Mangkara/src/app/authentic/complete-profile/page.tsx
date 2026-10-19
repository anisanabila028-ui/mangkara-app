'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Topbar from "@/components/layout/topbar";
import BottomOrnament from "@/components/ui/bottomOrnament";
import { UploadCloud } from "lucide-react";

export default function CompleteProfilePage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        nisn: '',
        email: '',
        whatsapp: '',
        portofolio: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/beranda");
    };

    return (
        <div className="min-h-screen w-full bg-[#eaf2ff] flex flex-col items-center">
            {/* Wrapper mobile container */}
            <div className="w-full max-w-[440px] min-h-screen bg-white shadow-xl flex flex-col justify-between relative pb-28">
                <div>
                    {/* Topbar */}
                    <Topbar />

                    {/* Konten Halaman */}
                    <div className="px-5 py-5 space-y-4">
                        {/* Header Box Card */}
                        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                            <h1 className="text-base font-bold text-gray-900 leading-snug">
                                Lengkapi Profil Kamu
                            </h1>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                Lengkapi data agar pencarian dan pendaftaran PKL lebih mudah dan sesuai dengan kebutuhanmu.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-3.5">
                            {/* NISN */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    NISN
                                </label>
                                <input
                                    type="text"
                                    value={formData.nisn}
                                    onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                                    placeholder="Masukan NISN Anda"
                                    className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="Masukan Email Anda"
                                    className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Nomor WhatsApp */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Nomor WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    placeholder="Masukan Nomor WhatsApp"
                                    className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Foto Profil */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Foto Profil
                                </label>
                                <div className="w-full border-2 border-dashed border-blue-400 bg-blue-50/20 rounded-xl py-5 px-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/40 transition">
                                    <UploadCloud className="w-6 h-6 text-blue-500 mb-1" />
                                    <span className="text-xs font-semibold text-blue-500">
                                        Klik untuk mengunggah foto Anda
                                    </span>
                                    <span className="text-[10px] text-gray-400 mt-0.5">
                                        JPG, PNG (maks. 2MB)
                                    </span>
                                </div>
                            </div>

                            {/* Portopolio / Skill ( Opsional ) */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Portopolio / Skill ( Opsional )
                                </label>
                                <input
                                    type="text"
                                    value={formData.portofolio}
                                    onChange={(e) => setFormData({ ...formData, portofolio: e.target.value })}
                                    placeholder="Jawab pertanyaan ini jika anda"
                                    className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Tombol Simpan Profil */}
                            <button
                                type="submit"
                                className="w-full h-11 mt-4 bg-[#1976ff] hover:bg-[#1565c0] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-blue-200 transition active:scale-[0.99]"
                            >
                                Simpan Profil
                            </button>
                        </form>
                    </div>
                </div>

                {/* Ornamen Bawah persis Gambar 3 */}
                <BottomOrnament />
            </div>
        </div>
    );
}