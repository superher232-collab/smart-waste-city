import Link from 'next/link';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="h-[100dvh] w-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      {/* Mobile container simulator for desktop viewing */}
      <div 
        className="w-full h-full max-w-md mx-auto bg-white dark:bg-zinc-950 sm:shadow-2xl sm:h-[850px] sm:max-h-[100dvh] sm:rounded-[40px] sm:overflow-hidden relative sm:border-[8px] sm:border-zinc-800 flex flex-col p-8"
        style={{ paddingTop: 'calc(2rem + env(safe-area-inset-top))', paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
      >
        
        {/* Header */}
        <div className="mt-12 mb-10">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Selamat Datang Kembali</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Masuk untuk lanjut membuat kota Anda lebih bersih.</p>
        </div>

        {/* Form */}
        <form className="flex-1 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Alamat Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Kata Sandi</label>
              <Link href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                Lupa kata sandi?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <Link
            href="/dashboard"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center mt-8 group"
          >
            Masuk
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/dashboard">
            <button
              type="button"
              className="w-full bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 py-3 rounded-xl font-semibold transition-all flex items-center justify-center mt-4 group"
            >
              Lanjut sebagai Tamu
              <User size={20} className="ml-2" />
            </button>
          </Link>
        </form>

        {/* Footer */}
        <div className="mt-auto text-center pb-6">
          <p className="text-zinc-500 dark:text-zinc-400">
            Belum punya akun?{' '}
            <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-500 transition-colors">
              Daftar akun
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}
