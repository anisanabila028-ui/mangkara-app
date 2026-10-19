"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bookmark, History, Settings, LogOut, ChevronRight, UserCircle2 } from "lucide-react";
import { hapusToken } from "@/lib/api";

const menuItems = [
  { label: "Tempat Tersimpan", href: "/dashboard/daftar-pkl", icon: Bookmark },
  { label: "Riwayat Kontribusi", href: "/dashboard/ulasan", icon: History },
  { label: "Pengaturan Akun", href: "#", icon: Settings },
];

export default function AkunPage() {
  const router = useRouter();
  const [konfirmasiKeluar, setKonfirmasiKeluar] = useState(false);

  function keluar() {
    hapusToken();
    router.push("/masuk");
  }

  return (
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6">
      <main className="w-full max-w-2xl mx-auto space-y-4">
        {/* HEADER */}
        <div>
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl leading-snug">
            Akun Saya
          </h1>
          <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
            Kelola informasi profil, preferensi tempat PKL, dan akun Anda.
          </p>
        </div>

        {/* KARTU PROFIL */}
        <div className="flex items-center gap-3.5 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
          {/* Avatar Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1976ff] text-white shadow-sm">
            <User className="h-8 w-8 fill-white text-white" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-gray-900">
                Aisyah Putri
              </h2>
              <span className="rounded-md bg-blue-100/70 px-2 py-0.5 text-[10px] font-semibold text-[#1976ff]">
                Siswa
              </span>
            </div>
            <p className="mt-0.5 text-xs text-gray-500">
              aisyah.putri@email.com
            </p>
          </div>
        </div>

        {/* INFORMASI SEKOLAH */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Informasi Sekolah
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-gray-500">Jurusan</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                RPL (Rekayasa Perangkat Lunak)
              </p>
            </div>

            <div>
              <p className="text-[11px] text-gray-500">Sekolah</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                SMK Negeri 1 Bandung
              </p>
            </div>

            <div>
              <p className="text-[11px] text-gray-500">Bergabung Sejak</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                10 Mei 2024
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-sm self-start">
          {menu.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition"
            >
              <span className="flex items-center gap-3 font-medium">
                <Icon className="w-4 h-4 text-slate-500" />
                {label}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          ))}

          {/* Tombol Keluar */}
          <button
            onClick={() => setKonfirmasiKeluar(true)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs text-red-500 hover:bg-red-50"
          >
            <span className="flex items-center gap-3 font-semibold">
              <LogOut className="w-4 h-4 text-red-500" />
              Keluar
            </span>
            <ChevronRight className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      {/* Modal konfirmasi keluar */}
      {konfirmasiKeluar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setKonfirmasiKeluar(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-slate-800">Keluar dari akun?</h3>
            <p className="mt-2 text-xs text-slate-500">
              Kamu perlu masuk lagi untuk mengakses akunmu.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setKonfirmasiKeluar(false)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                onClick={keluar}
                className="rounded-xl bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
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