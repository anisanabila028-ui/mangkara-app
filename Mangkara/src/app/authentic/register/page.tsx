"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "../../../components/ui/inputField";
import SelectField from "../../../components/ui/selectField";
import Topbar from "@/components/layout/topbar";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { api, useApi, simpanToken } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
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
    <div className="min-h-screen w-full bg-[#eaf2ff] flex flex-col items-center">
      {/* Container utama dengan batas lebar mobile mockup */}
      <div className="w-full max-w-[440px] min-h-screen bg-white shadow-xl flex flex-col justify-between">
        <div>
          {/* Topbar */}
          <Topbar />

          {/* Banner Selamat Datang */}
          <div className="bg-[#f0f6ff] px-6 py-5 border-b border-blue-50">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Selamat Datang!
            </h1>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Masuk untuk menemukan informasi tempat PKL terbaik sesuai kebutuhanmu.
            </p>
          </div>

          {/* Form Area */}
          <div className="px-6 py-5">
            <div className="mb-4">
              <h2 className="text-base font-bold text-gray-900">Daftar Akun</h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Isi data berikut untuk membuat akun.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
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
                  placeholder="Masukan nama Lengkap Anda"
                  className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
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
                  placeholder="Masukan Email Anda"
                  className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
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
                    className="w-full h-10 pl-3.5 pr-10 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
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

              {/* Masukan Kembali Password */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Masukan Kembali Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="konfirmasiPassword"
                    value={formData.konfirmasiPassword}
                    onChange={handleInputChange}
                    placeholder="Masukan Kembali Password"
                    className="w-full h-10 pl-3.5 pr-10 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Pilih jurusan */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Pilih jurusan
                </label>
                <div className="relative">
                  <select
                    name="jurusan"
                    value={formData.jurusan}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 pl-3.5 pr-9 rounded-xl border border-gray-200 text-xs text-gray-600 bg-white appearance-none outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  >
                    <option value="">pilih jurusan Anda</option>
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
                className="w-full h-11 mt-4 bg-[#1976ff] hover:bg-[#1565c0] text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-200 transition active:scale-[0.99] disabled:opacity-60"
              >
                {isLoading ? "Memproses..." : "Daftar"}
              </button>

              {pesan && (
                <p className="text-red-500 text-xs text-center">{pesan}</p>
              )}
            </form>

            <div className="text-center text-xs text-gray-500 pt-4 pb-2">
              Sudah punya akun?{" "}
              <Link
                href="/"
                className="text-blue-600 font-bold hover:underline ml-1"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>

        {/* Gambar Ilustrasi di bagian bawah persis Gambar 2 */}
        <div className="w-full overflow-hidden mt-2">
          <img
            src="/PKL Ilustration.jpeg"
            alt="Ilustrasi PKL"
            className="w-full h-auto object-cover max-h-[220px]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}