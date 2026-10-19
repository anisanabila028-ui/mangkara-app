
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../../components/layout/sidebar";
import Topbar from "../../components/layout/topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Sembunyikan Topbar hanya di halaman Pengajuan PKL
    const hideTopbar = pathname === "/dashboard/berhasil";

    // Buka sidebar otomatis di layar desktop
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 1024) {
            setSidebarOpen(true);
        }
    }, []);

    return (
        <div className="flex min-h-screen bg-slate-50/50">
            {/* SIDEBAR */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* AREA UTAMA */}
            <div
                className={`flex min-w-0 flex-1 flex-col ${sidebarOpen ? "lg:pl-64" : ""
                    }`}
            >
                {/* TOPBAR */}
                {!hideTopbar && (
                    <Topbar
                        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                    />
                )}

                {/* ISI HALAMAN */}
                <main className="relative flex flex-1 flex-col justify-between">
                    {children}
                </main>
            </div>
        </div>
    );
}