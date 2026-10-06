"use client";

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Bell,
    BriefcaseBusiness,
    Building2,
    ChevronDown,
    Clock3,
    FileText,
    HelpCircle,
    Home as HomeIcon,
    MapPin,
    Menu,
    Search,
    Settings,
    UserCircle,
    Users,
} from "lucide-react";

export default function Home() {
    return (
        <div className="app-container">
            {/* SIDEBAR */}
            <aside className="sidebar">
                <div className="logo">
                    <div className="logo-icon">M</div>
                    <span>MANGKARA</span>
                </div>

                <nav className="sidebar-menu">
                    <a href="#" className="menu-item">
                        <HomeIcon size={17} />
                        <span>Beranda</span>
                    </a>

                    <a href="#" className="menu-item active">
                        <BriefcaseBusiness size={17} />
                        <span>Daftar Tempat PKL</span>
                    </a>

                    <a href="#" className="menu-item">
                        <Building2 size={17} />
                        <span>Rekomendasi</span>
                    </a>

                    <a href="#" className="menu-item">
                        <Search size={17} />
                        <span>Cari Tempat PKL</span>
                    </a>

                    <a href="#" className="menu-item">
                        <FileText size={17} />
                        <span>Ulasan</span>
                    </a>

                    <a href="#" className="menu-item">
                        <UserCircle size={17} />
                        <span>Akun</span>
                    </a>

                    <a href="#" className="menu-item">
                        <HelpCircle size={17} />
                        <span>Bantuan</span>
                    </a>
                </nav>
            </aside>

            {/* MAIN */}
            <main className="main-content">
                {/* TOPBAR */}
                <header className="topbar">
                    <button className="icon-button">
                        <Menu size={21} />
                    </button>

                    <div className="topbar-right">
                        <Bell size={19} className="bell" />
                        <div className="profile">
                            <UserCircle size={30} />
                            <ChevronDown size={15} />
                        </div>
                    </div>
                </header>

                {/* CONTENT */}
                <section className="content">
                    {/* COMPANY HEADER */}
                    <div className="company-header">
                        <div className="company-image">
                            <Building2 size={35} />
                        </div>

                        <div className="company-title">
                            <h1>PT Digital Indonesia</h1>

                            <div className="company-info">
                                <span>
                                    <MapPin size={13} />
                                    Bandung
                                </span>

                                <span className="rating">
                                    ★ 4.6
                                </span>

                                <span>(120 ulasan)</span>
                            </div>
                        </div>

                        <div className="tags">
                            <span>Web Development</span>
                            <span>IT</span>
                        </div>
                    </div>

                    <div className="detail-grid">
                        {/* LEFT CONTENT */}
                        <div className="left-column">
                            {/* DESKRIPSI */}
                            <div className="card">
                                <h2>Deskripsi</h2>

                                <p>
                                    PT Digital Indonesia adalah perusahaan teknologi terkemuka
                                    yang berfokus pada pengembangan perangkat lunak berkualitas
                                    tinggi, solusi IT enterprise, dan transformasi digital.
                                    Kami membuka kesempatan berharga bagi siswa/siswi SMK untuk
                                    belajar, berkontribusi, dan berkembang langsung bersama tim
                                    engineer profesional kami.
                                </p>
                            </div>

                            {/* INFORMASI MAGANG */}
                            <div className="card">
                                <h2>Informasi Magang</h2>

                                <div className="intern-info">
                                    <div className="info-row">
                                        <Users size={18} />
                                        <div>
                                            <small>Jurusan Tersedia</small>
                                            <strong>RPL, TKJ, SI</strong>
                                        </div>
                                    </div>

                                    <div className="info-row">
                                        <BriefcaseBusiness size={18} />
                                        <div>
                                            <small>Kuota</small>
                                            <strong>5 dari 10 Tersedia</strong>
                                        </div>
                                    </div>

                                    <div className="info-row">
                                        <Clock3 size={18} />
                                        <div>
                                            <small>Durasi</small>
                                            <strong>3 - 6 Bulan</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="right-column">
                            <div className="location-card">
                                <h2>Lokasi Perusahaan</h2>

                                <p>
                                    Jl. Merdeka No. 123, Bandung, Jawa Barat, Indonesia
                                </p>

                                <div className="map">
                                    <div className="map-placeholder">
                                        <MapPin size={35} />
                                        <span>Lokasi Perusahaan</span>
                                    </div>
                                </div>

                                <button className="maps-button">
                                    Lihat di Google Maps
                                </button>

                                <button className="apply-button">
                                    Ajukan PKL Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ORNAMEN BAWAH */}
                <div className="bottom-decoration">
                    <span>❀</span>
                    <div className="wave"></div>
                    <span>❀</span>
                </div>
            </main>
        </div>
    );
}