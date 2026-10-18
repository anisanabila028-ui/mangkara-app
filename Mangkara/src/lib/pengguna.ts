import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApi } from './api';

// Pakai di halaman yang wajib login. Mengembalikan profil sendiri, atau pindah ke halaman login.
export function usePengguna() {
    const router = useRouter();
    const { data, error } = useApi('/profil/saya');
    useEffect(() => {
        if (error) router.replace('/');
    }, [error]);
    return data?.data ?? null;
}