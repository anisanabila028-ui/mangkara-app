"use client";

import BottomOrnament from "../../../components/ui/bottomOrnament";

/**
 * HALAMAN AKUN — PLACEHOLDER
 * File ini awalnya kosong (0 byte) dan menyebabkan `npm run build` gagal
 * dengan error "is not a module". Isi di bawah hanya pembungkus minimal
 * supaya aplikasi bisa jalan. Silakan ganti dengan desain aslinya.
 */
import Link from "next/link";
import { Bookmark, History, Settings, LogOut, ChevronRight, UserCircle2 } from "lucide-react";

const menu = [
  { label: "Tempat Tersimpan", href: "/tempat-tersimpan", icon: Bookmark },
  { label: "Riwayat Kontribusi", href: "/riwayat-kontribusi", icon: History },
  { label: "Pengaturan Akun", href: "/pengaturan-akun", icon: Settings },
];

export default function AkunPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-xl font-bold text-slate-800">Akun Saya</h1>
      <p className="text-xs text-slate-500 mt-1">
        Kelola informasi profil, preferensi tempat PKL, dan akun Anda.
      </p>

      {/* Kartu profil */}
      <div className="mt-6 flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <UserCircle2 className="w-14 h-14 text-blue-600" strokeWidth={1.5} />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-800">Aisyah Putri</h2>
            <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              Siswa
            </span>
          </div>
          <p className="text-xs text-slate-500">aisyah.putri@email.com</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Informasi sekolah */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800">Informasi Sekolah</h3>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-[10px] text-slate-400">Jurusan</dt>
              <dd className="text-xs font-semibold text-slate-800">RPL (Rekayasa Perangkat Lunak)</dd>
            </div>
            <div>
              <dt className="text-[10px] text-slate-400">Sekolah</dt>
              <dd className="text-xs font-semibold text-slate-800">SMK Negeri 1 Bandung</dd>
            </div>
            <div>
              <dt className="text-[10px] text-slate-400">Bergabung Sejak</dt>
              <dd className="text-xs font-semibold text-slate-800">10 Mei 2024</dd>
            </div>
          </dl>
        </div>

        {/* Menu */}
        <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-sm">
          {menu.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-xs text-slate-700 hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-slate-500" />
                {label}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          ))}
          <button
            onClick={() => {/* TODO: logout */ }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs text-red-500 hover:bg-red-50"
          >
            <span className="flex items-center gap-3">
              <LogOut className="w-4 h-4" />
              Keluar
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ---------- ORNAMEN BAWAH ---------- */}
      <BottomOrnament />
    </div>
  );
}