'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Camera, Map, User, Calendar } from 'lucide-react';

const navItems = [
  { name: 'Beranda', href: '/dashboard', icon: Home },
  { name: 'Jadwal', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Lapor', href: '/dashboard/report', icon: Camera },
  { name: 'Peta', href: '/dashboard/map', icon: Map },
  { name: 'Profil', href: '/dashboard/profile', icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="h-[100dvh] w-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      {/* Mobile container simulator for desktop viewing */}
      <div className="w-full h-full max-w-md mx-auto bg-zinc-50 dark:bg-zinc-950 sm:shadow-2xl sm:h-[850px] sm:max-h-[100dvh] sm:rounded-[40px] sm:overflow-hidden relative sm:border-[8px] sm:border-zinc-800 flex flex-col">
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto pb-24">
          {children}
        </div>

        {/* Bottom Navigation */}
        <nav 
          className="absolute bottom-0 w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50"
          style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          <ul className="flex justify-between items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link href={item.href} className="flex flex-col items-center justify-center space-y-1 w-16 group">
                    <div className={`p-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 scale-110' 
                        : 'text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900'
                    }`}>
                      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className={`text-[10px] font-medium transition-colors ${
                      isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500'
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </main>
  );
}
