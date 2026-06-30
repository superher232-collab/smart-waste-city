import { Calendar, MapPin, Clock, Car } from 'lucide-react';

export default function SchedulePage() {
  const schedules = [
    {
      id: 1,
      area: 'Kecamatan Tengah (Alun-alun & Sekitarnya)',
      days: 'Senin, Rabu, Jumat',
      time: '06:00 - 09:00 WIB',
      truckId: 'TRK-01 (B 1234 CD)'
    },
    {
      id: 2,
      area: 'Kecamatan Utara (Perumahan Indah)',
      days: 'Selasa, Kamis, Sabtu',
      time: '07:00 - 10:00 WIB',
      truckId: 'TRK-02 (B 5678 EF)'
    },
    {
      id: 3,
      area: 'Kecamatan Selatan (Kawasan Industri)',
      days: 'Setiap Hari',
      time: '16:00 - 19:00 WIB',
      truckId: 'TRK-03 (B 9012 GH)'
    }
  ];

  return (
    <div className="p-6 pt-10 min-h-full">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Jadwal Angkut</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Cek jadwal pengangkutan sampah di area Anda.</p>
      </header>

      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-sm flex items-start">
              <MapPin size={18} className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
              {schedule.area}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mr-3">
                  <Calendar size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Hari</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{schedule.days}</p>
                </div>
              </div>

              <div className="flex items-center text-sm">
                <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mr-3">
                  <Clock size={16} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Waktu</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{schedule.time}</p>
                </div>
              </div>

              <div className="flex items-center text-sm">
                <div className="w-8 h-8 rounded-full bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center mr-3">
                  <Car size={16} className="text-violet-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Armada</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{schedule.truckId}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
