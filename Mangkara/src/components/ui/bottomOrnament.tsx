export function BottomOrnament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed bottom-0 left-0 right-0 z-20 h-[50px] sm:h-[68px] md:h-[85px] select-none overflow-hidden ${className}`}
    >
      {/* ---------- TENGAH: gelombang + bunga teratai ---------- */}
      <img
        src="/logotengah-removebg.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-auto w-[80%] sm:w-[65%] max-w-[1000px] -translate-x-1/2 object-contain"
      />

      {/* ---------- KIRI ---------- */}
      <img
        src="/logokiri-removebg.png"
        alt=""
        className="absolute bottom-0 left-0 h-auto w-[22%] sm:w-[17%] max-w-[280px] object-contain"
      />

      {/* ---------- KANAN ---------- */}
      <img
        src="/logokanan-removebg.png"
        alt=""
        className="absolute bottom-0 right-0 h-auto w-[18%] sm:w-[14%] max-w-[240px] object-contain"
      />
    </div>
  );
}

export default BottomOrnament;