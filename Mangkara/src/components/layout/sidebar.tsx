"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  isOpen = true,
  onClose = () => {},
}: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: "Beranda", href: "/dashboard/beranda" },
    { icon: Building2, label: "Daftar Tempat PKL", href: "/dashboard/daftar-pkl" },
    { icon: ThumbsUp, label: "Rekomendasi PKL", href: "/dashboard/rekomendasi" },
    { icon: Search, label: "Cari Tempat PKL", href: "/dashboard/cari" },
    { icon: MessageSquare, label: "Ulasan", href: "/dashboard/ulasan" },
    { icon: User, label: "Akun", href: "/dashboard/akun" },
  ];

  return (
    <>
      {/* Overlay Gelap - hanya di layar kecil (mode drawer) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 transition-opacity lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-100 z-50 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div>
          {/* Header Sidebar & Tombol Close */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
                <img
                  src="/logmangkara.png"
                  alt="Logo Mangkara"
                  className="h-full w-full object-contain"
                />
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

              // Tandai menu sebagai aktif jika sedang berada di halaman itu
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={index}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition ${
                    isActive
                      ? "bg-sky-100 text-sky-600"
                      : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                  }`}
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