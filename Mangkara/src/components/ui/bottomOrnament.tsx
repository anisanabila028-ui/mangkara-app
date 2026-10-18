/* ============================================================
   ORNAMEN BAWAH - memakai 3 aset batik dari folder /public
   kiri : logokiri-removebg.png
   tengah: logotengah-removebg.png
   kanan : logokanan-removebg.png
   (dipakai bersama oleh halaman Beranda & Rekomendasi)
============================================================ */

export function BottomOrnament() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 h-[150px] select-none overflow-hidden lg:left-64"
    >
      {/* ---------- TENGAH: gelombang + bunga teratai ---------- */}
      <img
        src="/logotengah-removebg.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-auto w-[66%] max-w-[1100px] -translate-x-1/2"
      />

      {/* ---------- KIRI ---------- */}
      <img
        src="/logokiri-removebg.png"
        alt=""
        className="absolute bottom-0 left-0 h-auto w-[18%] max-w-[320px]"
      />

      {/* ---------- KANAN ---------- */}
      <img
        src="/logokanan-removebg.png"
        alt=""
        className="absolute bottom-0 right-0 h-auto w-[15%] max-w-[260px]"
      />
    </div>
  );
}

export default BottomOrnament;
