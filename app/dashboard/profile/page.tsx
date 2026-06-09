import Link from 'next/link';
import { Bell, ChevronRight, LogOut, Settings, User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="p-6 pt-10 min-h-full">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Profil</h1>
        <button className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-800">
          <Settings size={20} className="text-zinc-500" />
        </button>
      </header>

      {/* User Info Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 flex items-center space-x-5 mb-8">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center">
          <User size={32} className="text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Tamu</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">tamu@smartwaste.city</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">0</span>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Laporan Saya</span>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">0</span>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Selesai</span>
        </div>
      </div>

      {/* Menu List */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden mb-6">
        <button className="w-full p-4 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-500 rounded-lg">
              <Bell size={18} />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Notifikasi</span>
          </div>
          <ChevronRight size={18} className="text-zinc-400" />
        </button>
        
        <Link href="/login" className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-rose-50 dark:bg-rose-500/10 text-rose-500 rounded-lg">
              <LogOut size={18} />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Keluar</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
