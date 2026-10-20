# Mangkara - Platform Cari Tempat PKL

Mangkara adalah aplikasi berbasis web yang dirancang untuk membantu siswa SMK dalam mencari, menemukan, serta memfilter tempat Praktik Kerja Lapangan (PKL) atau magang dengan mudah, cepat, dan sesuai dengan jurusan atau kompetensi keahlian.

## 🚀 Fitur Utama
- **Pencarian Industri/PKL**: Mencari tempat PKL berdasarkan nama perusahaan, jurusan, maupun lokasi.
- **Filter Komprehensif**: Menyaring daftar tempat PKL berdasarkan pilihan jurusan, lokasi spesifik, dan ketersediaan kuota.
- **Rekomendasi Tempat PKL**: Menampilkan kurasi tempat PKL terbaik dengan informasi rating dan sisa kuota secara real-time.
- **Manajemen Akun & Favorit**: Menyimpan tempat PKL favorit, melihat riwayat kontribusi, dan mengelola profil pengguna.
- **Desain Responsif**: Dioptimalkan untuk kenyamanan akses di perangkat mobile maupun desktop.

## 🛠️ Teknologi yang Digunakan
- **Framework**: [Next.js](https://nextjs.org/) (dengan App Router & Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Ikon**: [Lucide React](https://lucide.dev/)

## ⚙️ Cara Menjalankan Proyek Secara Lokal

1. **Clone the repository**:

```bash
git clone https://github.com/anisanamabila08-ui/mangkara-app.git
cd mangkara-app/mangkara
```

2. **Install dependencies**:

```bash
npm install
```

3. **Configure environment variables**:

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. **Run the development server**:

```bash
npm run dev
```

5. Open your browser at `http://localhost:3000`.
   ```bash
   
## 📂 Struktur Folder Proyek

Struktur direktori di dalam proyek Next.js ini disusun menggunakan pendekatan *App Router* standar:

```text
mangkara/
├── public/                 # Aset statis (gambar, ilustrasi, logo, dll)
│   ├── Hero Illustration.jpeg
│   ├── PKL Ilustration.jpeg
│   ├── ajukan-pkl.png
│   ├── berhasil.png
│   ├── fto1.jpeg
│   ├── fto2.jpeg
│   ├── fto3.jpeg
│   ├── fto4.jpeg
│   ├── fto5.jpeg
│   ├── ggl.png
│   ├── logmangkara.png
│   ├── logokanan-removebg.png
│   ├── logokanan.jpeg
│   ├── logokiri-removebg.png
│   ├── logokiri.jpeg
│   ├── logomangkara.jpeg
│   ├── logotengah-removebg.png
│   └── logotengah.jpeg
├── src/
│   ├── app/
│   │   ├── api/               # API routes (Next.js)
│   │   ├── authentic/         # Halaman autentikasi/login
│   │   ├── dashboard/
│   │   │   ├── akun/
│   │   │   ├── bantuan/
│   │   │   ├── beranda/
│   │   │   ├── berhasil/
│   │   │   ├── cari/
│   │   │   ├── daftar-pkl/
│   │   │   ├── detail/
│   │   │   ├── rekomendasi/
│   │   │   ├── ulasan/
│   │   │   └── ajukan/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/            # Layout components (Topbar, dll)
│   │   ├── map/               # Map components (if any)
│   │   └── ui/                # UI small components (bottomOrnament, dll)
│   └── lib/
│       ├── api.ts
│       └── pengguna.ts
├── .env.local              # Konfigurasi Environment Variables lokal
├── package.json            # Daftar dependencies dan scripts npm
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
└── tsconfig.json           # Konfigurasi TypeScript
```