"use client";

import { ExternalLink, Info } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GOOGLE_FORM_URL = "https://forms.gle/JS3EsbnTcPmKzMfF6";

export default function AjukanPKLPage() {
    const router = useRouter();
    const [formDibuka, setFormDibuka] = useState(false);

    return (
        <div className="min-h-screen bg-[#f0f6ff] flex flex-col justify-between relative pb-28 sm:pb-36 px-4 py-5 sm:px-6">
            <main className="w-full max-w-2xl mx-auto space-y-4">

                {/* JUDUL */}
                <div>
                    <h1 className="text-xl font-bold text-gray-900 sm:text-2xl leading-snug">
                        Ajukan PKL di PT Digital Indonesia
                    </h1>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                        Lengkapi data dan persyaratan yang di butuhkan oleh perusahaan.
                    </p>
                </div>

                {/* ALERT INFORMASI */}
                <div className="flex items-start gap-3 rounded-lg border border-blue-600 bg-blue-100 p-3.5 shadow-sm">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                        <Info size={16} />
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm  text-blue-600">
                            Informasi ini akan langsung dikirim ke pihak perusahaan
                        </p>
                        <p className="mt-0.5 text-xs text-black leading-relaxed">
                            Data dan dokumen pengajuan akan diisi melalui formulir Google From
                        </p>
                    </div>
                </div>

                {/* CARD DATA DIRI */}
                <div className="rounded-2xl border border-blue-100 bg-white p-4 sm:p-6 shadow-sm space-y-3.5">
                    <h2 className="text-base font-bold text-gray-900">
                        Data Diri
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Silahkan lengkapi data diri, informasi sekolah, jurusan ,dan dokumen persyaratan melalui Google From yang telah disediakan.
                    </p>

                    {/* DASHED BOX FORMULIR */}
                    <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-white p-5 text-center space-y-3">
                        <div className="mx-auto flex justify-center">
                            <img
                                src="/ajukan-pkl.png"
                                alt="Formulir Pengajuan PKL"
                                className="h-32 w-32 object-contain"
                            />
                        </div>

                        <h3 className="text-sm font-bold text-blue-600">
                            Formulir Pengajuan PKL
                        </h3>

                        <p className="text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
                            Silahkan Isi formulir pengajuan PKL untuk melengkapi data diri, nomor WhatsApp, asal sekolah,jurusan,NISN CV atau portopolio , surat pengantar PKL,dan pertanyaan tambahan dari perusahaan
                        </p>

                        <div className="pt-2">
                            <a
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    setFormDibuka(true);
                                    // Beri jeda lalu lanjut ke halaman berhasil jika diinginkan
                                    setTimeout(() => router.push("/dashboard/berhasil"), 1500);
                                }}
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#1976ff] hover:bg-[#1565c0] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-200 transition active:scale-[0.99]"
                            >
                                <ExternalLink size={14} />
                                Isi Formulir Pengajuan PKL
                            </a>
                        </div>
                    </div>
                    {/* PERHATIAN */}
                    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-3.5 space-y-1">
                        <p className="text-xs font-bold text-gray-900">
                            Perhatian
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Pastikan semua data yang kamu masukkan sudah benar dan dokumen yang diunggah sesuai dengan persyaratan sebelum mengirim formulir
                        </p>
                    </div>

                </div>



            </main>

            {/* ---------- ORNAMEN BAWAH ---------- */}

        </div>
    );
}