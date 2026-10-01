'use client';

import { useState } from 'react';

export default function CompleteProfilePage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between items-center p-6 relative overflow-hidden">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 my-auto z-10">
                <h2 className="text-xl font-bold text-gray-800">Lengkapi Profil Kamu</h2>
                <p className="text-xs text-gray-400 mb-6">
                    Lengkapi data agar pencarian dan pendaftaran PKL lebih mudah dan sesuai dengan kebutuhanmu.
                </p>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">NISN</label>
                            <input
                                type="text"
                                placeholder="Masukkan NISN Anda"
                                className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Nomor WhatsApp</label>
                            <input
                                type="text"
                                placeholder="Contoh: 0812xxxxxxxx"
                                className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Kota / Alamat</label>
                        <input
                            type="text"
                            placeholder="Masukkan alamat lengkap Anda"
                            className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Upload Foto & Preview Avatar */}
                    <div className="flex items-center gap-4 py-2">
                        <div className="flex-1 border-2 border-dashed border-blue-200 bg-blue-50/20 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/40 transition">
                            <svg className="w-6 h-6 text-blue-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-xs font-medium text-blue-600">Klik untuk mengunggah foto</span>
                            <span className="text-[10px] text-gray-400 mt-0.5">JPG, PNG (maks. 2MB)</span>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-400">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Portofolio / Skill (Opsional)</label>
                        <textarea
                            rows={3}
                            placeholder="Ceritakan skill, pengalaman, atau link portofolio yang kamu miliki..."
                            className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium text-xs rounded-xl transition shadow-md shadow-blue-200"
                    >
                        Simpan Profil
                    </button>
                </form>
            </div>
        </div>
    );
}