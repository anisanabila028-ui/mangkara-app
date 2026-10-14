"use client";

import React from "react";
import { Bell, User, Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6">
        {/* SISI KIRI: Tombol Hamburger & Tagline Aplikasi */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Buka atau tutup sidebar"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
          >
            <Menu size={24} />
          </button>

          {/* TAGLINE */}
          <span className="hidden text-sm text-[#334155] md:block">
            Manggihan arah ngali gawe kanggo anak remaja
          </span>
        </div>

        {/* SISI KANAN: Lonceng Notifikasi & Profile User */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifikasi"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
          >
            <Bell size={20} />
          </button>

          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white shadow-sm transition hover:bg-blue-600">
            <User size={22} />
          </div>
        </div>
      </header>
    </>
  );
}