"use client";

import { useRouter } from "next/navigation";
import {
    UserCircle,
    Bookmark,
    History,
    Settings,
    LogOut,
    ChevronRight,
} from "lucide-react";

export default function AkunPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f4f8ff]">

            {/* CONTENT */}
            <main className="min-h-[calc(100vh-80px)] bg-white px-10 py-7">

                {/* JUDUL */}
                <div className="mb-5">
                    <h1 className="text-2xl font-bold text-[#263238]">
                        Akun Saya
                    </h1>

                    <p className="mt-1 text-sm text-gray-600">
                        Kelola informasi profil, preferensi tempat PKL, dan akun Anda.
                    </p>
                </div>

                {/* ================= PROFIL ================= */}
                <div className="rounded-lg bg-white border border-gray-200 px-5 py-5">

                    <div className="flex items-center gap-4">

                        {/* FOTO / ICON PROFILE */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1683ed]">
                            <UserCircle
                                size={42}
                                color="white"
                                strokeWidth={1.5}
                            />
                        </div>

                        {/* DATA USER */}
                        <div>
                            <div className="flex items-center gap-2">

                                <h2 className="text-lg font-bold text-[#263238]">
                                    Aisyah Putri
                                </h2>

                                <span className="rounded bg-[#e6f2ff] px-2 py-1 text-[10px] font-medium text-[#1683ed]">
                                    Siswa
                                </span>

                            </div>

                            <p className="mt-1 text-xs text-gray-500">
                                aisyah.putri@email.com
                            </p>
                        </div>

                    </div>

                </div>

                {/* ================= BAGIAN BAWAH ================= */}
                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">

                    {/* INFORMASI SEKOLAH */}
                    <div className="rounded-lg border border-gray-200 bg-white p-5">

                        <h2 className="mb-5 text-sm font-bold text-[#263238]">
                            Informasi Sekolah
                        </h2>

                        <div className="space-y-4">

                            {/* JURUSAN */}
                            <div>
                                <p className="text-xs text-gray-500">
                                    Jurusan
                                </p>

                                <p className="mt-1 text-sm font-medium text-[#263238]">
                                    RPL (Rekayasa Perangkat Lunak)
                                </p>
                            </div>

                            {/* SEKOLAH */}
                            <div>
                                <p className="text-xs text-gray-500">
                                    Sekolah
                                </p>

                                <p className="mt-1 text-sm font-medium text-[#263238]">
                                    SMK Negeri 1 Bandung
                                </p>
                            </div>

                            {/* BERGABUNG */}
                            <div>
                                <p className="text-xs text-gray-500">
                                    Bergabung Sejak
                                </p>

                                <p className="mt-1 text-sm font-medium text-[#263238]">
                                    10 Mei 2024
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* MENU AKUN */}
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

                        {/* TEMPAT TERSIMPAN */}
                        <button
                            type="button"
                            onClick={() =>
                                router.push("/dashboard/tempat-tersimpan")
                            }
                            className="flex w-full items-center justify-between px-5 py-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">

                                <Bookmark
                                    size={16}
                                    className="text-gray-500"
                                />

                                <span className="text-sm text-gray-600">
                                    Tempat Tersimpan
                                </span>

                            </div>

                            <ChevronRight
                                size={16}
                                className="text-gray-400"
                            />
                        </button>

                        {/* RIWAYAT KONTRIBUSI */}
                        <button
                            type="button"
                            onClick={() =>
                                router.push("/dashboard/riwayat-kontribusi")
                            }
                            className="flex w-full items-center justify-between border-t border-gray-100 px-5 py-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">

                                <History
                                    size={16}
                                    className="text-gray-500"
                                />

                                <span className="text-sm text-gray-600">
                                    Riwayat Kontribusi
                                </span>

                            </div>

                            <ChevronRight
                                size={16}
                                className="text-gray-400"
                            />
                        </button>

                        {/* PENGATURAN AKUN */}
                        <button
                            type="button"
                            onClick={() =>
                                router.push("/dashboard/pengaturan")
                            }
                            className="flex w-full items-center justify-between border-t border-gray-100 px-5 py-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">

                                <Settings
                                    size={16}
                                    className="text-gray-500"
                                />

                                <span className="text-sm text-gray-600">
                                    Pengaturan Akun
                                </span>

                            </div>

                            <ChevronRight
                                size={16}
                                className="text-gray-400"
                            />
                        </button>

                        {/* KELUAR */}
                        <button
                            type="button"
                            onClick={() => router.push("/")}
                            className="flex w-full items-center justify-between border-t border-gray-100 px-5 py-4 transition hover:bg-red-50"
                        >
                            <div className="flex items-center gap-3">

                                <LogOut
                                    size={16}
                                    className="text-red-500"
                                />

                                <span className="text-sm text-red-500">
                                    Keluar
                                </span>

                            </div>

                            <ChevronRight
                                size={16}
                                className="text-red-500"
                            />
                        </button>

                    </div>

                </div>

                {/* BAGIAN BAWAH */}
                <div className="mt-8 h-20 overflow-hidden rounded-b-lg">
                    <div className="h-full w-full bg-gradient-to-t from-[#d3e7ff] to-transparent" />
                </div>

            </main>
        </div>
    );
}