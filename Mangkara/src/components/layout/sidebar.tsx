'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Building2,
    LayoutGrid,
    Search,
    MessageSquare,
    User,
    HelpCircle
} from "lucide-react";

const navItems = [
    { name: "Beranda", href: "/beranda", icon: Home },
    { name: "Daftar Tempat PKL", href: "/daftar-pkl", icon: Building2 },
    { name: "Rekomendasi", href: "/rekomendasi", icon: LayoutGrid },
    { name: "Cari Tempat PKL", href: "/cari", icon: Search },
    { name: "Ulasan", href: "/ulasan", icon: MessageSquare },
    { name: "Akun", href: "/akun", icon: User },
    { name: "Bantuan", href: "/bantuan", icon: HelpCircle },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-4 min-h-screen">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-2 px-3 py-4 mb-6">
                    <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-xs">
                        M
                    </div>
                    <span className="font-bold text-blue-600 text-lg tracking-wide">MANGKARA</span>
                </div>

                {/* Menu Items */}
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    }`}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}