'use client';

export default function CariPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-lg font-bold text-gray-800">Cari Tempat PKL</h1>
            <p className="text-xs text-gray-400 mb-6">
                Gunakan pencarian dan filter di samping untuk menemukan industri yang ideal.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Kolom Kiri: Input Search & Hasil */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="PT Digital Indonesia"
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none focus:border-blue-500"
                        />
                        <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <h3 className="text-xs font-semibold text-gray-600 mt-4">Hasil Pencarian</h3>

                    {/* Item Result Card */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                <div className="w-full h-full bg-slate-300" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-gray-800">PT Digital Indonesia</h4>
                                <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1">
                                    <span>📍 Bandung</span>
                                    <span>Sisa Kuota: <b className="text-blue-600">5</b></span>
                                    <span className="text-amber-500 font-semibold">⭐ 4.6</span>
                                </div>
                            </div>
                        </div>
                        <button className="px-3.5 py-1.5 border border-blue-500 text-blue-500 text-xs font-medium rounded-lg hover:bg-blue-50 transition">
                            Lihat Detail
                        </button>
                    </div>
                </div>

                {/* Kolom Kanan: Sidebar Filter */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-fit space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-xs text-gray-800">Filter</h3>
                        <button className="text-[10px] text-blue-500 font-medium">Reset</button>
                    </div>

                    <div>
                        <label className="block text-[10px] text-gray-400 mb-1">PILIH JURUSAN</label>
                        <select className="w-full p-2 border border-gray-200 rounded-lg text-xs text-gray-600 outline-none">
                            <option>Pilih jurusan Anda</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[10px] text-gray-400 mb-1">PILIH LOKASI</label>
                        <select className="w-full p-2 border border-gray-200 rounded-lg text-xs text-gray-600 outline-none">
                            <option>Semua lokasi</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[10px] text-gray-400 mb-1">KETERSEDIAAN KUOTA</label>
                        <label className="flex items-center gap-2 text-xs text-gray-600 mt-1 cursor-pointer">
                            <input type="checkbox" defaultChecked className="rounded text-blue-500 focus:ring-blue-400" />
                            Tersedia
                        </label>
                    </div>

                    <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg shadow-sm shadow-blue-200 transition">
                        Terapkan Filter
                    </button>
                </div>
            </div>
        </div>
    );
}