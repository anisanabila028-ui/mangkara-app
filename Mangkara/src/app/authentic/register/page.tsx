"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { api, useApi, simpanToken } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
    asalSekolah: "",
    jurusan: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pesan, setPesan] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simpanKeDatabase = async (): Promise<{ ok: boolean }> => {
    if (formData.password.length < 6) {
      throw new Error("Password minimal 6 karakter");
    }
    if (formData.konfirmasiPassword && formData.password !== formData.konfirmasiPassword) {
      throw new Error("Konfirmasi password tidak cocok");
    }
    const r = await api("/auth/local/register", {
      method: "POST",
      body: {
        username: formData.email,
        email: formData.email,
        password: formData.password,
        nama_lengkap: formData.namaLengkap,
        asal_sekolah: formData.asalSekolah,
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
      if (hasil.ok) {
        router.push("/authentic/complete-profile");
      }
    } catch (error) {
      setPesan(error instanceof Error ? error.message : "Pendaftaran gagal");
    } finally {
      setIsLoading(false);
    }
  };

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
    <main className="min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* SISI KIRI: Banner, Logo, & Ilustrasi */}
      <section className="w-full lg:w-1/2 bg-[#f0f6ff] flex flex-col justify-between p-8 lg:p-16 relative">
        <div>
          {/* Logo Mangkara */}
          <div className="flex items-center gap-2 mb-8">
            <img 
              src="/logmangkara.png" 
              alt="Logo Mangkara" 
              className="w-20 h-20 object-contain"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="font-extrabold text-blue-600 tracking-wider text-lg">MANGKARA</span>
          </div>

          {/* Judul & Deskripsi */}
          <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Selamat Datang!
          </h1>
          <p className="text-sm lg:text-base text-gray-500 max-w-md leading-relaxed">
            Masuk untuk menemukan informasi tempat PKL terbaik sesuai kebutuhanmu.
          </p>
        </div>

        {/* Gambar Ilustrasi */}
        <div className="w-full mt-8 flex justify-center items-end">
          <img
            src="/PKL Ilustration.jpeg"
            alt="Ilustrasi PKL"
            className="w-full max-w-lg h-auto object-contain max-h-[380px]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </section>

      {/* SISI KANAN: Form Pendaftaran */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 relative bg-white">
        <div className="w-full max-w-[440px] bg-white lg:shadow-2xl lg:border lg:border-gray-100 rounded-3xl p-6 lg:p-8 z-10">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-gray-900">Daftar Akun</h2>
            <p className="text-xs text-gray-400 mt-1">
              Isi data berikut untuk membuat akun.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                required
                placeholder="Masukkan nama lengkap Anda"
                className="w-full h-11 px-4 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Masukkan email Anda"
                className="w-full h-11 px-4 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  placeholder="Minimal 6 karakter"
                  className="w-full h-11 pl-4 pr-10 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Asal Sekolah */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Asal Sekolah
              </label>
              <input
                type="text"
                name="asalSekolah"
                value={formData.asalSekolah}
                onChange={handleInputChange}
                required
                placeholder="Pilih asal sekolah Anda"
                className="w-full h-11 px-4 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Pilih Jurusan */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Jurusan
              </label>
              <div className="relative">
                <select
                  name="jurusan"
                  value={formData.jurusan}
                  onChange={handleInputChange}
                  required
                  className="w-full h-11 pl-4 pr-10 rounded-xl border border-gray-200 text-xs text-gray-600 bg-white appearance-none outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                >
                  <option value="">Pilih jurusan Anda</option>
                  {opsiJurusan.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Tombol Daftar */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 mt-2 bg-[#1976ff] hover:bg-[#1565c0] text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-200 transition active:scale-[0.99] disabled:opacity-60"
            >
              {isLoading ? "Memproses..." : "Daftar"}
            </button>

            {pesan && (
              <p className="text-red-500 text-xs text-center">{pesan}</p>
            )}
          </form>

          <div className="text-center text-xs text-gray-500 mt-6">
            Sudah punya akun?{" "}
            <Link
              href="/"
              className="text-blue-600 font-bold hover:underline ml-1"
            >
              Masuk
            </Link>
          </div>
        </div>

        {/* Ornamen Bawah */}
        <div className="w-full absolute bottom-0 left-0 overflow-hidden pointer-events-none hidden lg:block opacity-60">
          <img 
            src="/berhasil.png" 
            alt="Ornament" 
            className="w-full h-auto object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
      </section>
    </main>
  );
}