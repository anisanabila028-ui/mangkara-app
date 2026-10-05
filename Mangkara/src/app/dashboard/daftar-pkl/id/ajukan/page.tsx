"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

const JURUSAN = [
    "Rekayasa Perangkat Lunak",
    "Teknik Komputer dan Jaringan",
    "Multimedia",
    "Akuntansi",
    "Administrasi Perkantoran",
];

const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="mb-1 block text-xs font-medium text-slate-800">{label}</label>
            {children}
        </div>
    );
}

export default function AjukanPklPage() {
    const router = useRouter();
    const [cv, setCv] = useState<File | null>(null);
    const [surat, setSurat] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Upload satu file ke Strapi Media Library, kembalikan id-nya
    async function uploadFile(file: File): Promise<number> {
        const body = new FormData();
        body.append("files", file);
        const res = await fetch(`${STRAPI_URL}/api/upload`, { method: "POST", body });
        if (!res.ok) throw new Error("Gagal mengunggah dokumen");
        const [uploaded] = await res.json();
        return uploaded.id;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        if (!surat) {
            setError("Surat pengantar PKL wajib diunggah.");
            return;
        }

        const form = new FormData(e.currentTarget);
        setLoading(true);
        try {
            const suratId = await uploadFile(surat);
            const cvId = cv ? await uploadFile(cv) : null;

            // Sesuaikan nama endpoint & field dengan collection type di Strapi kamu
            const res = await fetch(`${STRAPI_URL}/api/pengajuans`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: {
                        nama_lengkap: form.get("nama"),
                        nomor_whatsapp: form.get("whatsapp"),
                        jurusan: form.get("jurusan"),
                        asal_sekolah: form.get("sekolah"),
                        nisn: form.get("nisn"),
                        pertanyaan_tambahan: form.get("tambahan"),
                        perusahaan: "PT Digital Indonesia",
                        surat_pengantar: suratId,
                        cv_portofolio: cvId,
                    },
                }),
            });
            if (!res.ok) throw new Error("Pengajuan gagal dikirim. Coba lagi.");

            router.push("/dashboard/pengajuan-berhasil");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-[#eef3fc] px-4 py-5 sm:px-7">
            <h1 className="text-base font-bold text-slate-900">Ajukan PKL di PT Digital Indonesia</h1>
            <p className="mt-0.5 text-[11px] text-slate-800">
                Lengkapi data dan persyaratan yang di butuhkan oleh perusahaan.
            </p>

            <div
                role="note"
                className="mb-5 mt-3 flex items-start gap-2.5 rounded border border-blue-600 bg-blue-200/70 px-3.5 py-2.5 text-[11px] text-blue-800"
            >
                <svg className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 11v6M12 7.5h.01" />
                </svg>
                <p>
                    Informasi ini akan langsung dikirim ke pihak perusahaan
                    <br />
                    Pastikan data yang kamu isi sudah benar dan sesuai dengan dokumen yang diminta
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-3xl rounded-md border border-slate-300 bg-white p-5"
            >
                <h2 className="mb-3 text-base font-semibold">Data Diri</h2>
                <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-3">
                    <Field label="Nama Lengkap">
                        <input name="nama" required placeholder="Masukkan Nama Lengkap Anda" className={inputClass} />
                    </Field>
                    <Field label="Nomor WhatsApp">
                        <input name="whatsapp" type="tel" required placeholder="Contoh: 0812xxxxxxxx" className={inputClass} />
                    </Field>
                    <Field label="Pilih jurusan">
                        <select name="jurusan" required defaultValue="" className={inputClass}>
                            <option value="" disabled>
                                pilih jurusan anda
                            </option>
                            {JURUSAN.map((j) => (
                                <option key={j}>{j}</option>
                            ))}
                        </select>
                    </Field>
                    <Field label="Asal Sekolah">
                        <input name="sekolah" required placeholder="Masukkan nama sekolah Anda" className={inputClass} />
                    </Field>
                    <Field label="Nisn">
                        <input name="nisn" inputMode="numeric" required placeholder="Contoh: 0012345678" className={inputClass} />
                    </Field>
                </div>

                <h2 className="mb-2 mt-6 text-base font-semibold">Dokumen Persyaratan</h2>


                <div className="mt-4">
                    <Field label="Pertanyaan Tambahan dari Perusahaan">
                        <textarea
                            name="tambahan"
                            rows={3}
                            placeholder="Jawab pertanyaan berikut jika anda.."
                            className={`${inputClass} resize-y`}
                        />
                    </Field>
                </div>

                {error && (
                    <p role="alert" className="mt-3 text-right text-xs text-red-600">
                        {error}
                    </p>
                )}

                <div className="mt-4 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                        </svg>
                        {loading ? "Mengirim..." : "Kirim Pengajuan"}
                    </button>
                </div>
            </form>
        </div>
    );
}