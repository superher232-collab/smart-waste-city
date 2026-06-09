import { MapPin, Navigation, Truck } from 'lucide-react';

export default function MapPage() {
  return (
    <div className="h-full w-full relative bg-zinc-100 dark:bg-zinc-800">
      {/* Decorative Simulated Map Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fake roads and blocks using raw CSS drawing */}
        <div className="absolute top-10 left-[-20%] w-[140%] h-8 bg-zinc-200 dark:bg-zinc-700/50 rotate-12" />
        <div className="absolute top-40 left-[-20%] w-[140%] h-12 bg-zinc-200 dark:bg-zinc-700/50 -rotate-6" />
        <div className="absolute top-[-10%] left-20 w-8 h-[120%] bg-zinc-200 dark:bg-zinc-700/50 rotate-12" />
        <div className="absolute top-[-10%] right-20 w-16 h-[120%] bg-zinc-200 dark:bg-zinc-700/50 -rotate-6" />
        
        {/* Fake park */}
        <div className="absolute top-20 left-40 w-40 h-40 bg-emerald-100 dark:bg-emerald-900/20 rounded-[40px] rotate-3" />
      </div>

      {/* Floating Header */}
      <div className="absolute top-6 left-6 right-6 z-10 flex gap-2">
        <div className="flex-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-white/20 dark:border-zinc-700/30 flex items-center">
          <Navigation size={18} className="text-emerald-500 mr-3" />
          <span className="text-sm font-semibold text-zinc-900 dark:text-white">Rute Aktif</span>
        </div>
      </div>

      {/* Map Pins (Simulated) */}
      <div className="absolute top-[30%] left-[25%] animate-bounce">
        <div className="relative">
          <MapPin size={32} className="text-orange-500 fill-orange-100 dark:fill-orange-900/50" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 blur-[2px] rounded-full" />
        </div>
      </div>
      
      <div className="absolute top-[60%] right-[30%]">
        <div className="relative">
          <MapPin size={32} className="text-orange-500 fill-orange-100 dark:fill-orange-900/50" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 blur-[2px] rounded-full" />
        </div>
      </div>

      <div className="absolute top-[45%] left-[60%] transition-all duration-1000 ease-linear">
        <div className="bg-emerald-500 p-2 rounded-full shadow-lg shadow-emerald-500/40 relative z-20 flex items-center justify-center">
          <Truck size={20} className="text-white" />
        </div>
        {/* Ping animation */}
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
      </div>

      {/* Bottom info card */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white/20 dark:border-zinc-700/30">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Truk #42 (Sektor B)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">2 menit dari lokasi laporan</p>
            </div>
            <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">
              Di Jalan
            </div>
          </div>
          <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[65%] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
