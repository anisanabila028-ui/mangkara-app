"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Info, CheckCircle2 } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/JS3EsbnTcPmKzMfF6";

export default function AjukanPKLPage() {
    const router = useRouter();

    // Jadi true setelah tombol "Isi Formulir" diklik (form terbuka di tab baru)
    const [formDibuka, setFormDibuka] = useState(false);

    return (
        <div className="min-h-screen bg-[#f4f8ff]">

            <main className="min-h-screen bg-[#dcecff] px-4 py-5 sm:px-6 lg:px-10 lg:py-7">

                {/* JUDUL */}
                <div className="mb-5">
                    <h1 className="text-xl font-bold text-[#263238] sm:text-2xl">
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
                        className="mt-0.5 shrink-0 text-[#1478df]"
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
                <div className="mx-auto w-full max-w-[900px] rounded-lg border border-[#5da2ff] bg-white p-5 shadow-sm sm:p-7">

                    <h2 className="mb-2 text-lg font-bold text-[#263238]">
                        Data Diri
                    </h2>

                    <p className="mb-6 text-xs leading-5 text-gray-500">
                        Silakan lengkapi data diri, informasi sekolah, jurusan,
                        dan dokumen persyaratan melalui Google Form yang telah
                        disediakan.
                    </p>


                    {/* GOOGLE FORM */}
                    <div className="rounded-lg border border-[#b9d9ff] bg-[#f8fbff] p-5 text-center sm:p-8">

                        {/* FOTO */}
                        <div className="mx-auto mb-3 flex items-center justify-center">
                            <img
                                src="/ajukan-pkl.png"
                                alt="Formulir Pengajuan PKL"
                                className="h-[140px] w-[140px] object-contain"
                            />
                        </div>


                        <h3 className="text-base font-bold text-[#263238]">
                            Formulir Pengajuan PKL
                        </h3>


                        <p className="mx-auto mt-2 max-w-[600px] text-xs leading-5 text-gray-500">
                            Silakan isi formulir pengajuan PKL untuk melengkapi
                            data diri, nomor WhatsApp, asal sekolah, jurusan,
                            NISN, CV atau portofolio, surat pengantar PKL,
                            dan pertanyaan tambahan dari perusahaan.
                        </p>


                        {/* LINK GOOGLE FORM */}
                        <div className="mt-6 flex justify-center">

                            <a
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setFormDibuka(true)}
                                className="flex w-full max-w-[300px] items-center justify-center gap-2 rounded-md bg-[#1478df] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#096bcf] sm:w-auto"
                            >
                                <ExternalLink size={15} />

                                Isi Formulir Pengajuan PKL
                            </a>

                        </div>

                    </div>


                    {/* KONFIRMASI SETELAH FORM DIBUKA */}
                    {formDibuka && (
                        <div className="mt-5 flex flex-col gap-3 rounded-md border border-[#5da2ff] bg-[#e5f1ff] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <p className="text-sm font-semibold text-[#263238]">
                                    Sudah mengirim formulirnya?
                                </p>
                                <p className="mt-1 text-xs text-gray-600">
                                    Setelah muncul tulisan formulir terkirim di Google
                                    Form, klik tombol di samping untuk melanjutkan.
                                </p>
                            </div>


                        </div>
                    )}


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

            </main>

        </div>
    );
}