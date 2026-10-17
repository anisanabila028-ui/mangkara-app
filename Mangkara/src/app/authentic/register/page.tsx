"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "../../../components/ui/inputField";
import SelectField from "../../../components/ui/selectField";
import Button from "../../../components/ui/button";
import { api, useApi, simpanToken } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    sekolah: "",
    jurusan: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [pesan, setPesan] = useState("");

  // Daftar akun ke backend Strapi (/api/auth/local/register).
  // Backend menerima: username, email, password, nama_lengkap, jurusan.
  // Field "sekolah" tidak dikirim di sini karena backend belum menerimanya saat daftar.
  const simpanKeDatabase = async (): Promise<{ ok: boolean }> => {
    if (formData.password.length < 8) {
      throw new Error("Password minimal 8 karakter");
    }
    const r = await api("/auth/local/register", {
      method: "POST",
      body: {
        username: formData.email,
        email: formData.email,
        password: formData.password,
        nama_lengkap: formData.namaLengkap,
        jurusan: formData.jurusan,
      },
    });
    simpanToken(r.jwt);
    return { ok: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPesan("");

    try {
      const hasil = await simpanKeDatabase();

      // Kalau pendaftaran sukses, lanjut ke pelengkapan profil
      if (hasil.ok) {
        router.push("/authentic/complete-profile");
      }
    } catch (error) {
      setPesan(error instanceof Error ? error.message : "Pendaftaran gagal");
    } finally {
      setIsLoading(false);
    }
  };

  // Daftar jurusan diambil dari backend (/api/daftar-jurusan).
  // Kalau belum termuat atau gagal, pakai daftar cadangan di bawah.
  const { data: dataJurusan } = useApi("/daftar-jurusan");
  const jurusanCadangan = [
    { value: "PPLG", label: "Pengembangan Perangkat Lunak dan Gim (PPLG)" },
    { value: "MPLB", label: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)" },
    { value: "AKL", label: "Akuntansi Keuangan dan Lembaga (AKL)" },
    { value: "PM", label: "Pemasaran (PM)" },
  ];
  const opsiJurusan: { value: string; label: string }[] =
    dataJurusan?.data?.length
      ? dataJurusan.data.map((j: any) => ({
        value: j.kode,
        label: `${j.kode} - ${j.nama}`,
      }))
      : jurusanCadangan;

  return (
    <div className="min-h-screen w-full flex bg-[#F4F8FC]">
      {/* SISI KIRI: Banner & Ilustrasi */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50/50 p-12 flex-col justify-between relative overflow-hidden">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/logmangkara.png"
                alt="Logo Mangkara"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-extrabold text-2xl tracking-wider text-blue-600">
              MANGKARA
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Selamat Datang!
          </h1>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            Masuk untuk menemukan informasi tempat PKL terbaik sesuai kebutuhanmu.
          </p>
        </div>

        {/* Gambar Ilustrasi dari folder public/ */}
        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
          <div className="w-72 h-72 bg-blue-200/40 rounded-full blur-3xl absolute" />
          <img
            src="/PKL Ilustration.jpeg"
            alt="PKL Illustration"
            className="relative z-10 w-full object-contain max-h-[380px]"
            onError={(e) => {
              // Menyediakan visual fallback jika gambar belum ada
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* SISI KANAN: Form Pendaftaran */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-50/50 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">Daftar Akun</h2>
            <p className="text-xs text-gray-400">
              Isi data berikut untuk membuat akun.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Nama Lengkap"
              name="namaLengkap"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              value={formData.namaLengkap}
              onChange={handleInputChange}
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Masukkan email Anda"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Minimal 8 karakter"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <InputField
              label="Asal Sekolah"
              name="sekolah"
              type="text"
              placeholder="Pilih asal sekolah Anda"
              value={formData.sekolah}
              onChange={handleInputChange}
              required
            />

            <SelectField
              label="Jurusan"
              name="jurusan"
              options={opsiJurusan}
              value={formData.jurusan}
              onChange={handleInputChange}
              required
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isLoading}
              className="mt-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl text-sm transition shadow-md shadow-blue-200 disabled:opacity-60"
            >
              {isLoading ? "Memproses..." : "Daftar"}
            </Button>

            {/* Pesan error dari backend */}
            {pesan && <p className="text-red-500 text-xs">{pesan}</p>}
          </form>

          <div className="text-center text-xs text-gray-400 pt-2">
            Sudah punya akun?{" "}
            <Link
              href="/"
              className="text-blue-500 font-bold hover:underline ml-1"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}