"use client";

import { useState } from "react";
import Sidebar from "../../components/layout/sidebar";
import Topbar from "../../components/layout/topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen bg-slate-50/50">

            {/* SIDEBAR */}
            {sidebarOpen && <Sidebar />}

            {/* AREA UTAMA */}
            <div className="flex flex-1 min-w-0 flex-col">

                {/* TOPBAR - BERLAKU UNTUK SEMUA HALAMAN */}
                <Topbar
                    onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                />

                {/* ISI HALAMAN */}
                <main className="flex-1 relative">
                    {children}

                    {/* FOOTER PATTERN */}
                    <div
                        className="pointer-events-none fixed bottom-0 left-0 right-0 z-0 h-16 bg-[url('/images/pattern-footer.png')] bg-contain bg-bottom bg-repeat-x opacity-80"
                    />
                </main>

            </div>
        </div>
    );
}