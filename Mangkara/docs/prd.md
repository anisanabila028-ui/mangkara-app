# 📦 Dokumen Persyaratan Produk (PRD)

## Ringkasan
**Mangkara** adalah platform web yang membantu siswa SMK menemukan dan melamar Praktik Kerja Lapangan (PKL) atau kesempatan magang. Sistem menyediakan pencarian daftar, penyaringan berdasarkan jurusan, lokasi, dan kuota, serta daftar favorit pribadi.

## Tujuan
- Memungkinkan siswa dengan cepat menemukan tempat PKL yang sesuai dengan program studi mereka.
- Memungkinkan perusahaan/instansi untuk mempublikasikan slot PKL yang tersedia dengan informasi kuota real‑time.
- Menyajikan UI yang bersih dan responsif untuk perangkat seluler maupun desktop.

## Fitur Utama
| # | Fitur | Deskripsi |
|---|-------|-----------|
| 1 | **Pencarian & Penyaringan** | Cari berdasarkan nama perusahaan, jurusan, dan lokasi; filter berdasarkan kuota yang masih tersedia. |
| 2 | **Rekomendasi** | Algoritma memberi saran PKL terbaik berdasarkan rating dan relevansi. |
| 3 | **Favorit & Riwayat** | Pengguna dapat menandai PKL favorit dan melihat riwayat aplikasi mereka. |
| 4 | **Akun Pengguna** | Registrasi / login, manajemen profil, dan penyimpanan preferensi. |
| 5 | **Dashboard Admin** (masa depan) | Mengelola daftar PKL, memperbarui kuota, dan melihat analitik. |

## User Stories
- **Sebagai siswa**, saya ingin menyaring daftar PKL berdasarkan jurusan saya sehingga hanya melihat peluang yang relevan.
- **Sebagai siswa**, saya ingin melihat berapa slot yang tersisa untuk setiap tempat PKL agar dapat melamar sebelum penuh.
- **Sebagai siswa**, saya ingin menyimpan daftar favorit untuk meninjau kembali nanti.
- **Sebagai perusahaan**, saya ingin mempublikasikan daftar PKL dengan deskripsi, lokasi, dan kuota yang tersedia.

## Teknologi yang Digunakan
- **Framework**: Next.js (App Router) dengan TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + SWR untuk fetching data
- **Backend API**: End‑point RESTful (hosted terpisah, diakses lewat `NEXT_PUBLIC_API_URL`)
- **Testing**: Jest + React Testing Library (rencana)

## Kriteria Penerimaan
1. Semua operasi pencarian dan penyaringan mengembalikan hasil dalam ≤ 1 detik pada koneksi broadband standar.
2. UI sepenuhnya responsif – breakpoint pada 640 px, 768 px, dan 1024 px.
3. Favorit disimpan pada backend dan ter‑update secara real‑time setelah toggle.
4. Proyek dapat dibangun tanpa error TypeScript atau ESLint (`npm run build` berhasil).

## Pengembangan Selanjutnya
- **Tampilan Peta** – visualisasi lokasi PKL pada peta interaktif.
- **Sistem Notifikasi** – notifikasi email atau in‑app ketika kuota pada listing yang disimpan berubah.
- **Panel Admin** – antarmuka CRUD untuk perusahaan mengelola listing mereka.

---
*Dokumen PRD ini berada di `docs/prd.md` dan harus diperbarui seiring munculnya kebutuhan baru.*

