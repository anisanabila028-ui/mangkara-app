"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
export default function LoginPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    /**
     * ============================================================
     * SLOT KONEKSI DATABASE — LOGIN
     * ============================================================
     * Isi bagian ini nanti saat database sudah siap, contoh:
     *
     * Supabase :
     *   const { error } = await supabase.auth.signInWithPassword({
     *     email: formData.email,
     *     password: formData.password,
     *   });
     *   if (error) throw error;
     *
     * Firebase :
     *   await signInWithEmailAndPassword(auth, formData.email, formData.password);
     *
     * API sendiri :
     *   await fetch("/api/login", {
     *     method: "POST",
     *     headers: { "Content-Type": "application/json" },
     *     body: JSON.stringify(formData),
     *   });
     *
     * Data yang dikirim: formData.email dan formData.password
     * ============================================================
     */
    const loginKeDatabase = async (): Promise<{ ok: boolean }> => {
        // TODO: hubungkan ke database di sini
        await new Promise((resolve) => setTimeout(resolve, 600)); // simulasi proses login
        return { ok: true };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const hasil = await loginKeDatabase();

            // Kalau login sukses, masuk ke halaman utama aplikasi
            if (hasil.ok) {
                router.push("/dashboard/beranda");
            }
        } catch (error) {
            console.error("Login gagal:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen w-full bg-[#eff6ff] flex items-center justify-center px-4 py-6 sm:px-6">
            <div className="w-full max-w-[750px]">


                {/* Card */}
                <div className="w-full max-w-[660px] bg-white rounded-lg px-5 py-8 sm:px-10 sm:py-10 md:px-12 md:py-11">

                    <div>
                        {/* Logo */}
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl">
                                <img
                                    src="/logmangkara.png"
                                    alt="Logo Mangkar"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <span className="font-bold text-blue-600 text-lg tracking-wide">MANGKARA</span>
                        </div>
                    </div>

                    {/* Judul */}
                    <div className="text-center">
                        <h1 className="text-[#263238] font-bold text-[22px]">
                            Masuk ke Mangkara
                        </h1>

                        <p className="text-[#718096] text-[12px] mt-2">
                            Temukan PKL yang sesuai dengan jurusanmu
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-7" onSubmit={handleSubmit}>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[#4a5568] text-[12px] font-medium mb-2"
                            >
                                Email
                            </label>

                            <div className="relative">

                                <Mail
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
                                />

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Masukan Email Anda"
                                    className="w-full h-[34px] rounded-[8px] border border-[#d9d9d9] pl-11 pr-3 text-[12px] outline-none focus:border-[#2f8de4]"
                                />

                            </div>
                        </div>

                        {/* Password */}
                        <div className="mt-3">

                            <label
                                htmlFor="password"
                                className="block text-[#4a5568] text-[12px] font-medium mb-2"
                            >
                                Password
                            </label>

                            <div className="relative">

                                <Lock
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
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
                                    className="w-full h-[34px] rounded-[8px] border border-[#d9d9d9] pl-11 pr-10 text-[12px] outline-none focus:border-[#2f8de4]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777]"
                                >
                                    {showPassword ? (
                                        <EyeOff size={15} />
                                    ) : (
                                        <Eye size={15} />
                                    )}
                                </button>

                            </div>
                        </div>

                        {/* Tombol Masuk */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-[35px] mt-4 bg-[#2f8de4] hover:bg-[#2580d3] text-white text-[12px] font-semibold rounded-[8px] disabled:opacity-60"
                        >
                            {isLoading ? "Memproses..." : "Masuk"}
                        </button>

                    </form>

                    {/* Atau */}
                    <div className="flex items-center gap-4 my-7">

                        <div className="flex-1 h-px bg-[#dddddd]" />

                        <span className="text-[#888888] text-[11px]">
                            atau
                        </span>

                        <div className="flex-1 h-px bg-[#dddddd]" />

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
                        className="w-full h-[35px] border border-[#d9d9d9] rounded-[8px] flex items-center justify-center gap-5 text-[12px] font-semibold text-[#333] hover:bg-gray-50"
                    >
                        <img
                            src="/ggl.png"
                            alt="Google"
                            className="w-4 h-4 object-contain"
                        />

                        <span>
                            Masuk dengan Google
                        </span>
                    </button>

                    {/* JALUR KE HALAMAN REGISTER */}
                    <p className="text-center text-[12px] text-[#718096] mt-6">
                        Belum punya akun?{" "}
                        <Link
                            href="/authentic/register"
                            className="text-[#2f8de4] font-semibold hover:underline"
                        >
                            Daftar
                        </Link>
                    </p>

                </div>
            </div>


        </main >
    );
}