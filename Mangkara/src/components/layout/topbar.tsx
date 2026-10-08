"use client";

import React, { useState } from "react";
import { Bell, User, Menu } from "lucide-react";
import Sidebar from "./sidebar";

export default function Topbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6">
        {/* SISI KIRI: Tombol Hamburger & Logo MANGKARA */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Buka atau tutup sidebar"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
          >
            <Menu size={24} />
          </button>

          {/* LOGO MANGKARA */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 font-extrabold text-white">
              M
            </div>
            <span className="text-lg font-extrabold tracking-wider text-sky-600">
              MANGKARA
            </span>
          </div>
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

      {/* SIDEBAR LANGSUNG DIPANGGUL DI SINI */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}