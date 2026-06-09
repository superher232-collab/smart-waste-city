import Link from 'next/link';
import { AlertCircle, ArrowRight, Leaf, MapPin, Recycle, TrendingUp, ShieldAlert } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-6 pt-10 min-h-full">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-1">Halo, Tamu 👋</p>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Smart Waste City</h1>
        </div>
        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center shadow-inner">
          <Leaf className="text-emerald-600 dark:text-emerald-400" size={24} />
        </div>
      </header>

      {/* Quick Action / CTA */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {/* Lapor Sampah */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Melihat tumpukan sampah?</h2>
            <p className="text-emerald-50 mb-4 text-sm max-w-[80%]">Bantu jaga kebersihan kota dengan melaporkan sampah.</p>
            <Link href="/dashboard/report" className="bg-white text-emerald-700 font-semibold px-5 py-2.5 rounded-full text-sm inline-flex items-center hover:bg-emerald-50 transition-colors">
              Lapor Sekarang
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
            <Recycle size={60} />
          </div>
        </div>

        {/* SOS Kejahatan */}
        <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-3xl p-6 text-white shadow-xl shadow-rose-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Dalam Bahaya?</h2>
            <p className="text-rose-50 mb-4 text-sm max-w-[80%]">Tekan untuk membagikan lokasi langsung Anda ke aparat berwenang secara rahasia.</p>
            <Link href="/dashboard/sos" className="bg-white text-rose-700 font-bold px-5 py-2.5 rounded-full text-sm inline-flex items-center hover:bg-rose-50 transition-colors shadow-lg shadow-white/20">
              <ShieldAlert size={18} className="mr-2" />
              Darurat SOS
            </Link>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-4 right-4 opacity-20 pointer-events-none animate-pulse">
            <ShieldAlert size={60} />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Ringkasan Kota</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg">
              <TrendingUp size={18} />
            </div>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Laporan</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">1.248</p>
          <p className="text-xs text-emerald-600 font-medium mt-1">+12% minggu ini</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 rounded-lg">
              <MapPin size={18} />
            </div>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Aktif</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">42</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">Rute hari ini</p>
        </div>
      </div>

      {/* Recent Activity */}
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Aktivitas Terbaru</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 flex items-center space-x-4">
            <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle size={20} className="text-zinc-500 dark:text-zinc-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Sampah dilaporkan di Jl. Sudirman</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">2 jam yang lalu</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-orange-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
