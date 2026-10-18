"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/layout/sidebar";
import Topbar from "../../components/layout/topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Buka sidebar otomatis jika di layar desktop (>= 1024px)
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

            {/* AREA UTAMA - beri jarak agar tidak tertutup sidebar (desktop) */}
            <div
                className={`flex min-w-0 flex-1 flex-col ${
                    sidebarOpen ? "lg:pl-64" : ""
                }`}
            >

                {/* TOPBAR - BERLAKU UNTUK SEMUA HALAMAN */}
                <Topbar
                    onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                />

                {/* ISI HALAMAN */}
                <main className="flex-1 relative flex flex-col justify-between">
                    {children}
                </main>

            </div>
        </div>
    );
}