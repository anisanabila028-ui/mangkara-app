"use client";

import Link from "next/link";
import { 
  Bookmark, 
  History, 
  Settings, 
  LogOut, 
  ChevronRight, 
  User 
} from "lucide-react";
import BottomOrnament from "../../../components/ui/bottomOrnament";

const menuItems = [
  { label: "Tempat Tersimpan", href: "/dashboard/daftar-pkl", icon: Bookmark },
  { label: "Riwayat Kontribusi", href: "/dashboard/ulasan", icon: History },
  { label: "Pengaturan Akun", href: "#", icon: Settings },
];

export default function AkunPage() {
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

        {/* MENU TINDAKAN */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm space-y-4">
          {menuItems.map(({ label, href, icon: Icon }) => (
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
            type="button"
            onClick={() => {
              window.location.href = "/";
            }}
            className="w-full flex items-center justify-between text-xs text-red-500 hover:text-red-600 transition pt-1"
          >
            <span className="flex items-center gap-3 font-semibold">
              <LogOut className="w-4 h-4 text-red-500" />
              Keluar
            </span>
            <ChevronRight className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </main>

      {/* ---------- ORNAMEN BAWAH ---------- */}
      <BottomOrnament />
    </div>
  );
}