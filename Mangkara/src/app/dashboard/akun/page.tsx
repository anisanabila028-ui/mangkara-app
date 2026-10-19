"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bookmark, History, Settings, LogOut, ChevronRight, UserCircle2 } from "lucide-react";
import { hapusToken } from "@/lib/api";

const menu = [
  { label: "Tempat Tersimpan", href: "/tempat-tersimpan", icon: Bookmark },
  { label: "Riwayat Kontribusi", href: "/riwayat-kontribusi", icon: History },
  { label: "Pengaturan Akun", href: "/pengaturan-akun", icon: Settings },
];

export default function AkunPage() {
  const router = useRouter();
  const [konfirmasiKeluar, setKonfirmasiKeluar] = useState(false);

  function keluar() {
    hapusToken();
    router.push("/masuk");
  }

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
        <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-sm self-start">
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
            onClick={() => setKonfirmasiKeluar(true)}
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
                onClick={() => keluar()}
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