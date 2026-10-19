
"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import BottomOrnament from "../components/ui/bottomOrnament";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const hideBottom = pathname === "/dashboard/berhasil";

    return (
        <html lang="id">
            <body className="min-h-screen w-full flex flex-col">
                <main className="flex-1">
                    {children}
                </main>

                {!hideBottom && <BottomOrnament />}
            </body>
        </html>
    );
}
