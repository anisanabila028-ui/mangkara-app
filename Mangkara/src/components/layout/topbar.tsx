'use client';

import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function topbar() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
            {/* Search Bar */}
            <div className="flex flex-1 items-center max-w-md">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Cari tempat PKL atau perusahaan..."
                        className="w-full rounded-full bg-slate-100 py-2 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Profil & Notifikasi */}
            <div className="flex items-center gap-4">
                {/* Tombol Notifikasi */}
                <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* Divider */}
                <div className="h-6 w-px bg-slate-200" />

                {/* Info User */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                        <User className="h-5 w-5" />
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-medium text-slate-800 leading-none">Siswa Mangkara</p>
                        <p className="text-xs text-slate-400 mt-1">Siswa SMK</p>
                    </div>
                </div>
            </div>
        </header>
    );
}