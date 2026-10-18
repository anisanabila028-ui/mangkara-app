"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { api, simpanToken } from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [pesan, setPesan] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Login ke backend Strapi (endpoint /api/auth/local)
    const loginKeDatabase = async (): Promise<{ ok: boolean }> => {
        const r = await api("/auth/local", {
            method: "POST",
            body: { identifier: formData.email, password: formData.password },
        });
        simpanToken(r.jwt);
        return { ok: true };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setPesan("");

        try {
            const hasil = await loginKeDatabase();

            // Kalau login sukses, masuk ke halaman utama aplikasi
            if (hasil.ok) {
                router.push("/dashboard/beranda");
            }
        } catch (error) {
            setPesan(error instanceof Error ? error.message : "Login gagal");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen w-full bg-[#f0f6ff] flex flex-col justify-center items-center px-4 py-8 sm:px-6">
            <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-8 sm:px-8 sm:py-10 z-10">

                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                        <img
                            src="/logmangkara.png"
                            alt="Logo Mangkara"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <span className="font-extrabold text-xl tracking-wider text-blue-600">
                        MANGKARA
                    </span>
                </div>

                {/* Judul */}
                <div className="text-center mb-6">
                    <h1 className="text-[#1a202c] font-bold text-2xl sm:text-[26px]">
                        Masuk ke Mangkara
                    </h1>

                    <p className="text-gray-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        Temukan PKL yang sesuai dengan jurusanmu
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5"
                        >
                            Email
                        </label>

                        <div className="relative">
                            <Mail
                                size={17}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Masukan Email Anda"
                                className="w-full h-11 rounded-xl border border-gray-200 pl-11 pr-3 text-xs sm:text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <Lock
                                size={17}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                minLength={6}
                                placeholder="Minimal 6 karakter"
                                className="w-full h-11 rounded-xl border border-gray-200 pl-11 pr-11 text-xs sm:text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Tombol Masuk */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-11 mt-2 bg-[#1976ff] hover:bg-[#1466dc] text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-200 transition active:scale-[0.99] disabled:opacity-60"
                    >
                        {isLoading ? "Memproses..." : "Masuk"}
                    </button>

                    {/* Pesan error dari backend */}
                    {pesan && (
                        <p className="text-red-500 text-xs text-center mt-2">{pesan}</p>
                    )}
                </form>

                {/* Atau */}
                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-gray-400 text-xs">
                        atau
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Google */}
                <button
                    type="button"
                    onClick={() =>
                        signIn("google", {
                            redirectTo: "/dashboard/beranda",
                            prompt: "select_account",
                        })
                    }
                    className="w-full h-11 border border-gray-200 rounded-xl flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition active:scale-[0.99]"
                >
                    <img
                        src="/ggl.png"
                        alt="Google"
                        className="w-4 h-4 object-contain"
                    />
                    <span>Masuk dengan Google</span>
                </button>

                {/* JALUR KE HALAMAN REGISTER */}
                <p className="text-center text-xs text-gray-500 mt-5">
                    Belum punya akun?{" "}
                    <Link
                        href="/authentic/register"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Daftar
                    </Link>
                </p>
            </div>
        </main>
    );
}
