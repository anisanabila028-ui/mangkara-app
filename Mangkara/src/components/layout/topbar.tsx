"use client";

import React from "react";
import { Bell, User, Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-slate-200 bg-white px-4 sm:h-16 sm:px-6">
        {/* SISI KIRI: Tombol Hamburger & Tagline Aplikasi */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Buka atau tutup sidebar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 sm:h-10 sm:w-10"
          >
            <Menu size={20} className="sm:hidden" />
            <Menu size={24} className="hidden sm:block" />
          </button>

          {/* TAGLINE */}
          <span className="hidden text-sm text-[#334155] md:block">
            Manggihan arah ngali gawe kanggo anak remaja
          </span>
        </div>

        {/* SISI KANAN: Notifikasi dan Profil */}
        <div className="ml-2 flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Notifikasi"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 sm:h-10 sm:w-10"
          >
            <Bell size={17} className="sm:hidden" />
            <Bell size={20} className="hidden sm:block" />
          </button>

          <button
            type="button"
            aria-label="Profil pengguna"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm transition hover:bg-blue-600 sm:h-10 sm:w-10"
          >
            <User size={19} className="sm:hidden" />
            <User size={22} className="hidden sm:block" />
          </button>
        </div>
      </header>
    </>
  );
}