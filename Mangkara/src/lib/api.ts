import { useEffect, useState } from 'react';

export const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337';

export const simpanToken = (t: string) => localStorage.setItem('jwt', t);
export const hapusToken = () => localStorage.removeItem('jwt');

export const LABEL_STATUS: Record<string, string> = {
    belum_diisi: 'Belum mengisi formulir',
    terkirim: 'Terkirim, menunggu verifikasi admin',
    diteruskan: 'Sudah diteruskan ke perusahaan',
    diterima: 'Diterima',
    ditolak: 'Ditolak',
};

export async function api(path: string, opsi: { method?: string; body?: unknown } = {}): Promise<any> {
    const token = localStorage.getItem('jwt');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
        const res = await fetch(`${API}/api${path}`, {
            method: opsi.method ?? 'GET',
            headers: {
                'Content-Type': 'application/json',
                // token lama tidak dikirim ke endpoint masuk/daftar dan publik
                ...(token && !path.startsWith('/auth/') && path !== '/daftar-jurusan' ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: opsi.body ? JSON.stringify(opsi.body) : undefined,
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        const json = await res.json().catch(() => null);
        if (!res.ok) throw new Error(json?.error?.message ?? `Terjadi kesalahan (${res.status})`);
        return json;
    } catch (err: any) {
        clearTimeout(timeoutId);
        if (err.name === 'AbortError') {
            throw new Error('Backend tidak merespons (timeout)');
        }
        throw err;
    }
}

// Ambil data saat halaman dibuka; path=null artinya tunda. reload() untuk ambil ulang.
export function useApi(path: string | null) {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState('');
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!path) return;
        setError('');
        api(path).then(setData).catch((e) => setError(e.message));
    }, [path, n]);
    return { data, error, reload: () => setN((x) => x + 1) };
}