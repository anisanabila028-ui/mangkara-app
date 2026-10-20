"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bookmark,
  History,
  Settings,
  LogOut,
  ChevronRight,
  User,
} from "lucide-react";
import { hapusToken } from "@/lib/api";

const menuItems = [
  {
    label: "Tempat Tersimpan",
    href: "/dashboard/daftar-pkl",
    icon: Bookmark,
  },
  {
    label: "Riwayat Kontribusi",
    href: "/dashboard/ulasan",
    icon: History,
  },
  {
    label: "Pengaturan Akun",
    href: "#",
    icon: Settings,
  },
];

export default function AkunPage() {
  const router = useRouter();
  const [konfirmasiKeluar, setKonfirmasiKeluar] = useState(false);

  function keluar() {
    hapusToken();
    router.push("/masuk");
  }

  return (
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6 lg:px-8">
      <main className="w-full max-w-full mx-auto space-y-6">
        
        {/* HEADER HALAMAN */}
        <header>
          <h1 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
            Akun Saya
          </h1>
          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-500">
            Kelola informasi profil, preferensi tempat PKL, dan akun Anda.
          </p>
        </header>

        {/* KARTU PROFIL */}
        <section className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1976ff] text-white sm:h-16 sm:w-16">
            <User className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                Aisyah Putri
              </h2>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-[#1976ff]">
                Siswa
              </span>
            </div>

            <p className="mt-1 break-words text-xs text-gray-400">
              aisyah.putri@email.com
            </p>
          </div>
        </section>

        {/* GRID INFORMASI SEKOLAH & MENU AKUN */}
        {/* Mobile: 1 Kolom Menumpuk, Desktop (lg:): Grid 2 Kolom Sejajar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-5">
          
          {/* INFORMASI SEKOLAH (Desktop: Sisi Kiri Lebar) */}
          <section className="lg:col-span-8 rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 shadow-sm">
            <h3 className="mb-4 text-sm sm:text-base font-bold text-gray-900">
              Informasi Sekolah
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  Jurusan
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-gray-900">
                  RPL (Rekayasa Perangkat Lunak)
                </p>
              </div>

              <div>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  Sekolah
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-gray-900">
                  SMK Negeri 1 Bandung
                </p>
              </div>

              <div>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  Bergabung Sejak
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-gray-900">
                  10 Mei 2024
                </p>
              </div>
            </div>
          </section>

          {/* MENU AKUN (Desktop: Sisi Kanan Sejajar) */}
          <nav
            aria-label="Menu akun"
            className="lg:col-span-4 rounded-2xl border border-gray-200/80 bg-white p-2.5 sm:p-3 shadow-sm space-y-1"
          >
            {menuItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center justify-between gap-2 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-gray-500" />
                  <span className="font-medium">{label}</span>
                </span>

                <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setKonfirmasiKeluar(true)}
              className="flex w-full items-center justify-between gap-2 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-red-500 transition hover:bg-red-50"
            >
              <span className="flex items-center gap-3">
                <LogOut className="h-4 w-4 shrink-0 text-red-500" />
                <span className="font-semibold">Keluar</span>
              </span>

              <ChevronRight className="h-4 w-4 shrink-0 text-red-400" />
            </button>
          </nav>

        </div>
      </main>

      {/* MODAL KONFIRMASI KELUAR */}
      {konfirmasiKeluar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setKonfirmasiKeluar(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="judul-konfirmasi-keluar"
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="judul-konfirmasi-keluar"
              className="text-base font-bold text-slate-800"
            >
              Keluar dari akun?
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Kamu perlu masuk lagi untuk mengakses akunmu.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setKonfirmasiKeluar(false)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Batal
              </button>

              <button
                type="button"
                onClick={keluar}
                className="rounded-xl bg-red-500 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-red-600"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}