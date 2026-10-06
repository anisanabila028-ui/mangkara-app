"use client";

import React from "react";
import { Bell, User, Menu } from "lucide-react";

export default function Topbar({
    onMenuClick,
}: {
    onMenuClick: () => void;
}) {
    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-slate-200 bg-white px-6">

            {/* TOMBOL MENU */}
            <button
                type="button"
                onClick={onMenuClick}
                aria-label="Buka atau tutup sidebar"
                className="flex h-12 w-12 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
            >
                <Menu size={32} strokeWidth={2} />
            </button>

            {/* BAGIAN KANAN */}
            <div className="flex items-center gap-4">

                {/* NOTIFIKASI */}
                <button
                    type="button"
                    aria-label="Notifikasi"
                    className="relative rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
                >
                    <Bell className="h-6 w-6" />

                    <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500" />
                </button>

                {/* PEMBATAS */}
                <div className="h-8 w-px bg-slate-200" />

                {/* USER */}
                <div className="flex cursor-pointer items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <User className="h-6 w-6" />
                    </div>



                </div>
            </div>
        </header>
    );
}