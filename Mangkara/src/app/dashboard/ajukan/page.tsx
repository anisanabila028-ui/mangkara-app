"use client";

import { useRouter } from "next/navigation";
import {
    Home,
    Building2,
    Search,
    MessageSquare,
    UserCircle,
    HelpCircle,
    Menu,
    Bell,
    Info,
    Upload,
    Send,
} from "lucide-react";

export default function AjukanPKLPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f4f8ff]">

            {/* SIDEBAR */}
            <aside className="fixed left-0 top-0 z-20 h-screen w-[225px] border-r border-gray-200 bg-white">

                {/* LOGO */}
                <div className="flex h-[100px] items-center gap-3 px-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d8cff] text-xl font-bold text-white">
                        M
                    </div>

                    <span className="text-xl font-bold text-[#1478df]">
                        MANGKARA
                    </span>
                </div>

                {/* MENU */}
                <nav className="px-4">

                    <button
                        onClick={() => router.push("/dashboard/beranda")}
                        className="flex w-full items-center gap-4 rounded-lg px-5 py-3 text-left text-[#444] hover:bg-gray-100"
                    >
                        <Home size={21} />
                        <span>Beranda</span>
                    </button>

                    <button
                        onClick={() => router.push("/dashboard/daftar-pkl")}
                        className="mt-2 flex w-full items-center gap-4 rounded-lg bg-[#e5f1ff] px-5 py-3 text-left font-semibold text-[#1478df]"
                    >
                        <Building2 size={21} />
                        <span>Daftar Tempat PKL</span>
                    </button>

                    <button
                        className="mt-2 flex w-full items-center gap-4 rounded-lg px-5 py-3 text-left text-[#444] hover:bg-gray-100"
                    >
                        <Building2 size={21} />
                        <span>Rekomendasi</span>
                    </button>

                    <button
                        className="mt-2 flex w-full items-center gap-4 rounded-lg px-5 py-3 text-left text-[#444] hover:bg-gray-100"
                    >
                        <Search size={21} />
                        <span>Cari Tempat PKL</span>
                    </button>

                    <button
                        className="mt-2 flex w-full items-center gap-4 rounded-lg px-5 py-3 text-left text-[#444] hover:bg-gray-100"
                    >
                        <MessageSquare size={21} />
                        <span>Ulasan</span>
                    </button>

                    <button
                        className="mt-2 flex w-full items-center gap-4 rounded-lg px-5 py-3 text-left text-[#444] hover:bg-gray-100"
                    >
                        <UserCircle size={21} />
                        <span>Akun</span>
                    </button>

                    <button
                        className="mt-2 flex w-full items-center gap-4 rounded-lg px-5 py-3 text-left text-[#444] hover:bg-gray-100"
                    >
                        <HelpCircle size={21} />
                        <span>Bantuan</span>
                    </button>

                </nav>
            </aside>


            {/* BAGIAN KANAN */}
            <div className="ml-[225px] min-h-screen">

                {/* HEADER */}
                <header className="flex h-[100px] items-center justify-between border-b border-gray-200 bg-white px-8">

                    <button>
                        <Menu size={28} color="#555" />
                    </button>

                    <div className="flex items-center gap-6">

                        <Bell
                            size={22}
                            color="#555"
                        />

                        <UserCircle
                            size={35}
                            color="#1478df"
                            strokeWidth={1.8}
                        />

                    </div>

                </header>


                {/* CONTENT */}
                <main className="min-h-[calc(100vh-100px)] bg-[#dcecff] px-10 py-7">

                    {/* JUDUL */}
                    <div className="mb-4">

                        <h1 className="text-xl font-bold text-[#263238]">
                            Ajukan PKL di PT Digital Indonesia
                        </h1>

                        <p className="mt-1 text-xs text-gray-600">
                            Lengkapi data dan persyaratan yang dibutuhkan oleh perusahaan.
                        </p>

                    </div>


                    {/* INFORMASI */}
                    <div className="mb-4 flex items-start gap-3 rounded-md border border-[#69a8ff] bg-[#e5f1ff] px-4 py-3">

                        <Info
                            size={20}
                            className="mt-0.5 text-[#1478df]"
                        />

                        <div>

                            <p className="text-xs font-semibold text-[#1478df]">
                                Informasi ini akan langsung dikirim ke pihak perusahaan
                            </p>

                            <p className="mt-1 text-[11px] text-gray-600">
                                Pastikan data yang kamu isi sudah benar dan sesuai dengan dokumen yang diminta.
                            </p>

                        </div>

                    </div>


                    {/* FORM */}
                    <div className="mx-auto max-w-[900px] rounded-lg border border-[#5da2ff] bg-white p-6 shadow-sm">

                        {/* DATA DIRI */}
                        <h2 className="mb-5 text-lg font-bold text-[#263238]">
                            Data Diri
                        </h2>


                        <div className="grid grid-cols-2 gap-x-5 gap-y-4">

                            {/* NAMA */}
                            <div>

                                <label className="mb-1 block text-[11px] font-medium text-gray-600">
                                    Nama Lengkap
                                </label>

                                <input
                                    type="text"
                                    placeholder="Masukkan Nama Lengkap Anda"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#1478df] focus:ring-1 focus:ring-[#1478df]"
                                />

                            </div>


                            {/* WHATSAPP */}
                            <div>

                                <label className="mb-1 block text-[11px] font-medium text-gray-600">
                                    Nomor WhatsApp
                                </label>

                                <input
                                    type="text"
                                    placeholder="Contoh: 0812xxxxxxxx"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#1478df] focus:ring-1 focus:ring-[#1478df]"
                                />

                            </div>


                            {/* SEKOLAH */}
                            <div>

                                <label className="mb-1 block text-[11px] font-medium text-gray-600">
                                    Asal Sekolah
                                </label>

                                <input
                                    type="text"
                                    placeholder="Masukkan nama sekolah Anda"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#1478df] focus:ring-1 focus:ring-[#1478df]"
                                />

                            </div>


                            {/* JURUSAN */}
                            <div>

                                <label className="mb-1 block text-[11px] font-medium text-gray-600">
                                    Pilih Jurusan
                                </label>

                                <select
                                    className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 outline-none focus:border-[#1478df] focus:ring-1 focus:ring-[#1478df]"
                                >

                                    <option value="">
                                        Pilih jurusan Anda
                                    </option>

                                    <option>
                                        Rekayasa Perangkat Lunak
                                    </option>

                                    <option>
                                        Teknik Komputer dan Jaringan
                                    </option>

                                    <option>
                                        Multimedia
                                    </option>

                                    <option>
                                        Akuntansi
                                    </option>

                                    <option>
                                        Administrasi Perkantoran
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* DOKUMEN */}
                        <h2 className="mb-4 mt-7 text-base font-bold text-[#263238]">
                            Dokumen Persyaratan
                        </h2>


                        <div className="grid grid-cols-2 gap-6">

                            {/* CV */}
                            <div>

                                <label className="mb-2 block text-[11px] font-medium text-gray-600">
                                    CV / Portofolio{" "}
                                    <span className="font-normal">
                                        (opsional)
                                    </span>
                                </label>

                                <label className="flex h-[95px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#5da2ff] bg-[#f8fbff] hover:bg-[#edf6ff]">

                                    <Upload
                                        size={20}
                                        className="mb-2 text-[#1478df]"
                                    />

                                    <span className="text-[10px] font-medium text-[#1478df]">
                                        Klik untuk mengunggah file
                                    </span>

                                    <span className="mt-1 text-[9px] text-gray-400">
                                        JPG, PNG, PDF (maks. 2MB)
                                    </span>

                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        className="hidden"
                                    />

                                </label>

                            </div>


                            {/* SURAT */}
                            <div>

                                <label className="mb-2 block text-[11px] font-medium text-gray-600">
                                    Surat Pengantar PKL{" "}
                                    <span className="font-normal">
                                        (dari sekolah)
                                    </span>
                                </label>

                                <label className="flex h-[95px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#5da2ff] bg-[#f8fbff] hover:bg-[#edf6ff]">

                                    <Upload
                                        size={20}
                                        className="mb-2 text-[#1478df]"
                                    />

                                    <span className="text-[10px] font-medium text-[#1478df]">
                                        Klik untuk mengunggah file
                                    </span>

                                    <span className="mt-1 text-[9px] text-gray-400">
                                        JPG, PNG, PDF (maks. 2MB)
                                    </span>

                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        className="hidden"
                                    />

                                </label>

                            </div>

                        </div>


                        {/* PERTANYAAN */}
                        <div className="mt-5">

                            <label className="mb-2 block text-[11px] font-medium text-gray-600">
                                Pertanyaan Tambahan dari Perusahaan
                            </label>

                            <textarea
                                rows={4}
                                placeholder="Jawab pertanyaan berikut jika ada..."
                                className="w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#1478df] focus:ring-1 focus:ring-[#1478df]"
                            />

                        </div>


                        {/* BUTTON */}
                        <div className="mt-4 flex justify-end">

                            <button
                                onClick={() => {
                                    alert("Pengajuan PKL berhasil dikirim!");
                                }}
                                className="flex items-center gap-2 rounded-md bg-[#1478df] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#096bcf]"
                            >

                                <Send size={14} />

                                Kirim Pengajuan

                            </button>

                        </div>

                    </div>


                    {/* BAGIAN BAWAH */}
                    <div className="mx-auto mt-0 h-16 max-w-[900px] overflow-hidden">

                        <div className="h-full w-full bg-gradient-to-t from-[#b9d9ff] to-transparent" />

                    </div>

                </main>

            </div>

        </div>
    );
}