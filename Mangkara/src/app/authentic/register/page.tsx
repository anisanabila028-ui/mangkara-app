"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "../../../components/ui/inputField";
import SelectField from "../../../components/ui/selectField";
import Button from "../../../components/ui/button";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/authentic/coplete-profile");
  };

  const opsiJurusan = [
    { value: "PPLG", label: "Pengembangan Perangkat Lunak dan Gim (PPLG)" },
    { value: "MPLB", label: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)" },
    { value: "AKL", label: "Akuntansi Keuangan dan Lembaga (AKL)" },
    { value: "PM", label: "Pemasaran (PM)" },
  ];

  return (
    <div className="min-h-screen w-full flex bg-[#F4F8FC]">
      {/* SISI KIRI: Banner & Ilustrasi */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50/50 p-12 flex-col justify-between relative overflow-hidden">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
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

        {/* Gambar Ilustrasi (opsional/placeholder) */}
        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
          <div className="w-72 h-72 bg-blue-200/40 rounded-full blur-3xl absolute" />
          <img
            src="/illustration.png"
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
              placeholder="Minimal 6 karakter"
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
              className="mt-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl text-sm transition shadow-md shadow-blue-200"
            >
              Daftar
            </Button>
          </form>

          <div className="text-center text-xs text-gray-400 pt-2">
            Sudah punya akun?{" "}
            <Link
              href="/authentic/login"
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