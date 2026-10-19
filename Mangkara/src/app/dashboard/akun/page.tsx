
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
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#f0f6ff] px-4 pb-28 pt-5 sm:px-6 sm:pb-36 sm:pt-7 lg:px-8">
      <main className="relative z-10 mx-auto w-full max-w-[1100px] space-y-4 sm:space-y-5">
        {/* HEADER HALAMAN */}
        <header>
          <h1 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
            Akun Saya
          </h1>
          <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
            Kelola informasi profil, preferensi tempat PKL, dan akun Anda.
          </p>
        </header>

        {/* KARTU PROFIL */}
        <section className="flex items-center gap-3.5 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1976ff] text-white sm:h-14 sm:w-14">
            <User className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                Aisyah Putri
              </h2>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-[#1976ff]">
                Siswa
              </span>
            </div>

            <p className="mt-1 break-words text-[11px] text-gray-500 sm:text-xs">
              aisyah.putri@email.com
            </p>
          </div>
        </section>

        {/* GRID INFORMASI DAN MENU */}
        <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_248px] xl:grid-cols-[minmax(0,1fr)_280px]">
          {/* INFORMASI SEKOLAH */}
          <section className="min-w-0 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
            <h3 className="mb-4 text-sm font-bold text-gray-900">
              Informasi Sekolah
            </h3>

            <div className="space-y-3.5">
              <div>
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  Jurusan
                </p>
                <p className="mt-0.5 text-xs font-bold leading-relaxed text-gray-900">
                  RPL (Rekayasa Perangkat Lunak)
                </p>
              </div>

              <div>
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  Sekolah
                </p>
                <p className="mt-0.5 text-xs font-bold text-gray-900">
                  SMK Negeri 1 Bandung
                </p>
              </div>

              <div>
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  Bergabung Sejak
                </p>
                <p className="mt-0.5 text-xs font-bold text-gray-900">
                  10 Mei 2024
                </p>
              </div>
            </div>
          </section>

          {/* MENU AKUN */}
          <nav
            aria-label="Menu akun"
            className="min-w-0 rounded-xl border border-gray-200/80 bg-white p-2 shadow-sm sm:p-2.5 lg:p-2"
          >
            {menuItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex min-h-10 items-center justify-between gap-2 rounded-lg px-3 py-3 text-xs text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 sm:px-3.5 lg:px-2.5"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-slate-500" />
                  <span className="font-medium">{label}</span>
                </span>

                <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" />
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setKonfirmasiKeluar(true)}
              className="flex min-h-10 w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-xs text-red-500 transition hover:bg-red-50 sm:px-3.5 lg:px-2.5"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <LogOut className="h-4 w-4 shrink-0" />
                <span className="font-semibold">Keluar</span>
              </span>

              <ChevronRight className="h-4 w-4 shrink-0" />
            </button>
          </nav>
        </div>
      </main>

      {/* ORNAMEN BAWAH */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 overflow-hidden sm:h-32 lg:h-40">

      </div>

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
