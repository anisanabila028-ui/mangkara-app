export function BottomOrnament({ className = "" }: { className?: string }) {
  return (
    <footer
      aria-hidden="true"
      className={`relative z-20 mt-auto h-[50px] sm:h-[68px] md:h-[85px] w-full bg-[#f0f6ff]  select-none overflow-hidden ${className}`}
    >
      {/* TENGAH: gelombang + bunga teratai */}
      <img
        src="/logotengah-removebg.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-full w-[80%] sm:w-[65%] max-w-[1000px] -translate-x-1/2 object-contain object-bottom"
      />

      {/* KIRI */}
      <img
        src="/logokiri-removebg.png"
        alt=""
        className="absolute bottom-0 left-0 h-full w-[22%] sm:w-[17%] max-w-[280px] object-contain object-bottom"
      />

      {/* KANAN */}
      <img
        src="/logokanan-removebg.png"
        alt=""
        className="absolute bottom-0 right-0 h-full w-[18%] sm:w-[14%] max-w-[240px] object-contain object-bottom"
      />
    </footer>
  );
}

export default BottomOrnament;