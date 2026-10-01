import sidebar from "@/components/layout/sidebar";
import topbar from "../components/layout/topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50/50">
            {/* Sidebar Kiri */}
            <sidebar />

            {/* Area Konten Utama */}
            <div className="flex-1 flex flex-col min-w-0">
                <topbar />
                <main className="flex-1 p-6 md:p-8 relative pb-20">
                    {children}

                    {/* Footer Pattern Ornamen */}
                    <div className="fixed bottom-0 right-0 left-64 pointer-events-none z-0 opacity-80 h-16 bg-[url('/images/pattern-footer.png')] bg-contain bg-bottom bg-repeat-x" />
                </main>
            </div>
        </div>
    );
}