import Link from 'next/link';
import { Camera, MapPin, UploadCloud } from 'lucide-react';

export default function ReportPage() {
  return (
    <div className="p-6 pt-10 min-h-full">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Lapor Sampah</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Bantu kami menemukan lokasi sampah yang menumpuk.</p>
      </header>

      <form className="space-y-6">
        {/* Photo Upload Area */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-900 dark:text-white">Unggah Foto</label>
          <div className="w-full h-40 bg-zinc-100 dark:bg-zinc-800/50 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <div className="w-12 h-12 bg-white dark:bg-zinc-700 rounded-full flex items-center justify-center shadow-sm mb-2">
              <Camera size={24} className="text-emerald-500" />
            </div>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Ketuk untuk mengambil foto</p>
            <p className="text-xs text-zinc-400 mt-1">atau pilih dari galeri</p>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-900 dark:text-white">Detail Lokasi</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin size={18} className="text-zinc-400" />
            </div>
            <input
              type="text"
              placeholder="Contoh: Dekat Gerbang Utama Alun-alun"
              className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-900 dark:text-white">Kategori Sampah</label>
          <div className="grid grid-cols-2 gap-3">
            {['Organik', 'Plastik', 'Elektronik', 'Barang Besar'].map((cat, idx) => (
              <label key={cat} className="cursor-pointer">
                <input type="radio" name="category" className="peer sr-only" defaultChecked={idx === 0} />
                <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center text-sm font-medium text-zinc-600 dark:text-zinc-400 peer-checked:bg-emerald-50 peer-checked:dark:bg-emerald-500/10 peer-checked:border-emerald-500 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-all">
                  {cat}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Lapor Anonim */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl mt-2">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Lapor Anonim</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Sembunyikan identitas saya pada laporan ini</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-emerald-500"></div>
          </label>
        </div>

        <Link href="/dashboard" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center mt-8">
          <UploadCloud size={20} className="mr-2" />
          Kirim Laporan
        </Link>
      </form>
    </div>
  );
}
