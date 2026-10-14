/* ============================================================
   ORNAMEN BAWAH - memakai 3 aset batik dari folder /public
   kiri : logokiri.jpeg
   tengah: logotengah.jpeg
   kanan : logokanan.jpeg
   (dipakai bersama oleh halaman Beranda & Rekomendasi)
============================================================ */

export function BottomOrnament() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] select-none overflow-hidden"
    >
      {/* ---------- TENGAH: gelombang + bunga teratai ---------- */}
      <img
        src="/logotengah.jpeg"
        alt=""
        className="absolute bottom-0 left-1/2 h-auto w-[66%] max-w-[1100px] -translate-x-1/2"
      />

      {/* ---------- KIRI ---------- */}
      <img
        src="/logokiri.jpeg"
        alt=""
        className="absolute bottom-0 left-0 h-auto w-[18%] max-w-[320px]"
      />

      {/* ---------- KANAN ---------- */}
      <img
        src="/logokanan.jpeg"
        alt=""
        className="absolute bottom-0 right-0 h-auto w-[15%] max-w-[260px]"
      />
    </div>
  );
}

export default BottomOrnament;
