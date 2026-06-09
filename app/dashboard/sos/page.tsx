import Link from 'next/link';
import { Camera, MapPin, Mic, PhoneCall, ShieldAlert, X } from 'lucide-react';

export default function SOSPage() {
  return (
    <div className="min-h-full w-full bg-zinc-950 text-white relative overflow-hidden flex flex-col items-center justify-between p-6">
      
      {/* Background Radar Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-rose-500/20 absolute" />
        <div className="w-[600px] h-[600px] rounded-full border border-rose-500/30 absolute" />
        <div className="w-[400px] h-[400px] rounded-full border border-rose-500/40 absolute" />
        
        {/* Radar sweep */}
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-t from-transparent via-rose-500/10 to-rose-500/30 rounded-full animate-[spin_3s_linear_infinite] origin-bottom-right" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }} />
        
        {/* Center Pulse */}
        <div className="absolute w-24 h-24 bg-rose-600 rounded-full animate-ping opacity-50" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full text-center mt-12">
        <div className="inline-flex items-center justify-center p-4 bg-rose-500/20 rounded-full text-rose-500 mb-6 border border-rose-500/30">
          <ShieldAlert size={48} className="animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold mb-2">SOS Aktif</h1>
        <p className="text-rose-200">Membagikan lokasi langsung ke pihak berwajib...</p>
      </div>

      {/* Location Status Card */}
      <div className="relative z-10 w-full bg-zinc-900/80 backdrop-blur-md rounded-3xl p-5 border border-zinc-800 shadow-2xl mt-8">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-zinc-800 rounded-full text-emerald-400">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-1">Akurasi GPS (± 5 meter)</p>
            <h2 className="text-lg font-bold">Jl. Sudirman No. 42</h2>
            <p className="text-sm text-zinc-500">Koordinat: -6.2088, 106.8456</p>
          </div>
        </div>
      </div>

      {/* Emergency Call Action */}
      <div className="relative z-10 w-full mt-auto mb-6">
        <a href="tel:112" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-red-500/30 transition-all flex items-center justify-center">
          <PhoneCall size={24} className="mr-3 animate-bounce" />
          Hubungi Polisi (112)
        </a>
      </div>

      {/* Silent Actions */}
      <div className="relative z-10 w-full mb-12">
        <p className="text-center text-sm text-zinc-400 mb-4">Kirim bukti secara diam-diam</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl py-4 flex flex-col items-center justify-center transition-colors">
            <Camera size={24} className="text-blue-400 mb-2" />
            <span className="text-xs font-semibold text-zinc-300">Foto Cepat</span>
          </button>
          <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl py-4 flex flex-col items-center justify-center transition-colors">
            <Mic size={24} className="text-amber-400 mb-2" />
            <span className="text-xs font-semibold text-zinc-300">Rekam Suara</span>
          </button>
        </div>
      </div>

      {/* Cancel Button */}
      <div className="relative z-10 w-full pb-8">
        <Link href="/dashboard">
          <button className="w-full bg-transparent border-2 border-zinc-800 hover:bg-zinc-900 text-zinc-400 py-4 rounded-full font-bold transition-all flex items-center justify-center">
            <X size={20} className="mr-2" />
            Batalkan Darurat
          </button>
        </Link>
      </div>

    </div>
  );
}
