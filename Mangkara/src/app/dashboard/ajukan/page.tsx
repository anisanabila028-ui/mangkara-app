"use client";

import { ExternalLink, Info } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/JS3EsbnTcPmKzMfF6";

export default function AjukanPKLPage() {
    return (
        <div className="min-h-screen bg-[#f4f8ff]">

            {/* CONTENT */}
            <main className="min-h-[calc(100vh-80px)] bg-[#dcecff] px-10 py-7">

                {/* JUDUL */}
                <div className="mb-5">

                    <h1 className="text-2xl font-bold text-[#263238]">
                        Ajukan PKL di PT Digital Indonesia
                    </h1>

                    <p className="mt-1 text-sm text-gray-600">
                        Lengkapi data dan persyaratan yang dibutuhkan oleh perusahaan.
                    </p>

                </div>


                {/* INFORMASI */}
                <div className="mb-5 flex items-start gap-3 rounded-md border border-[#69a8ff] bg-[#e5f1ff] px-4 py-3">

                    <Info
                        size={20}
                        className="mt-0.5 text-[#1478df]"
                    />

                    <div>

                        <p className="text-sm font-semibold text-[#1478df]">
                            Informasi pengajuan PKL
                        </p>

                        <p className="mt-1 text-xs text-gray-600">
                            Data dan dokumen pengajuan akan diisi melalui formulir Google Form.
                        </p>

                    </div>

                </div>


                {/* CARD */}
                <div className="mx-auto max-w-[900px] rounded-lg border border-[#5da2ff] bg-white p-7 shadow-sm">

                    {/* DATA DIRI */}
                    <h2 className="mb-2 text-lg font-bold text-[#263238]">
                        Data Diri
                    </h2>

                    <p className="mb-6 text-xs leading-5 text-gray-500">
                        Silakan lengkapi data diri, informasi sekolah, jurusan,
                        dan dokumen persyaratan melalui Google Form yang telah
                        disediakan.
                    </p>


                    {/* GOOGLE FORM */}
                    <div className="rounded-lg border border-[#b9d9ff] bg-[#f8fbff] p-8 text-center">

                        {/* ICON */}
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e5f1ff]">

                            <ExternalLink
                                size={26}
                                className="text-[#1478df]"
                            />

                        </div>


                        {/* JUDUL */}
                        <h3 className="text-base font-bold text-[#263238]">
                            Formulir Pengajuan PKL
                        </h3>


                        {/* DESKRIPSI */}
                        <p className="mx-auto mt-2 max-w-[600px] text-xs leading-5 text-gray-500">
                            Silakan isi formulir pengajuan PKL untuk melengkapi
                            data diri, nomor WhatsApp, asal sekolah, jurusan,
                            NISN, CV atau portofolio, surat pengantar PKL,
                            dan pertanyaan tambahan dari perusahaan.
                        </p>


                        {/* TOMBOL */}
                        <div className="mt-6 flex justify-center">

                            <a
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md bg-[#1478df] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#096bcf]"
                            >

                                <ExternalLink size={15} />

                                Isi Formulir Pengajuan PKL

                            </a>

                        </div>

                    </div>


                    {/* PERHATIAN */}
                    <div className="mt-5 rounded-md border border-gray-200 bg-gray-50 px-4 py-3">

                        <p className="text-xs font-semibold text-[#263238]">
                            Perhatian
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-gray-500">
                            Pastikan semua data yang kamu masukkan sudah benar
                            dan dokumen yang diunggah sesuai dengan persyaratan
                            sebelum mengirim formulir.
                        </p>

                    </div>

                </div>


                {/* BAGIAN BAWAH */}
                <div className="mt-8 h-20 overflow-hidden rounded-b-lg">

                    <div className="h-full w-full bg-gradient-to-t from-[#d3e7ff] to-transparent" />

                </div>

            </main>

        </div>
    );
}