"use client";

import React from "react";
import Link from "next/link";
import { 
  Home, 
  Building2, 
  ThumbsUp, 
  Search, 
  MessageSquare, 
  User, 
  HelpCircle,
  X 
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: "Beranda", href: "/dashboard/beranda" },
    { icon: Building2, label: "Daftar Tempat PKL", href: "/dashboard/tempat-pkl" },
    { icon: ThumbsUp, label: "Rekomendasi", href: "/dashboard/rekomendasi" },
    { icon: Search, label: "Cari Tempat PKL", href: "/dashboard/cari" },
    { icon: MessageSquare, label: "Ulasan", href: "/dashboard/ulasan" },
    { icon: User, label: "Akun", href: "/dashboard/akun" },
    { icon: HelpCircle, label: "Bantuan", href: "/dashboard/bantuan" },
  ];

  return (
    <>
      {/* Overlay Gelap saat sidebar muncul di mode tersembunyi */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-100 z-50 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Header Sidebar & Tombol Close */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-extrabold text-lg">
                M
              </div>
              <span className="font-extrabold text-xl tracking-wider text-sky-600">
                MANGKARA
              </span>
            </div>
            
            {/* Tombol X untuk menutup sidebar */}
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* List Menu */}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}